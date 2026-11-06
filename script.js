
function calcularValor(horas, tipo) {

}

// TODO: 64.8 -> "R$ 64,80"   (dica: toFixed e replace)
function formatarMoeda(valor) {

}

// ---------- 2) Funções que mexem no DOM ----------

// selecionando os elementos UMA vez
const inputHoras = document.querySelector('#horas');
const selectTipo = document.querySelector('#tipo');
const btnCalcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

const inputNome = document.querySelector('#nome');
const btnAdicionar = document.querySelector('#adicionar');
const lista = document.querySelector('#lista');
const total = document.querySelector('#total');

const btnTema = document.querySelector('#btnTema');

function mostrarResultado() {
  const horas = Number(inputHoras.value);
  const tipo = selectTipo.value;

  // TODO: se horas for inválida (<= 0 ou NaN), escrever
  // "Informe um número de horas válido" e parar (return)

  // TODO: calcular, formatar e escrever em resultado.textContent
}

function atualizarContador() {
  // TODO: total.textContent = quantidade de <li> dentro da lista
}

function adicionarReserva() {
  const nome = inputNome.value.trim();
  if (nome === '') return;

  // TODO: criar <li> com o nome
  // TODO: criar <button>Remover</button> que remove o li e atualiza o contador
  // TODO: colocar o li dentro da lista, limpar o input e atualizar o contador
}

function alternarTema() {
  // TODO: classList.toggle no body
}

// ---------- 3) Eventos ----------
btnCalcular.addEventListener('click', mostrarResultado);
btnAdicionar.addEventListener('click', adicionarReserva);
btnTema.addEventListener('click', alternarTema);
