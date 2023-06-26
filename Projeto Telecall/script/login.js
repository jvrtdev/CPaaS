const form = document.getElementById('form');
const usuariosString = localStorage.getItem('usuario');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var inputLogin = document.getElementById('login').value;
    var inputSenha = document.getElementById('senha').value;

    const usuariosString = localStorage.getItem('usuarios');
    if (usuariosString) {
        const usuarios = JSON.parse(usuariosString);

    let usuarioEncontrado = false;
    for (const usuario of usuarios) {
        if (usuario.login === inputLogin && usuario.senha === inputSenha) {
            usuarioEncontrado = true
            document.getElementById('alert-login').innerText = 'Usuario logado! Bem-vindo(a)!'
            window.location.href = '../paginas/servico.html'
            break;
        }    
    }
    if (!usuarioEncontrado) {
        document.getElementById('alert-login').innerText = 'Login ou senha incorretos!'
        location.reload();
    }

}   
    else {
        document.getElementById('alert-login').innerText = 'Login inexistente'
    }

    
});













/*if (usuariosString) {
    var usuarios = JSON.parse(usuariosString);

}
else{
    console.log('undefied')
}
*/