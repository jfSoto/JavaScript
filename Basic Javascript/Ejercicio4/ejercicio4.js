var nueva_ventana = window.open()
var web = nueva_ventana.prompt("Introduzca la dirección de una página web: ");
var web

//FAVORITOS
switch(web)
{
    case "1":
        web = "https://www.grupostudium.com"
        break
    case "2":
        web = "https://www.google.es"
        break
}
nueva_ventana.location.replace(web);
