window.addEventListener("load", cargaPagina);

function cargaPagina() {
	var boton = document.getElementById("btn");
	boton.addEventListener("click", postear);
}
function postear(evento) {
	//cancelar evento del boton(submit)
	evento.preventDefault();

	//creando div contenedor del post
	var posteos = document.getElementById("posteos");
	posteos.classList.add("blanco");
	var textarea = document.getElementById("textarea");
	var posts = document.createElement("div");
	posts.classList.add("posts");

	//añadiendo div de post al div posteos (el cual contendrá a los demás posts)
	posteos.appendChild(posts);

	//img
	var img = document.createElement("img");
	img.setAttribute("src","../imgs/yo.jpg");
	img.classList.add("img");

	//insertando img a div post
	posts.appendChild(img);

	//creando div que tendrá el texto del textarea
	var div = document.createElement("div");
	div.classList.add("inline");
	var texto = textarea.value;
	div.textContent = texto;
	posts.appendChild(div);

	textarea.value="";
}
