const mode = document.getElementById('mode-icon');//peguei o botão dark pelo id

mode.addEventListener('click', () => {//tudo que vai acontecer após clicar no botão dark
    //objetos que vão alterar para dark
    const corpo = document.getElementById('corpo');
    const form = document.getElementById('formulario');
    const formimg = document.getElementById('form-img');
    const header = document.getElementById('cabecalho');
    const nav = document.getElementById('nav-list');
    const dropdown = document.getElementById('dropdown');

    if(mode.classList.contains('fa-moon')){//condição se estiver dark ou light, e para acionar o modo dark
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        //objetos adicionados para o modo dark
        corpo.classList.add('dark');
        form.classList.add('dark');
        formimg.classList.add('dark');
        header.classList.add('dark');
        nav.classList.add('dark');
        dropdown.classList.add('dark');

        return;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    //objetos adicionados para voltar ao modo light
    corpo.classList.remove('dark');
    form.classList.remove('dark');
    formimg.classList.remove('dark');
    header.classList.remove('dark');
    nav.classList.remove('dark');
    dropdown.classList.remove('dark');
});