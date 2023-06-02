# Challenge ONE | Lógica de Programacão | Encriptador de texto

<p align="center" >
     <img width="500" heigth="300" src="https://user-images.githubusercontent.com/91544872/157673573-5e781ce9-601c-4ea3-9db1-b60bebf717aa.png">
</p>

### Bem vindo ao projeto base do Encriptador de texto!

## Challenge 1 - Oracle Next Education
---

# Oracle Next Education Challenge
Desafio de desenvolver um [decodificador de texto](https://www.alura.com.br/challenges/challenge-one-logica/sprint01-construa-decodificador-texto-com-javascript) proposto pela Oracle Next Education + Alura, utilizando o aprendizado em lógica de programação do primeiro módulo com HTML, CSS e Javascript sem o uso de frameworks.

## Requesitos
As "chaves" de criptografia que utilizaremos são:

* A letra `"e"` é convertida para `"enter"`
* A letra `"i"` é convertida para `"imes"`
* A letra `"a"` é convertida para `"ai"`
* A letra `"o"` é convertida para `"ober"`
* A letra `"u"` é convertida para `"ufat"`

Deve funcionar apenas com letras minúsculas.

Não devem ser utilizados letras com acentos nem caracteres especiais.

Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

>Por exemplo:
`gato => gaitober` e/ou `gaitober => gato`

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções.

O resultado deve ser exibido na tela.

## Insights Javascript
#### Impedir o uso de **acentos** e caracteres especiais no input
```javascript
inputText.addEventListener("input", function() {
	this.value = this.value.replace(/[áéíóúçàèìòùãõâêîôûüäëöï!@#$%ˆ&*(_+=_{|\"':;?/.,><})]/gi,"");
});
```
#### Replace
O funcionamento do `replace()` nesse desafio está funcionando da seguinte forma:

1. A chave criptográfica é inserida em uma matriz, na qual é possível ver a tabela quando inspesionar o elemento no navegador.
```javascript
let hashCode= [["e", "enter"],
				["i", "imes"],
				["a", "ai"],
				["o", "ober"],
				["u", "ufat"]];
console.table(hashCode);
```