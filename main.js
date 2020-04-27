
//Função chamada querySelector()para obter uma referência ao seu cabeçalho e armazená-la em uma variável chamada myHeading.

let imagem = document.querySelector('img');

let cabecalho = document.querySelector('h1');

let botao = document.querySelector('button');


if (!localStorage.getItem('nome') || localStorage.getItem('nome') === null ) {

	SetarNome();

} else {
	
	let nome_gravado = localStorage.getItem('nome');

	cabecalho.textContent = 'O nome gravado é:' + nome_gravado;
}


imagem.onclick = function(){

	let caminho = imagem.getAttribute('src');

	if(caminho === 'adriferoli.github.io/space-x-rocket.jpg') {
		imagem.setAttribute('src','adriferoli.github.io/Tesla.png');
		cabecalho.textContent = 'Tesla no trânsito';
	}else{
		imagem.setAttribute('src','adriferoli.github.io/space-x-rocket.jpg');
		cabecalho.textContent ='Space-x saindo da terra.';
	}
}

function SetarNome() {

	let nome = prompt('Digite seu nome.');
	
	if (!nome || nome === null){
		
		SetarNome();
	}else{
		
		localStorage.setItem('nome', nome);
		cabecalho.innerHTML  = 'Olá ' + nome;		
	}

}

botao.onclick = function () {

	SetarNome();

}
