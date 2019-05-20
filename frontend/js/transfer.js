var getUserDataTransfer = function() {
    let user = Cookies.get('user')
    let name;
    let lastname;
    let email;
    let balance;
    axios.get('http://ec2-52-207-245-210.compute-1.amazonaws.com:8086/cats/correo/' + user)
        .then(function(response) {
            name = response.data.nombre;
            lastname = response.data.apellido;
            balance = response.data.monto;
            llenarDatosTransaccion(name, lastname, balance)

        }).catch(function(error) {
            alert("Este correo no existe")
            console.log(error + ' No se logro traer el usuario')
        })

}

var llenarDatosTransaccion = function(name, lastname, balance) {
    $("#name-transaction").append(name);
    $("#lastname-transaction").append(lastname);
    $("#balance-transaction").append(balance);
}

var transferMoney = function() {
    var email_t = $("#Email-Transfer").val();
    var cemail_t = $("#CEmail-Transfer").val();
    var amount_transfer = $("#Amount-Transfer").val();
    if (email === cemail_t) {
        swal({
                title: "¿Estas Seguro?",
                text: "Una vez enviado el dinero a una cuenta existente no hay marcha atras. \n\n Datos de la Transaccion: \n email: " + email_t + "\n Valor Transaccion: " + amount_transfer,
                icon: "warning",
                buttons: true,

            })
            .then((willDelete) => {
                if (willDelete) {

                    swal("Hiciste una Transaccion", {
                        icon: "success",
                    })
                } else {
                    swal("No se hizo la transaccion");
                }
            });

    } else {
        alert("Los correos no corresponden")
    }

}