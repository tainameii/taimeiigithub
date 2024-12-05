const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.passo.ativo'); // Corrigido para '.passo.ativo'
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        
        if (atual) {
            atual.classList.remove('ativo');
        }
        document.getElementById(proximoPasso).classList.add('ativo');
    });
})