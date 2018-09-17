window.addEventListener('load', iniciar);

function iniciar() {
  var btBackgroundAmarelo = document.querySelector('#btBackground');
  btBackgroundAmarelo.addEventListener('click', trocarBackground);

  var chkTextoVermelho = document.querySelector('#chkMudarTexto');
  chkTextoVermelho.addEventListener('change', trocarCorDoTexto);

  var chkMudarTamanho = document.querySelector('#chkMudarTamanho');
  chkMudarTamanho.addEventListener('change', habilitarMudarTamanho);

  var chkTituloItalico = document.querySelector('#chkTituloItalico');
  chkTituloItalico.addEventListener('change', habilitarTextoItalico);

  var chkInverterDiaMes = document.querySelector('#chkInverterDiaMes');
  chkInverterDiaMes.addEventListener('change', InvertedData);

  var chkMudarCorColunaData = document.querySelector('#chkMudarCorColunaData');
  chkMudarCorColunaData.addEventListener('change',MudarCorColunaData);
}

function habilitarMudarTamanho() {
  var celulas = document.querySelectorAll('td');
  console.log(celulas);

  if (this.checked) {
    for (var i = 0; i < celulas.length; i++) {
      celulas[i].addEventListener('mouseover', aumentarTexto);
      celulas[i].addEventListener('mouseout', diminuirTexto);
    }
  } else {
    for (var i = 0; i < celulas.length; i++) {
      celulas[i].removeEventListener('mouseover', aumentarTexto);
      celulas[i].removeEventListener('mouseout', diminuirTexto);
    }
  }
}
function aumentarTexto() {
  this.classList.add('textoMaior');
}
function diminuirTexto() {
  this.classList.remove('textoMaior');
}

function trocarCorDoTexto() {
  var classe = 'novaCorTexto';
  var tabela = document.querySelector('#dadosBanda');
  var texto = document.querySelector('#chkTexto');

  if (this.checked) {
    tabela.classList.add(classe);
  } else {
    tabela.classList.remove(classe);
  }
}

function trocarBackground() {
  var classeBG = 'novoBackground';
  var tabela = document.querySelector('#dadosBanda');

  if (tabela.classList.contains(classeBG)) {
       tabela.classList.remove(classeBG);
       this.value = 'Background amarelo';
  } 
  else {
    tabela.classList.add(classeBG);
      this.value = 'Background padrão';
  }
}
 
function habilitarTextoItalico() {
  var classe = 'textoItalico';
  var tabela = document.querySelector('#cabecalhoBanda');
  var texto = document.querySelector('#chkTexto');

  if (this.checked) {
    tabela.classList.add(classe);
  } else {
    tabela.classList.remove(classe);
  }
}  

function InvertedData() {
  var nascimentos = document.querySelectorAll('td.nascimento');
  
  for (var i = 0; i < nascimentos.length; i++){
    var elementoAtual = nascimentos[i];
    var conteudoAtual = elementoAtual.textContent;
    elementoAtual.textContent = _InverterData(conteudoAtual);
    }
  }

function _InverterData(data){
  var dia = data.substr(0, 2);
  var mes = data.substr(3, 2);
  var ano = data.substr(6, 4);

  return mes + '/' + dia + '/' + ano;
}

function MudarCorColunaData(){
  var classe = 'corColunaData';
  var tabela = document.querySelector('td.nascimento');
  var text = document.querySelectorAll('td.nascimento')

  if (this.checked) {
    tabela.classList.add(classe);
  } else {
    tabela.classList.remove(classe);
  }
}  
