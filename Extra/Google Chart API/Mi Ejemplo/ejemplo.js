window.addEventListener("load", function () 
{
    google.charts.load('current', { packages: ['corechart'] });
 
    function drawChart1() 
    {
 
        var options = 
        {
            'title': 'Número de Alumnos',
            'width': 550,
            'height': 400,
            'pieHole': 0.4
        };
 
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Especialidad');
        data.addColumn('number', 'Percentage');
        data.addRows([
            ['Aprobados', 12],
            ['Suspensos', 2],
            ['Asignaturas Pendientes', 1]
        ]);
 
        var chart1 = new google.visualization.PieChart(document.getElementById('container1'));

        chart1.draw(data, options);
 
    }
    function drawChart2() 
    {
 
        var options = 
        {
            'title': 'Número de Alumnos',
            'width': 550,
            'height': 400,
        };
 
        var data = google.visualization.arrayToDataTable([
            ['Elemento', 'Número de alumnos DAW', 'Número de alumnos DAM', 'Número de alumnos ASIR', /*{ role: 'style' }*/],
            ['Aprobados', 12, 14, 10, /*"#7CFC00"*/],            // RGB value
            ['Suspensos', 2, 4, 7, /*'red'*/],            // English color name
            ['Asignaturas Pendientes', 1, 2, 4, /*'color: #FFD700'*/ ], // CSS-style declaration
         ]);
 
        var chart2 = new google.visualization.BarChart(document.getElementById('container2'));

        chart2.draw(data, options);
 
    }
    google.charts.setOnLoadCallback(drawChart1);
    google.charts.setOnLoadCallback(drawChart2);

})