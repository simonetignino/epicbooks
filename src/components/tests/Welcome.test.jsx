import Welcome from "../Welcome";
import { render, screen } from "@testing-library/react";

// verifico che il componente welcome venga montato correttamente
test("vedo se welcome carica corettamente", () => {
  //renderizzo il componente
  render(<Welcome />);
  //creo una variabile con del testo presente nel componente
  const element = screen.getByText(/App React Epidoce/i);
  //verifico che il testo App React Epicode (con il controllo case-insensitive) sia concretamente presente nel DOM
  expect(element).toBeInTheDocument();
});
