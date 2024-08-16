Saida = ''

function notas(){
    n1 = parseFloat(document.getElementById('n1').value);
    n2 = parseFloat(document.getElementById('n2').value);
    n3 = parseFloat(document.getElementById('n3').value);

    var calc = (n1 + n2 + n3)/3

    saida = `A nota final do aluno é: ${calc}`
    document.getElementById('fn').innerText = saida
}