$(window).on("load", function () 
{
    $("#boton").on("click", function () 
    {
        var episode = $("#tvseries").val()
        var url = "http://api.tvmaze.com/shows/" + episode + "/episodes"

        $.getJSON(url, function (datos) 
        {
            $("#contenedor")
                .html($("<table>")
                    .append($("<tr>")
                        .append($("<th>").text("Temporada"),
                            $("<th>").text("Episodio"),
                            $("<th>").text("Título"),
                            $("<th>").text("Fecha"),
                            $("<th>").text("Imagen"))))

            $.each(datos, function (i, episodio) 
            {
                $("<tr>")
                    .append($("<td>").text(episodio.season),
                        $("<td>").text(episodio.number),
                        $("<td>").text(episodio.name),
                        $("<td>").text(episodio.airdate),
                        $("<td>").html("<img src=" + episodio.image.medium + ">"))
                    .appendTo($("table"))
            })
        })
    })
})
