function mostrarOpcion() {
    var opcion = document.getElementById('opciones').value;
    var resultado = document.getElementById('resultado');
    switch(opcion) {
        case 'cardiologia':
            resultado.innerHTML = 'Aquí está la información para la especialidad de Cardiología. <a href="ruta/a/tu/informacion/cardiologia.html">Más información</a>';
            break;
        case 'neurologia':
            resultado.innerHTML = 'Aquí está la información para la especialidad de Neurología. <a href="ruta/a/tu/informacion/neurologia.html">Más información</a>';
            break;
        case 'pediatria':
            resultado.innerHTML = 'Aquí está la información para la especialidad de Pediatría. <a href="ruta/a/tu/informacion/pediatria.html">Más información</a>';
            break;
            case 'general':
                resultado.innerHTML = 'Dr. Wendy Mercado Vaca<br><a href="https://www.google.com/maps/place/Centro+de+salud+San+Vicente/@-14.8325555,-64.9140098,21z/data=!4m10!1m2!2m1!1scentro+de+salud+san+vicente!3m6!1s0x93dd71d333f9b7b1:0xa7406961bfacd9d1!8m2!3d-14.8325237!4d-64.9137963!15sChtjZW50cm8gZGUgc2FsdWQgc2FuIHZpY2VudGWSAQ5tZWRpY2FsX2NlbnRlcuABAA!16s%2Fg%2F11hctj7lj2?entry=ttu">Centro de salud San Vicente</a><br>Atención: Lunes a Viernes de 1 de la tarde a 7 de la noche';
                break;
            
        // Añade más casos aquí para las otras especialidades
        default:
            resultado.innerHTML = 'Por favor, selecciona una especialidad.';
    }
}
