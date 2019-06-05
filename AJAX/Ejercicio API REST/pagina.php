<?php

$conexion = mysqli_connect("127.0.0.1", "root", "root", "apirest");

if (!$conexion) 
{
    echo "<p>Error: No se pudo conectar a MySQL.</p>";
}
else
{
    switch($_SERVER['REQUEST_METHOD'])
    {
        case 'GET': 
            $query = "SELECT * FROM Alumnos";
            $res = mysqli_query($conexion, $query);
            /*echo print_r(mysqli_fetch_row($res));
            echo print_r(mysqli_fetch_row($res));
            echo print_r(mysqli_fetch_row($res));*/
            $array = array();
            $i = 0;
            while ($row = mysqli_fetch_array($res, MYSQLI_ASSOC)) 
            {
                $array[$i] = $row;
                $i++;
            }
            //echo print_r($rawdata);
            echo json_encode($array);
            break;
        case 'POST':
            $query = "INSERT INTO Alumnos (" . $_POST["nombreCampo"] . ") VALUES ('" . $_POST["valorCampo"] . "')";
            $res = mysqli_query($conexion, $query);
            break;
    }
    
}

mysqli_close($conexion);
?>