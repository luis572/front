var getData=function(){
    var nombreI=document.getElementById("nombre").value;
    var apellidoI=document.getElementById("apellido").value;
    var cedulaI=document.getElementById("cedula").value;
    var correoI=document.getElementById("correo").value;
    var contrasenaI=document.getElementById("contrasena").value;
    if(nombreI=="" || apellidoI=="" || cedulaI=="" || correoI=="" || contrasenaI ==""){
        alert("Diligencie Completamente Los Datos");
    }if(isNaN(cedulaI)){
        alert("Dijite Datos Validos");
    }else{
        axios.post('ec2-3-81-53-23.compute-1.amazonaws.com:8086/cats/usuario', {
            cedula: cedulaI,
            nombre: nombreI,
            apellido: apellidoI,
            contrasena: contrasenaI,
            Correo: correoI

        })
        .then(function(response) {
            console.log(response + ' Se hizo post y se añadio el usuario a la base de datos')
            window.location.assign('login.html')
        })
        .catch(function(error) {
            console.log(error + ' No se logro hacer post')
        })
        
    }


 }
    
