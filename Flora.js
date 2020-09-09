let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container')
let containerMenu = document.querySelector('.menu');
let activador = true;
//Menu de navegacion animacion izquierda
btnMenu.addEventListener('click', () =>{
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s";
        activador=false;
    }else{
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        activador=true;
    }
});
//Enlaces y navegacion izquierda
let bol = document.querySelectorAll('.lists li a');
bol.forEach( (element) => {
    element.addEventListener('click', () => {
       menu.style.left = "-100%";
       document.querySelector('.btn-menu i').classList.remove('fa-times');
       document.querySelector('.btn-menu i').classList.add('fa-bars');
       activador=true;
    });
});
//Cambiando la clase active
let enlaces = document.querySelectorAll('.lists li a');
enlaces.forEach( (element) => {
    element.addEventListener('click', (event) => {
       enlaces.forEach( (link) => {
            link.classList.remove('activo');
       });
       event.target.classList.add('activo');
    });
});
//El scroll
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');
window.onscroll = () =>{
    let currenScrollpPos = window.pageYOffset;
    // Mostrar Menu y ocultarlo
    if(prevScrollPos > currenScrollpPos){
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    }else{
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }
    prevScrollPos = currenScrollpPos;
    //Mostrar y ocultar scroll estilos
    let arriba = window.pageYOffset;
    if(arriba <= 600){
        containerMenu.style.borderBottom = "none";
        goTop.style.right = '-100%';
    }else{
        containerMenu.style.borderBottom = "3px solid #ff2e63";
        goTop.style.right = '0';
        goTop.style.transition = "0.5s";
    }
}
goTop.addEventListener('click', () => {
    //para safari la linea de abajo
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
let verAbajo= document.querySelector('#abajo');
verAbajo.addEventListener('click', () => {
    //para safari la linea de abajo
    if(screen.width > 450){
        document.body.scrollTop = 600;
        document.documentElement.scrollTop = 600;
    }else if(screen.width < 451){
        document.body.scrollTop = 640;
        document.documentElement.scrollTop = 640;
    }
});
var noVisible = document.querySelector('.no-visible');
var leerMas = document.querySelector('#about-mas');
var visible = true;
    leerMas.addEventListener('click', () => {
        if(screen.width >= 780){
            if(visible){
                noVisible.style.display = "block";
                leerMas.innerHTML = "Leer menos...";
                document.body.scrollTop = 2000;
                document.documentElement.scrollTop = 2000;
                visible=false;
                console.log(screen.width);
            }else{
                noVisible.style.display = "none";
                leerMas.innerHTML = "Leer más...";
                document.body.scrollTop = 1800;
                document.documentElement.scrollTop = 1800;
                visible=true;
            }
        }else if(screen.width >= 700 && screen.width < 780){
            if(visible){
                noVisible.style.display = "block";
                leerMas.innerHTML = "Leer menos...";
                document.body.scrollTop = 2600;
                document.documentElement.scrollTop = 2600;
                visible=false;
            }else{
                noVisible.style.display = "none";
                leerMas.innerHTML = "Leer más...";
                document.body.scrollTop = 2400;
                document.documentElement.scrollTop = 2400;
                visible=true;
            }
        }else if(screen.width >= 480 && screen.width < 700){
            if(visible){
                noVisible.style.display = "block";
                leerMas.innerHTML = "Leer menos...";
                document.body.scrollTop = 3250;
                document.documentElement.scrollTop = 3250;
                visible=false;
            }else{
                noVisible.style.display = "none";
                leerMas.innerHTML = "Leer más...";
                document.body.scrollTop = 2800;
                document.documentElement.scrollTop = 2800;
                visible=true;
            }
        }else if(screen.width >= 330 && screen.width < 480){
            if(visible){
                noVisible.style.display = "block";
                leerMas.innerHTML = "Leer menos...";
                document.body.scrollTop = 2620;
                document.documentElement.scrollTop = 2620;
                visible=false;
            }else{
                noVisible.style.display = "none";
                leerMas.innerHTML = "Leer más...";
                document.body.scrollTop = 2700;
                document.documentElement.scrollTop = 2700;
                visible=true;
            }
        }else if(screen.width < 330){
            if(visible){
                noVisible.style.display = "block";
                leerMas.innerHTML = "Leer menos...";
                document.body.scrollTop = 2900;
                document.documentElement.scrollTop = 2900;
                visible=false;
            }else{
                noVisible.style.display = "none";
                leerMas.innerHTML = "Leer más...";
                document.body.scrollTop = 2500;
                document.documentElement.scrollTop = 2500;
                visible=true;
            }
        }});
        
    //ventana de carga
window.addEventListener('load', ()=>{
    const contenedorLoader = document.querySelector(".contenedor-loader");
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = "hidden";
    Pacman();
});
function Pacman(){
    let pac = document.querySelector('.pacman');
    pac.style.animation = 'pacman 20s';
}
//Imagen central
let imagenc = document.querySelector('.menu .logo-box img');
let imagencentral = document.querySelector('.imgcentro');
window.addEventListener('load', () => {
    if (screen.width > 426){
        imagenc.addEventListener( 'mouseover', () => {
            imagencentral.style.opacity = '1';
            imagencentral.style.zIndex= "9000";
        })
        imagenc.addEventListener('mouseleave', () => {
            imagencentral.style.opacity = '0';
            imagencentral.style.zIndex= "-1";
        })
        }else{
        imagenc.addEventListener('touchend', () => {
            imagencentral.style.opacity = '0';
            imagencentral.style.zIndex= "-1";
        })
        imagenc.addEventListener( 'touchmove', () => {
            imagencentral.style.opacity = '1';
            imagencentral.style.zIndex= "9000";
        })
        imagenc.addEventListener( 'touchstart', () => {
            imagencentral.style.opacity = "1"
            imagencentral.style.zIndex= "9000";
        })}
})
//animacion del scroll
window.addEventListener('scroll', () => {
    let animacion = document.querySelector('#animado');
    let animacion2 = document.querySelector('#animado2');
    let animacion3 = document.querySelector('#animado3');
    let imagen1 = document.querySelector('.autor .box-info .card-autor .card-img img');
    let posicion1 = animacion.getBoundingClientRect().top;
    let posicion2 = animacion2.getBoundingClientRect().top;
    let posicion3 = animacion3.getBoundingClientRect().top;
    let posicion4 = imagen1.getBoundingClientRect().top;
    let tamañoP = window.innerHeight/1.2;
    if (posicion1 < tamañoP){
        animacion.style.animation = 'animado 2s ease-out';
    }if (posicion2 < tamañoP){
        animacion2.style.animation = "animado 2s ease-out";
    }if (posicion3 < tamañoP){
        animacion3.style.animation = 'animado 2s ease-out';
    }if (posicion4 < tamañoP){
        imagen1.style.animation = "ostias 2s ease-out";
    }
})
//Animacion del width
let titulo = document.querySelector('.img-header .flora-header h1');
let hr2 = document.querySelector('.img-header .flora-header hr');
titulo.addEventListener( 'mouseover', () => {
    hr2.style.background = "yellowgreen";
    hr2.style.transition = ".5s";
})
titulo.addEventListener('mouseleave', () => {
    hr2.style.background = "white";
})