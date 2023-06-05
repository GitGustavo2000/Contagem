
function somar() {
    let checada = document.getElementById('vezes')
    let nVezes = document.getElementById('nVezes').value
    let total = document.getElementById('total').value; // Pega o valor dentro do campo
    let qnt = document.getElementById('qnt').value;     // Pega o valor dentro do campo
    let total01 = document.getElementById('total')     // Pega o campo
    let total02 = parseInt(total) + parseInt(qnt)    // Soma campo1  com campo2
    total01.value = total02

    if (qnt == 0) {
        total01.value = 0
        console.log('olha eu aqui = 0')
    }


    if (checada.checked) {
        let total03 = (parseInt(qnt) * parseInt(nVezes)) + parseInt(total)
        total01.value = total03

    }



}



function diminuir() {
    let checada = document.getElementById('vezes')
    let nVezes = document.getElementById('nVezes').value
    let total = document.getElementById('total').value; // Pega o valor dentro do campo
    let qnt = document.getElementById('qnt').value;     // Pega o valor dentro do campo
    let total01 = document.getElementById('total')     // Pega o campo

    if (checada.checked) {
        let total04 = parseInt(total) - parseInt(qnt) * parseInt(nVezes)
        total01.value = total04
        console.log('estou aqui')

        if (total04 <= 0) {
            total01.value = 0

        }
    }
    else {

        let total02 = parseInt(total) - parseInt(qnt)       // Diminui campo1  com campo2
        total01.value = total02
        console.log(total02)
        console.log('nao era pra eu ta aqui')

        if (total02 <= 0) {
            total01.value = 0

        }

    }

    if (qnt == 0) {
        total01.value = 0
        console.log('olha eu aqui = 0')
    }

}

