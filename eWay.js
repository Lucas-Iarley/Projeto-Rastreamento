const {CepBrasil, 
	CorreiosBrasil,
	 RastreioBrasil 
	} = require('correios-brasil');//chamando o package



/*----------como consultar o CEP --------*/
 
 //introduzindo o pack correiros-brasil na função concultarCep
const {consultarCep} = require('correios-brasil');
const cep = 48900028 ;//o Cep que eu quero
// document.querySelector('.rastrear').value
consultarCep(cep).then((response)=>{
	console.log(response);
});


/*---------como rastrear uma encomenda --------*/
const {rastrearEncomendas} = require('correios-brasil');
//

let codRastreio = ["JN257125105BR"];
//Array de códigos de rastreio. Pode ter mais que um item e pode ter outros formatos

rastrearEncomendas(codRastreio).then((response) =>{
	console.log(response);
	
})



/*como calcular o preço e prazos--------------*/