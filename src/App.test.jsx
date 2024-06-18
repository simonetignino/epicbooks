import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // per gli assert sugli stili

//Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato
test("controllo se ho caricato tutti i libri", async () => {
  render(<App />);
  const booksList = await screen.findAllByRole("book-card");

  expect(booksList).toHaveLength(150);
});

//Verifica che il filtraggio dei libri tramite navbar si comporti come previsto
test("controllo se l'input di ricerca funziona", async () => {
  render(<App />);
  //vado a prendere la caselli di input
  const searchInput = screen.getByPlaceholderText(/Cerca un libro.../i);
  // cambio il valore al suo interno
  fireEvent.change(searchInput, {
    target: { value: "the last wish: introducing the witcher" },
  });
  //seleziono il libro filtrato tramite il fireEvent di prima
  const filteredBook = await screen.findAllByRole("book-card");

  expect(filteredBook).toHaveLength(1);
});

// Verifica che, cliccando su un libro, il suo bordo cambi colore
test("vedo se la card viene selezionata correttamente", async () => {
  render(<App />);

  const bookItem = await screen.findByTestId("0316438960");

  fireEvent.click(bookItem);
  // expect(bookItem).toHaveStyle("border: 2px solid red");
  expect(bookItem).toHaveStyle("border: 2px solid red");
});

// Verifica che, cliccando su di un secondo libro dopo il primo,
// il bordo del primo libro torni normale
test("verifico che al click di un secondo libro, il primo libro torna senza bordo", async () => {
  render(<App />);

  const bookItem1 = await screen.findByTestId("0316438960");
  const bookItem2 = await screen.findByTestId("0316389706");

  fireEvent.click(bookItem1);
  fireEvent.click(bookItem2);
  // expect(bookItem).toHaveStyle("border: 2px solid red");
  expect(bookItem1).toHaveStyle("border: 1px solid #CBC9C9");
  expect(bookItem2).toHaveStyle("border: 2px solid red");
});

// verifica che all'avvio ella pagina, senza aver ancora cliccato su nessun libro
// non ci siano istante del componente SingleComment all'interno del DOM.
test("verifico che nessun commento spunti senza prima aver selezionato il libro", () => {
  render(<App />);

  //NB: bisogna prendere l'id di un commento esistente, essendo che chiunque può modificarli. Quindi,
  //assicurarsi di selezionare un id esistente
  const comment = screen.queryByTestId("66700a5951a3a20015f062bf");

  expect(comment).not.toBeInTheDocument();
});

// Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente
test("vedo se le recensioni vengono caricate correttamente", async () => {
  render(<App />);
  const book = await screen.findByTestId("0316438960");
  fireEvent.click(book);

  const comment = await screen.findByTestId("001");

  expect(comment).toBeInTheDocument();
});
