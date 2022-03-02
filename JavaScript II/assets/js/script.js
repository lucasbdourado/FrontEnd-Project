function calcMedia(notas){
    let soma = 0;
    for(i=0; i <notas.length; i++)
        soma += notas[i];

    media = soma / notas.length;

    return media;
}

let media;

function aprovacao(notas){
    let media = calcMedia(notas);

    let condicao = media >= 8 ? "Aprovado" : "Reprovado";

    return "Média: " + media + " - Resultado: " + condicao;
}

document.addEventListener("submit", function(event){
    event.preventDefault();

    let formulario = document.getElementById('form-01');
    let form = new FormData(formulario);
    let objeto = {}
    let notas = [];

    for(let key of form.keys()){
        objeto[key] = form.get(key);

        notas.push(parseInt(form.get(key)));
    }
    console.log(notas);
    console.log(objeto);

    texto = aprovacao(notas);

    document.getElementById("resultado").innerHTML = texto;

})