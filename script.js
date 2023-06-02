const texto1 = document.getElementById("textArea");
const textAreaFinal = document.getElementById("textAreaFinal");
const dgtTexto = document.getElementById("dgtTexto");
const boneco = document.getElementById("boneco");



/* INVALIDANDO ENTRADA DE ACENTOS E CARACTERES ESPECIAIS diretamente no input de digitação */
texto1.addEventListener("input", function() {
    this.value = this.value.replace(/[áéíóúçàèìòùãõâêîôûüäëöï!@#$%ˆ&*(_+=_{|\"':;?/.,><})]/gi,"");
})

/* REGRAS DA CRIPTOGRAFIA */
let conversoes = [
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"]
];

console.table(conversoes);

function estilosDeSaida(evento) {
    if(evento == true) {
        textAreaFinal.style.display = 'none';
		boneco.style.display = 'none';
		dgtTexto.style.fontSize = '1.5rem';
		dgtTexto.style.margin = '1.5rem';
    } else {
        textAreaFinal.style.display = 'inline-block';
        boneco.style.display = 'inline-block';
		dgtTexto.style.fontSize = '1.0rem';
		dgtTexto.style.margin = '0.5rem';
	}
}

/* ________________FUNÇÕES DOS BOTÕES________________ */

// Type 1
/* document.getElementById('execCopy').addEventListener('click', execCopy);
function execCopy() {
  document.querySelector("#input").select();
  document.execCommand("copy");
} */

// Type 2
/* document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
    let text = document.querySelector("#input").value;
  await navigator.clipboard.writeText(text);
} */

/* BOTÃO COPIAR */

/* document.getElementById('btnCopiar').addEventListener('click', btnCopiar);
 */function btnCopiar() {
    texto1.value = '';
    /* texto1.innerHTML = dgtTexto.value */
    dgtTexto.innerHTML = "Digite o texto que você deseja criptografar ou descriptografar";
    estilosDeSaida(false);

/*     document.querySelector("#textAreaFinal").select();
    document.execCommand("copy", ''); */
}


/* BOTÃO CRIPTOGRAFAR */
function btnCriptografar() {
    /* const textoCriptofradado = criptografar(texto1.value); */
    dgtTexto.innerHTML = criptografar(texto1.value);
    /* texto1.value = ''; */
    estilosDeSaida(true);
}

/* BOTÃO DESCRIPTOGRAFAR */
function btnDescriptografar() {
        /* const textoDesriptofradado = criptografar(texto1.value); */
    dgtTexto.innerHTML = descriptografar(texto1.value);
    /* texto1.value = ''; */
    estilosDeSaida(true);
}

/* FUNÇÕES DE CRIPTOGRAFIA */

function criptografar(codificarTexto) {
    codificarTexto = codificarTexto.toLowerCase()

    for(let i = 0; i < conversoes.length; i ++) {
        if(codificarTexto.includes(conversoes[i][0])) {
            codificarTexto = codificarTexto.replaceAll(conversoes[i][0], conversoes[i][1]);
        }
    }
    return codificarTexto;
}

function descriptografar(decodificarTexto) {
    decodificarTexto = decodificarTexto.toLowerCase()

    for(let i = 0; i < conversoes.length; i ++) {
        if(decodificarTexto.includes(conversoes[i][1])) {
            decodificarTexto = decodificarTexto.replaceAll(conversoes[i][1], conversoes[i][0]);
        }
    }
    return decodificarTexto;
}
