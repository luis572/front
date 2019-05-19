var getData = function () {
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
    } if (isNaN(cedulaI)) {
        alert("Dijite Datos Validos");
    }

    else {
        axios.post('http://ec2-54-204-59-190.compute-1.amazonaws.com:8086/cats/usuario', {
            nombre: nombreI,
            apellido: apellidoI,
            cedula: cedulaI,
            contrasena: contrasenaI,
            correo: correoI

        })
            .then(function (response) {
                console.log(response + ' Se hizo post y se añadio el usuario a la base de datos')
                window.location.assign('login.html')
            })
            .catch(function (error) {
                console.log(error + ' No se logro hacer post')
            })

    }
}

var getUser = function () {
    var nombreU = $("#correo").val();
    var passwordU = $("#correo").val();
    axios.get('http://ec2-54-204-59-190.compute-1.amazonaws.com:8086/cats/correo' + usuario)
        .then(function (response) {
            var articulosEnCarrito
            passwordUser = response.data.contrasena;
            $('#contadorCarrito').attr('data-count', articulosEnCarrito)
        })









}

