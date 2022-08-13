<?php
class Conectar{
    protected $dbh;

    protected function Conexion (){
        try{
            $conectar = $this -> dbh = new PDO("mysql:local=localhost;dbname=apw_b_crud","root","");
            return $conectar;
            
        } catch(Exception $e){
            print "Error en la conexcion de la base de datos: " . $e->getMessage(). "</br>";
            die();
        }
    }
    public function set_names (){
        return $this -> dbh -> query("SET NAMES 'utf8' ");
    }
}   

?>