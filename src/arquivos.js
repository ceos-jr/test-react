export const arquivos = [
  {
    nome: "membros_ceos",
    filhos: [
      {
        nome: "MX30",
        filhos: [{ nome: "capacitacao", filhos: [{ nome: "react" }] }]
      },
      {
        nome: "Enzo",
        filhos: [
          {
            nome: "fotos",
            filhos: [{ nome: "canva", filhos: [{ nome: "janeiro" }] }]
          }
        ]
      },
      { nome: "Lucas", filhos: [{ nome: "burocracia" }] },
      {
        nome: "Victoria",
        filhos: [
          {
            nome: "relacao_membros",
            filhos: [
              { nome: "said" },
              { nome: "julia" },
              { nome: "guilherme" },
              { nome: "lg" }
            ]
          }
        ]
      }
    ]
  },
  {
    nome: "assets",
    filhos: [
      { nome: "logo" },
      {
        nome: "documentos",
        filhos: [{ nome: "burocracia" }, { nome: "contratos" }]
      }
    ]
  }
];

export const flatten = (data) => {
  return data.reduce((r, { filhos, ...rest }) => {
    r.push(rest);
    if (filhos) r.push(...flatten(filhos));
    return r;
  }, []);
};

export default arquivos;
