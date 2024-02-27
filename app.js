
function pegarTexto() {
    let textoA = document.querySelector('textarea').value;
    
    if (/[\u00C0-\u00FF]/.test(textoA) || /[A-Z]/.test(textoA)) {
        alert("Lembre-se: Apenas palavras sem acentuação e letras minúsculas!");
    } else{
        console.log(`${textoA}`);
        textoA = textoA.replace(/e/g,"enter");
        textoA = textoA.replace(/i/g,"imes");
        textoA = textoA.replace(/a/g,"ai");
        textoA = textoA.replace(/o/g,"ober");
        textoA = textoA.replace(/u/g,"ufat");
        let saida = document.getElementById('saida-funcao');
        saida.innerText = textoA;
        console.log(saida.value);
    }

}

function copiarTexto() {
    let saida = document.getElementById('saida-funcao');
    saida.select();
    document.execCommand("copy");
}

function descriptografar() {
    let textoB = document.querySelector('textarea').value;

    if (/[\u00C0-\u00FF]/.test(textoB) || /[A-Z]/.test(textoB)) {
        alert("Lembre-se: Apenas palavras sem acentuação e letras minúsculas!");
    } else{
        textoB = textoB.replace(/enter/g,"e");
        textoB = textoB.replace(/imes/g,"i");
        textoB = textoB.replace(/ai/g,"a");
        textoB = textoB.replace(/ober/g,"o");
        textoB = textoB.replace(/ufat/g,"u");
        let saida = document.getElementById('saida-funcao');
        saida.innerText = textoB;
    }
}