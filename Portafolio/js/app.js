//Variables que les daremos el valor de menu y lista 
const menu = document.querySelector('.nav_menu');
const menulista = document.querySelector('.nav_list');
const links = document.querySelectorAll('.nav_link');

//Evento cuando se da click en el boton
menu.addEventListener('click', function(){

    //Toggle cambia de visibilidad el elemento HTML
    menulista.classList.toggle('nav_list--show');
});

//Ciclo que recibe los links como funcion 
links.forEach(function(link){

    //Cada link sera un evento al dar click
    link.addEventListener('click', function(){

        //Cuando se de click en cada lista se esconde el elemento
        menulista.classList.remove('nav_list--show');
    })
});
