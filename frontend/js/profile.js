var getUserData = function() {
    let user = Cookies.get('user')
    let name;
    let lastname;
    let email;
    let balance;
    //axios.get('http://ec2-52-207-245-210.compute-1.amazonaws.com:8086/cats/correo/' + user)
    axios.get('http://localhost:8086/cats/correo/' + user)
        .then(function(response) {
            name = response.data.nombre;
            lastname = response.data.apellido;
            email = response.data.correo;
            balance = response.data.monto;
            llenarDatosProfile(name, lastname, email, balance)


        }).catch(function(error) {
            alert("Este correo no existe")
            console.log(error + ' No se logro traer el usuario')
        })



}

var llenarDatosProfile = function(name, lastname, email, balance) {
    $("#account-profile").append("<h5>" + name + " " + lastname + "</h5>")
    $("#profile-name").append("<p>" + name + "</p>");
    $("#profile-apellido").append("<p>" + lastname + "</p>");
    $("#profile-email").append("<p>" + email + "</p>");
    $("#profile-dinero").append("<p>" + balance + "</p>");
}