var adicionaSalario = document.querySelector('#add-salario');

adicionaSalario.addEventListener('click', function(){
    var formSalario = document.querySelector('#salario-atividade');

    var salario = formSalario.value;

    if(salario < 1000){
        var novoSalario = (salario*1.10) - salario;-
        alert("Seu Desconto é de: " + novoSalario.toFixed(2));
    }else if(salario >= 1000 && salario < 2000){
        var novoSalario = (salario*1.15) - salario;
        alert("Seu Desconto é de: " + novoSalario.toFixed(2));
    }else{
        var novoSalario = (salario*1.20) - salario;
        alert("Seu Desconto é de: " + novoSalario.toFixed(2));
    }
})