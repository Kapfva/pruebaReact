
<?php 
$destino_a=($_post["destino"]); 
$asunto_a=($_post["asunto"]); 
$mensaje_a=($_post["mensaje"]); 
$encabezado_a = ($_post["encabezado"]); 
$encabezado_a .= 'MIME-Version: 1.0' . "
"; 
$encabezado_a .= 'Content-type: text/html; charset=iso-8859-1' . "
"; 

mail($destino_a, $asunto_a , $mensaje_a,$encabezado_a ) or die ("Su mensaje no se envio."); 


echo "ya, ok"; 
?>