var getUserDataTransfer = function() {
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
        console.log(email_t)
        console.log(cemail_t)
        alert(amount_transfer)
        alert(Cookies.get('longitud'));
        if (email_t === cemail_t) {
            axios.post('http://localhost:8086/cats/transaccion', {

                    id: parseInt(Cookies.get('longitud')) + 1,
                    valortransacion: amount_transfer,
                    userto: email_t,
                    userfrom: Cookies.get('user')

                })
                .then(function(response) {
                    alert("Transaccion realizada");
                    console.log("Se hizo")
                })
                .catch(function(error) {
                    alert(error + ' No se logro hacer la transaccion')
                })
            axios.put('http://localhost:8086/cats/update-monto/' + email_t + "/" + amount_transfer)
                .then(function(response) {
                    alert("Se actualizo")

                }).catch(function(error) {
                    alert("No Actualizo")
                    console.log(error + ' No se logro traer el usuario')
                })
            axios.put('http://localhost:8086/cats/update-monto-t/' + Cookies.get('user') + "/" + amount_transfer)
                .then(function(response) {
                    alert("Se actualizo")

                }).catch(function(error) {
                    alert("No Actualizo")
                    console.log(error + ' No se logro traer el usuario')
                })




        } else {
            alert("No se pudo realizar la transfrencia");
        }



    }
    /*       swal({
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
            });*/