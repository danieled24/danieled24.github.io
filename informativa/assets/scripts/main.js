//obener loss elementos de la clase .close 
let link = document.querySelectorAll(".close");

//recorrerlos 
links.forEach(function (link) {

    //agregar un evento click a cada uno de ellos
    //case sensitive
    link.addEvenListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        //quitarle las clases de animacion que ya tiene
        content.classList.remove(animate__zoomInLeft);
        content.classList.remove(animate__animated);

        //agregar las clases de animaciones que ya tienen
        content.classList.add("animate__fadeUutUp");
        content.classList.add("animate__animated");

        setTimeout(function () {
            window.history.go(-1);
        }, 600);
        setInterval

        return false;
    });
});