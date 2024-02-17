document.addEventListener('DOMContentLoaded', (event) => {
    function mostrarOpcion() {
        var opcion = document.getElementById('opciones').value;
        var resultado = document.getElementById('resultado');
        switch (opcion) {
          case 'cardiologia':
            resultado.innerHTML = `
            <table>
                <tr>
                    <th><a href="URLGOOGLEMAPS" target="_blank">Centro de Salud</a></th>
                    <th>Atención</th>
                </tr>
                <tr>
                    <td>Médico Cardiología 1</td>
                    <td>8am a 4pm</td>
                </tr>
                <tr>
                    <td>Médico Cardiología 2</td>
                    <td>1pm a 7pm</td>
                </tr>
            </table>`;
            break;
          case 'neurologia':
            resultado.innerHTML = `
            <table>
                <tr>
                    <th><a href="URLGOOGLEMAPS" target="_blank">Centro de Salud</a></th>
                    <th>Atención</th>
                </tr>
                <tr>
                    <td>Médico Neurología 1</td>
                    <td>9am a 5pm</td>
                </tr>
                <tr>
                    <td>Médico Neurología 2</td>
                    <td>2pm a 8pm</td>
                </tr>
            </table>`;
            break;
          case 'pediatria':
            resultado.innerHTML = `
            <table>
                <tr>
                    <th><a href="URLGOOGLEMAPS" target="_blank">Centro de Salud</a></th>
                    <th>Atención</th>
                </tr>
                <tr>
                    <td>Médico Pediatría 1</td>
                    <td>8am a 4pm</td>
                </tr>
                <tr>
                    <td>Médico Pediatría 2</td>
                    <td>1pm a 7pm</td>
                </tr>
            </table>`;
            break;
          case 'general':
            resultado.innerHTML = `
            <table>
                <tr>
                    <th><a href="URLGOOGLEMAPS" target="_blank">Centro de Salud</a></th>
                    <th>Atención</th>
                </tr>
                <tr>
                    <td>Médico General 1</td>
                    <td>8am a 4pm</td>
                </tr>
                <tr>
                    <td>Médico General 2</td>
                    <td>1pm a 7pm</td>
                </tr>
            </table>`;
            break;
          default:
            resultado.innerHTML = 'Por favor, selecciona una especialidad.';
        }
    }
    
    // Aquí es donde vinculamos el botón "Buscar" con la función mostrarOpcion()
    document.getElementById('buscar').addEventListener('click', mostrarOpcion);
    
    function validarEntrada() {
        var opcion = document.getElementById('opciones').value;
        if (opcion === '') {
            alert('Por favor, selecciona una especialidad.');
            return false;
        }
        return true;
    }
    
    function mostrarError(mensaje) {
        var error = document.getElementById('error');
        error.innerHTML = mensaje;
    }
    
    function enviarFormulario() {
        if (!validarEntrada()) {
            return;
        }
        document.getElementById('formulario').submit();
    }

    var modal = document.getElementById("miModal");
    var span = document.getElementsByClassName("cerrar")[0];

    window.onload = function() {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});

