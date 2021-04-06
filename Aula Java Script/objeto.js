function.externo(){
	
	var pessoa = {
	Nome            : "Alex",
	Sobrenome       : "Gama",
	Departamento    : "fluig"
	};

	document.getElementById("local").innerHTML = pessoa.Nome + " trabalha no " + pessoa.Departamento + "<br />" + pessoa.Nome + " " + pessoa.Sobrenome;
}