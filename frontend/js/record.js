var obtenerTransacciones = function() {
    axios.get('http://localhost:8086/cats/all-transaccion')
        .then(function(response) {
            llenarTablaRecord(response.data)
        }).catch(function(error) {
            alert("Este correo no existe")
            console.log(error + ' No se logro traer las transacciones')
        })

}
var llenarTablaRecord = function(datos) {
    var recorrer = datos;
    Cookies.set('longitud', recorrer.length)
    for (var i = 0; i < recorrer.length; i++) {

        if (recorrer[i].userfrom == Cookies.get('user')) {
            $("#data-record").append("<tr style='color:red'><td>" + recorrer[i].userfrom + "</td><td>" + recorrer[i].userto + "</td><td>" + recorrer[i].valortransacion + "</td></tr>")
        }
        if (recorrer[i].userto == Cookies.get('user')) {
            $("#data-record").append("<tr style='color:green'><td>" + recorrer[i].userfrom + "</td><td>" + recorrer[i].userto + "</td><td>" + recorrer[i].valortransacion + "</td></tr>")
        }


    }

}