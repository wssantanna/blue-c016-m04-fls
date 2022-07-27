(function(){
    
    // Capturei o formulário.
    const Formulario = document.forms["auth"];

    // Observo o momento em que o formulário é enviado.
    Formulario.addEventListener('submit', function(evento){
        // Preservamos o estado da página (não permito a atualização).
        evento.preventDefault();
        // Capturar os Inputs.
        let { usuario, senha } = evento.target.elements;
        
        let EmailValor = usuario.value;
        let SenhaValor = senha.value;

        let Credenciais = JSON.stringify({
            email: EmailValor, 
            senha: SenhaValor
        });
        
        // Realizo a ação desejada...
        console.log(Credenciais);
    });
})();