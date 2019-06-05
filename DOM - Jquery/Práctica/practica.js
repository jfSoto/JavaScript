$(document).ready(function () 
{
    $("#boton").on("click", function () 
    {
        var textoConcepto = $("#concepto").val()
        var textoCantidad = $("#cantidad").val()
        var textoPrecioUnitario = $("#precioUnitario").val()
        var totalBaseImponible = parseFloat($("#totalBaseImponible").text())
        var totalIva = parseFloat($("#totalIva").text()) 
        var imponible = (textoCantidad * textoPrecioUnitario)
        var iva = ((textoCantidad * textoPrecioUnitario) * 21) / 100
        var retencion = ((totalBaseImponible + parseFloat(imponible)) * 0.15).toFixed(2)
        var total = (totalBaseImponible + parseFloat(imponible)) + (totalIva + parseFloat(iva)) - retencion
        $("table").append("<tr><td>" + textoConcepto + "</td><td>" + textoCantidad + "x" + textoPrecioUnitario + " €</td><td>" + imponible + " €</td><td>" + "21 % " + "(" + iva.toFixed(2) + " €)</td></tr>")  
        $("#totalBaseImponible").text(totalBaseImponible + parseFloat(imponible))  
        $("#totalIva").text((totalIva + parseFloat(iva)).toFixed(2))
        $("#retencion").text("-" + retencion)
        $("#total").text(total)
    })

    var f = new Date();
    $("#fechaHoy").html("Fecha de Factura: " + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    
})