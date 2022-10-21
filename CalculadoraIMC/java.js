function calcula_imc() {
    const peso = Number(document.getElementById("peso").value);
    const nome = document.getElementById("nome").value;
    const altura = Number(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    document.getElementById(`resultado-imc`).innerHTML = `${nome}:${imc.toFixed(2)}`;

    if (imc <= 15.99) {
        document.getElementById(`resultado-categoria`).innerHTML = "Magreza Grave";
        document.getElementById(`resultado-categoria`).className = "perigo";
    } else if (imc >= 16 <= 16.99) {
        document.getElementById(`resultado-categoria`).innerHTML = "Magreza Moderada";
        document.getElementById(`resultado-categoria`).className = "alerta1";
    } else if (imc >= 17 <= 18.5) {
        document.getElementById(`resultado-categoria`).innerHTML = "Magreza Leve";
        document.getElementById(`resultado-categoria`).className = "alerta2";
    } else if (imc >= 18.5 <= 24.9) {
        document.getElementById(`resultado-categoria`).innerHTML = "saudável";
        document.getElementById(`resultado-categoria`).className = "Saudável";
    } else if (imc >= 25 <= 29.9) {
        document.getElementById(`resultado-categoria`).innerHTML = "Sobrepeso";
        document.getElementById(`resultado-categoria`).className = "alerta3";
    } else if (imc >= 30 <= 34.9) {
        document.getElementById(`resultado-categoria`).innerHTML = "Obesidade Grau 1";
        document.getElementById(`resultado-categoria`).className = "alerta4";
    } else if (imc >= 35 <= 39.9) {
        document.getElementById(`resultado-categoria`).innerHTML = "Obesidade Severa";
        document.getElementById(`resultado-categoria`).className = "alerta5";
    } else if (imc >= 40) {
        document.getElementById(`resultado-categoria`).innerHTML = "Obesidade Mórbida";
        document.getElementById(`resultado-categoria`).className = "alerta6";
    }
}
