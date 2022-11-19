import { render, screen } from "@testing-library/react";
import arq, { flatten } from "./arquivos";
import App from "./App";

test("Espera renderizar membros e assets", () => {
  render(<App />);
  const memb = screen.getByText(arq[0].nome);
  const assets = screen.getByText(arq[1].nome);
  expect(memb).toBeInTheDocument();
  expect(assets).toBeInTheDocument();
});

test("Espera todo o resto pra ser renderizado", () => {
  render(<App />);
  const data = flatten(arq);
  data.map((ent) => expect(screen.getByText(ent.nome)).toBeInTheDocument());
});
