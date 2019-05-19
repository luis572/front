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
        axios.post('http://ec2-52-207-245-210.compute-1.amazonaws.com:8086/cats/usuario', {
                nombre: nombreI,
                apellido: apellidoI,
                cedula: cedulaI,
                contrasena: contrasenaI,
                correo: correoI

            })
            .then(function(response) {
                alert("Te has registrado");
                console.log(response + ' Se hizo post y se añadio el usuario a la base de datos')
                window.location.assign('login.html')
            })
            .catch(function(error) {
                console.log(error + ' No se logro hacer post')
            })

    }
}

var login = function() {
    var nombreU = $("#correo").val();
    var passwordU = $("#pass").val();
    axios.get('http://ec2-52-207-245-210.compute-1.amazonaws.com:8086/cats/correo/' + nombreU)
        .then(function(response) {
            var passwordUser = response.data.contrasena;
            alert(passwordUser)
            if (passwordU == passwordUser) {
                alert("Entro")
                window.location.assign('perfil.html')
                Cookies.set('user', nombreU);


            } else {
                alert("Tu contraseña no corresponde")

            }

        }).catch(function(error) {
            alert("Este correo no existe")
            console.log(error + ' No se logro traer el usuario')
            alert("stop")
        })



}