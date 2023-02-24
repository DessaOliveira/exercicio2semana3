let numero = prompt("Digite seu numero:");
let mensagem = prompt("Digite sua mensagem:");
const link = `api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
document.getElementById("link").innerHTML = `<a href="${link}">link</a>`;
