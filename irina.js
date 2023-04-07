const mensajes = ["Hola, buenos dias", "No molestes", "No deseas nada, verdad"];
function generate(){
 const rand_first = Math.floor(Math.random()* mensajes.length);
document.getElementById('result').innerHTML = mensajes[rand_first];
}