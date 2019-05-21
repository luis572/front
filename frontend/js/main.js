var getData = function() {
    var nombreI = document.getElementById("nombre").value;
    var apellidoI = document.getElementById("apellido").value;
    var cedulaI = document.getElementById("cedula").value;
    var correoI = document.getElementById("correo").value;
    var contrasenaI = document.getElementById("contrasena").value;
    console.log(nombreI);
    console.log(apellidoI);
    console.log(cedulaI);
    console.log(correoI);
    console.log(contrasenaI);
    if (nombreI == "" || apellidoI == "" || cedulaI == "" || correoI == "" || contrasenaI == "") {
        alert("Diligencie Completamente Los Datos");
    }
    if (isNaN(cedulaI)) {
        alert("Dijite Datos Validos");
    } else {
        //axios.post('http://ec2-52-207-245-210.compute-1.amazonaws.com:8086/cats/usuario', {
        axios.post('http://localhost:8086/cats/usuario', {
                nombre: nombreI,
                apellido: apellidoI,
                cedula: cedulaI,
                contrasena: contrasenaI,
                correo: correoI,
                monto: 0

            })
            .then(function(response) {
                window.location.assign('login.html')

            })
            .catch(function(error) {
                swal({ title: '¡Error en el registro!', icon: 'error', text: 'Revisalo Porfa', type: 'success' }).then(function() {
                    console.log("funciono inexistente")
                })
                console.log(error + ' No se logro hacer post')
            })

    }
}

var login = function() {
    var nombreU = $("#correo").val();
    var passwordU = $("#pass").val();
    //axios.get('http://ec2-52-207-245-210.compute-1.amazonaws.com:8086/cats/correo/' + nombreU)
    axios.get('http://localhost:8086/cats/correo/' + nombreU)
        .then(function(response) {
            var passwordUser = response.data.contrasena;
            if (passwordU == passwordUser) {
                window.location.assign('perfil.html')
                Cookies.set('user', nombreU);
                Cookies.set('monto', response.data.monto)
            } else {
                swal({ title: '¡Esa no es tu contraseña!', icon: 'warning', text: 'Revisala', type: 'success' }).then(function() {
                    console.log("funciono")
                })

            }

        }).catch(function(error) {
            swal({ title: '¡Este usuario no existe!', icon: 'error', text: 'Revisalo Porfa', type: 'success' }).then(function() {
                console.log("funciono inexistente")
            })
        })

}