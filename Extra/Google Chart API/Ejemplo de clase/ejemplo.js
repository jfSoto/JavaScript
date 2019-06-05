window.addEventListener("load", function () 
{
    google.charts.load('current', { packages: ['corechart', 'line', 'calendar'] });
 
    function drawChart1() 
    {
 
        var options = 
        {
            'title': 'Número de Alumnos',
            'width': 550,
            'height': 400
        };
 
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Especialidad');
        data.addColumn('number', 'Percentage');
        data.addRows([
            ['Aprobados', 12],
            ['Suspensos', 2],
            ['Asignaturas Pendientes', 1]
        ]);
 
        var chart = new google.visualization.PieChart(document.getElementById('container1'));
        chart.draw(data, options);
 
    }

    function drawChart2() 
    {
 
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Día');
      data.addColumn('number', 'DAW');
      data.addColumn('number', 'DWES');
      data.addColumn('number', 'DWEC');

      data.addRows([
        ["20/11/2018",  20, 15, 23],
        ["20/12/2018",  13, 16, 20],
        ["20/01/2019",  15, 12, 10],
        ["20/02/2019",  11, 18, 10],
        ["20/03/2019",  12, 14, 15],
       
      ]);

      var options = {
        chart: {
          title: 'Número de entrega de prácticas',
        },
        width: 900,
        height: 500
      };
 
      var chart = new google.charts.Line(document.getElementById('container2'));

      chart.draw(data, google.charts.Line.convertOptions(options));
 
    }

    function drawChart3() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'date', id: 'Date' });
        dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
        dataTable.addRows([
           [ new Date(2018, 10, 20), 38705 ],
         [ new Date(2018, 10, 21), 38447 ],
           [ new Date(2018, 10, 22), 38210 ],
           [ new Date(2018, 11, 20), 38705 ],
           [ new Date(2018, 11, 21), 38447 ],
           [ new Date(2018, 11, 22), 38210 ],
           [ new Date(2019, 0, 20), 38705 ],
           [ new Date(2019, 0, 21), 38447 ],
           [ new Date(2019, 0, 22), 38210 ],
           [ new Date(2019, 1, 20), 38705 ],
           [ new Date(2019, 1, 21), 38447 ],
           [ new Date(2019, 1, 22), 38210 ],
           [ new Date(2019, 2, 20), 38705 ],
           [ new Date(2019, 2, 21), 38447 ],
           [ new Date(2019, 2, 22), 38210 ]
         ]);
 
        var chart = new google.visualization.Calendar(document.getElementById('container3'));
 
        var options = {
          title: "Fecha de entrega de prácticas",
          height: 350,
        };
 
        chart.draw(dataTable, options);
    }
    google.charts.setOnLoadCallback(drawChart1);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);

})