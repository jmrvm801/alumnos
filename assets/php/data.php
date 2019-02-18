<?php
include("db.php");
date_default_timezone_set("America/Mexico_City");
setlocale(LC_TIME,'es_MX.UTF-8');

class Alumnos{
  public $c;
  public function Alumnos($method){
    $this->c = new db();
    switch($method){
      case 'getAlumnos':
          $this->getAlumnos();
      break;
    }
  }
  public function getAlumnos(){
    $result = array();
    $this->c->q("SELECT * FROM alumnos ORDER BY created_at LIMIT 6");
    while($row = $this->c->fr()){
      $row[0] = utf8_encode($row[0]);
      $row[1] = utf8_encode($row[1]);
      array_push($result, $row);
    }
    echo json_encode($result);
  }
}

new Alumnos($_POST['method']);

?>