
// Definir a data que vai entrar em contagem regressiva
var countDownDate = new Date("December 17, 2020 12:00:00").getTime();

// Atualizando a contagem regressiva a cada 1 segundo
var x = setInterval(function () {

    //Obtendo a data e hora de hoje
    var now = new Date().getTime();

    // Encontrando a distância de agora e a data da contagem
    var distance = countDownDate - now;

    // Cálculo do tempo e dias, horas, minutos e segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibir o resultado no elemento com id selecionado
    document.getElementById("dday").innerHTML = days + " : " + hours + " : " +
    minutes + " : " + seconds + "  ";

    // Quando o contador chegar a 0, exiba a mensagem ou faça algo 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("dday").innerHTML = "O GRANDE DIA CHEGOU";
    }
}, 1000);

console.log(countDownDate)