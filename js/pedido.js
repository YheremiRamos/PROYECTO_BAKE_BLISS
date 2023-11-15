document.addEventListener('DOMContentLoaded', function () {
    // Precios
    const preciosTortas = {
        selvaNegra: 40, // Torta Selva Negra
    };

    // Aquí están los elementos del formulario
    const porcionesInput = document.getElementById('porciones');
    const nombreProductoInput = document.getElementById('nombreProducto');
    const categoriaProductoInput = document.getElementById('categoriaProducto');
    const dedicatoriaInput = document.getElementById('dedicatoria');
    const totalInput = document.getElementById('total');

    // Evento al cambiar la cantidad de porciones
    porcionesInput.addEventListener('input', function () {
        const nombreTorta = 'selvaNegra';

        // Cálculo
        const precioPorcion = preciosTortas[nombreTorta];
        const cantidadPorciones = parseInt(porcionesInput.value, 10);
        const total = precioPorcion * cantidadPorciones;

        // añadir la S/
        const resultadoFormateado = `S/. ${total.toFixed(2)}`;

        // Actualizar el campo TOTAL
        totalInput.value = resultadoFormateado;
    });

    function ValidarPedido() {
        var categoriaProducto = document.getElementById("categoriaProducto");
        var porciones = document.getElementById("porciones");
        var dedicatoria = document.getElementById("dedicatoria");

        var patron = /^[a-zA-ZñÑ\s+]{1,20}$/;


        // Validar la categoría del producto
        if (categoriaProducto.value == "" || !patron.test(categoriaProducto.value)) {
            alert("Ingrese una categoría válida");
            categoriaProducto.focus();
            return;
        }

        // Validar el número de porciones
        if (porciones.value == "" || porciones.value <= 0) {
            alert("Ingrese un número válido de porciones");
            porciones.focus();
            return;
        }

        // Validar la dedicatoria
        if (dedicatoria.value == "") {
            alert("Ingrese una dedicatoria");
            dedicatoria.focus();
            return;
        }


        var reporte = "";
reporte += "<h2>Pedido Registrado</h2>";
reporte += "Producto             :" + " " + nombreProductoInput.value + "<br/>";
reporte += "Categoría            :" + " " + categoriaProducto.value + "<br/>";
reporte += "Porciones            :" + " " + porciones.value + "<br/>";
reporte += "Dedicatoria          :" + " " + dedicatoria.value + "<br/>";
reporte += "Total a Pagar        :" + " " + total.value + "<br/>";

document.getElementById("reporte").style.visibility = "visible";
document.getElementsByClassName("contenido-texto")[0].innerHTML = reporte;

}

    function LimpiarPedido() {
        document.getElementById("formulario_pedido").reset();
        document.getElementsByClassName("contenido-texto")[0].innerHTML = "";
        document.getElementById("categoriaProducto").focus();
        document.getElementById("reporte").style.visibility = "hidden";
    }

    window.onload = function () {
        document.getElementById("btncompletar").onclick = function () {
            ValidarPedido();
        };

        document.getElementById("btncerrar").onclick = LimpiarPedido;
    };

});
