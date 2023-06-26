//var data = [];
const formulario = document.getElementById('myForm');
formulario.addEventListener('submit', function(event) {
//    event.preventDefault();
    var name = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var nameMother = document.getElementById('nomem').value;
    var dataNasc = document.getElementById('datanasc').value;
    var cpf = document.getElementById('cpf').value;
    var cep = document.getElementById('cep').value;
    var logradouro = document.getElementById('logradouro').value;
    var numero = document.getElementById('numero').value;
    var estado = document.getElementById('estado').value;
    var cidade = document.getElementById('cidade').value;
    var celular = document.getElementById('cel').value;
    var telefone = document.getElementById('tel').value;
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var confirmSenha = document.getElementById('confirmsenha').value;
    var checkboxArray = [];
    //verificar o checkbox ativo e jogar para o id para o array
    const checkboxes = document.querySelectorAll('.genero')
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkboxArray.push(checkbox.id);
        }
    });

    if(senha.value !== 8){
        document.getElementById('form-condition').innerText = 'A senha deve ter 8 caracteres'
        event.preventDefault();
    }



    if (senha !== confirmSenha) {
        document.getElementById('form-condition').innerText = 'Os campos de senha não correspondem. Por favor, tente novamente.'
        event.preventDefault();
    }
    else{
        document.getElementById('form-condition').innerText = '';
        window.location.href = '../paginas/login.html';
    }
    
    /*var formData = {
        name: name,
        email:email,
        nomedaMae: nameMother,
        dataNasc: dataNasc,
        cpf: cpf,
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        estado: estado,
        cidade: cidade,
        celular: celular,
        telefone: telefone,
        login: login,
        senha: senha,
        confirmSenha: confirmSenha,
        genero: checkboxArray,
    };*/
    let usuarios = new Array();
    // verificar se já existem usuarios no localStorage
    if (localStorage.hasOwnProperty('usuarios')){
        //recupera os valores da propiedade usuarios do localstorage
        //converte de string para object
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
    }
//código antigo 
    /*const usuariosString = localStorage.getItem('usuarios');
    if (usuariosString) {
        usuarios = JSON.parse(usuariosString);
    }
*/




//adicionar objeto ao array (antes eu estava adicionado uma VARIAVEL do tipo objeto, então estava sempre substituindo valor da variavel)
    usuarios.push({
        name,
        email,
        nameMother,
        dataNasc,
        cpf,
        cep,
        logradouro,
        numero,
        estado,
        cidade,
        celular,
        telefone,
        login,
        senha,
        confirmSenha,
        checkboxArray});
    //converter o objeto em uma string JSON
    //const formDataJSON  = JSON.stringify(data);
    
    //salvar array atualizado no localStorage
    //localStorage.setItem('usuario', formDataJSON);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    //localStorage.usuario = JSON.stringify(usuarios)
    //redirecionar para a tela de login
    

    
});


    