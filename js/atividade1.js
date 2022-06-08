var adicionaNome = document.querySelector('#add-nome');

adicionaNome.addEventListener('click', function(){
    var form = document.querySelector('#nome-atividade');

    var nome = form.value;

    alert(nome);
})
