document.addEventListener('DOMContentLoaded', function() {
    alert('Bem-vindo ao meu site!');
});
var contador = document.getElementById('contador');
var valorInicial = 0;
var valorFinal = 100;

var elemento = document.getElementById('meu-elemento');

elemento.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#FFD700';
});

elemento.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
