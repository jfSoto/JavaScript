//window.addEventListener("load", function()
//{
$(document).ready(function() {
  /*var tabla = document.querySelector("table")
    var td = document.getElementsByTagName("td")
    var th = document.getElementsByTagName("th")
    var tr = document.getElementsByTagName("tr")

    var khaki = function()
    {
        this.style.background = "khaki"
    }

    var lemonchiffon = function()
    {
        this.style.background = "lemonchiffon"
    }

    var white = function()
    {
        this.style.background = "white"
    }

   tabla.style.border = "2px solid grey"
   tabla.style.borderCollapse = "collapse"

    for(var i = 0; i < td.length; i++)
    {
        td[i].style.border = "2px solid grey"
        td[i].style.padding = "10px"
    }
    for(var i = 0; i < tr.length; i++)
    {
        if(i%2 == 1)
        {
            tr[i].style.background = "lemonchiffon"
        }
        if(i != 0)
        {
            tr[i].addEventListener("mouseenter", khaki)
            if(i%2 == 1)
            {
                tr[i].addEventListener("mouseout", lemonchiffon) 
            }
            else
            {
                tr[i].addEventListener("mouseout", white)
            }
        }
    }
    for(var i = 0; i < th.length; i++)
    {
        th[i].style.border = "2px solid grey"
        th[i].style.padding = "10px"
    }
    tr[0].style.background = "darkkhaki"
*/
  $("table").css({ border: "2px solid grey", borderCollapse: "collapse" });
  $("tr:first").css("background","darkkhaki");
  $("td,th").css({ border: "2px solid grey", padding: "10px" });
  $("tr:odd").css("background","lemonchiffon")
  $("tr").not(":first").hover(function(){$(this).css("background","khaki")})
})
//})
