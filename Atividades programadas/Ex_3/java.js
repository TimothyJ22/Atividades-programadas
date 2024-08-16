saida = ''

function calc(){
    var pd = document.getElementById('pro').value;
    var dc = document.getElementById('desc').value;

    var por = dc / 100
    var mult = por * pd
    var dest = pd - mult

    saida = `O valor do produto com desconto é: R$${dest}`

    document.getElementById('rlt').innerText = saida
}