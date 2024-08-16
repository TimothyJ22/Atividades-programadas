saida = ''

function calc(){
    var n1 = document.getElementById('bs').value;
    var n2 = document.getElementById('hg').value;

    var a = parseInt(n1) * parseInt(n2)

    saida = `A Área do retângulo é: ${a}`

    document.getElementById('res').innerText = saida
}