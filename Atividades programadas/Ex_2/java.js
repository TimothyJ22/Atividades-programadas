saida = ''

function fahrenheit(){
    var c = document.querySelectorAll('input')[0].value
   

    var mult = c * 1.8
    var fh = mult + 32

    saida = `O valor em fahrenheit é: ${fh}`

    document.getElementById('result').innerText = saida
}