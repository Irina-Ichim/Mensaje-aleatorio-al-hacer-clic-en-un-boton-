const mensajes = ["Si tienes dudas, pregunta al papa Google.", "¡No molestes, gracias!", "El tío Youtube, te puede ayudar."];
function generate(){
 const rand_first = Math.floor(Math.random()* mensajes.length);
document.getElementById('result').innerHTML = mensajes[rand_first];
}