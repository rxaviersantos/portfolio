document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

// Regas do orçamento
// 01 - Valor por página:-- R$ 120,00
// 02 - Script: ----------- 10% do custo das páginas
// 03 - Layout: ----------- R$ 600,00
// 04 - Taxa de urgência: - 10% do custo total por semana de urgência (Taxa de urgência é aplicada no custo total do projeto Valor página + Script + Layout ).

document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document
  .querySelector("#layout-sim")
  .addEventListener("change", atualizarPreco);
document
  .querySelector("#layout-nao")
  .addEventListener("change", atualizarPreco);
document.querySelector("#prazo").addEventListener("change", function () {
  const prazo = document.querySelector("#prazo").value;
  document.querySelector(
    "label[for=prazo]"
  ).innerHTML = `Prazo: ${prazo} semanas`;
  atualizarPreco();
});

function atualizarPreco() {
  const qtde = document.querySelector("#qtde").value;
  const temJS = document.querySelector("#js").checked;
  const incluiLayout = document.querySelector("#layout-sim").checked;
  const prazo = document.querySelector("#prazo").value;

  // Regra 01
  let preco = qtde * 120;
  // Regra 02
  if (temJS) preco *= 1.1;
  // Regra 03
  if (incluiLayout) preco += 600;
  let taxaUrgencia = 1 - prazo * 0.1;
  preco *= 1 + taxaUrgencia;

  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}
