import CommentArea from "../CommentArea";
import { screen, render } from "@testing-library/react";

//Verifica che il componente CommenArea venga renderizzato correttamente
test("vedo se CommenArea renderizza correttamente", async () => {
  render(<CommentArea />);
  //vedo se il caricamento non è andato a buon fine verificando la presenza del messaggio di errore
  const errorComments = await screen.findByText(/Errore di caricamento/i);
  expect(errorComments).toBeInTheDocument();
});
