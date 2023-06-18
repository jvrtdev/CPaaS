const mode = document.getElementById('mode-icon');

mode.addEventListener('click', () => {
    const header = document.getElementById('cabecalho');
    const background = document.getElementById('corpo');
    const form = document.getElementById('formulario');
    const nav = document.getElementById('nav-list');

    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        //obejtos que serão mudados para o dark
        header.classList.add('dark');
        background.classList.add('dark');
        form.classList.add('dark');
        nav.classList.add('dark');

        return;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    //objetos para voltar ao modo light
    header.classList.remove('dark');
    background.classList.remove('dark')
    form.classList.remove('dark');
    nav.classList.remove('dark');

})