function showHide(id){
    let container = document.querySelector(id);
    container.classList.toggle('active');
}

function showBar(){
    let menuMobile = document.querySelector('.box-mobile');
    let iconMenu = document.querySelector('#icon');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open') 
        iconMenu.classList.remove('fa-x')
        iconMenu.classList.add('fa-bars')
    }else{
        menuMobile.classList.add('open') 
        iconMenu.classList.remove('fa-bars')
        iconMenu.classList.add('fa-x')
    }
/*jv_vj-*/
}

