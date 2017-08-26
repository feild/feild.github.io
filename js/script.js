/*
JavsScript
*/
  // creamos un objeto de firebase, y le pasamos la URL como parametro
  var ref = new Firebase("https://proyectorpi.firebaseio.com/");

  // Traemos el valor de los sensores
  ref.once("value", function(res) {

    var sensorTemp = res.child("sensor/temp");
    var valorSensorTemp = sensorTemp.val()
    $('#temp').text(valorSensorTemp);

    var sensorSoil = res.child("sensor/soil");
    var valorSensorSoil = sensorSoil.val()
    $('#soil').text(valorSensorSoil);
	
	var ph = res.child("sensor/ph");
    var valorph = ph.val()
    $('#ph').text(valorph);

    // llamamos, la funcion cambiarImagen.
    cambiarImagen(valorSensorSoil,valorSensorTemp,valorph)

  });

  // Obtenemos el valor de los sensores cada vez que hay un cambio
  // (En tiempo real)
  ref.on("child_changed", function(res) {

    var valorSensorTemp = res.val().temp
    $('#temp').text(valorSensorTemp);

    var valorSensorSoil = res.val().soil
    $('#soil').text(valorSensorSoil);
	
	var valorph = res.val().ph
    $('#ph').text(valorph);

    cambiarImagen(valorSensorSoil,valorSensorTemp,valorph)

  });

  /*
    función para cambiar la imagen de fondo
    de acuerdo a los valores de los sensores
  */

  function cambiarImagen(valorSensorSoil, valorSensorTemp, valorph){

    if(valorSensorSoil>=0.5){

        console.log("Es de dia");

        if(valorSensorTemp<17){

          /*console.log("dia frio");
          $("#imgagriculture1").siblings().fadeOut(3000);
          $("#imgagriculture1").fadeIn(3000);
          $("#dia").text("Dia Frio");*/

        }
        else if(valorSensorTemp>17 && valorSensorTemp<=23){
          /*console.log("dia fresco");
          $("#imgagriculture2").siblings().fadeOut(3000);
          $("#imgagriculture2").fadeIn(3000)
          $("#dia").text("Dia Fresco");*/
        }

        else if(valorSensorSoil>0.4){
          /*console.log("dia Calido");
          $("#imgagriculture4").siblings().fadeOut(3000);
          $("#imgagriculture4").fadeIn(3000);
          $("#dia").text("ON");*/
        }

    }else{
        /*console.log("Es de noche");
        $("#imgagriculture4").siblings().fadeOut(3000);
        $("#imgagriculture4").fadeIn(3000);
        $("#dia").text("OFF");*/

    }
 }
