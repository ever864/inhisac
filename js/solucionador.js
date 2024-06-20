$(document).ready(function () {
  step1(0);
});

var boton_comprar = ''

function dateCheck() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  var dateFrom = "10/10/2022";
  //var dateFrom = "08/09/2022";
  var dateTo = "31/01/2023";
  var dateCheck = today;

  var d1 = dateFrom.split("/");
  var d2 = dateTo.split("/");
  var c = dateCheck.split("/");

  var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
  var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
  var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

  //console.log(check >= from && check < to)
  //console.log(!(check >= from && check < to))
  if (!(check >= from && check < to)) {
    boton_comprar = '<a class="btn btn-default btn-azul" id="prod-comprar" style="margin-top:0;">Comprar</a>'
  }
  // if (check >= from && check < to) {
  //   $("#prod-comprar").css('display', 'none !important');
  // }
}

dateCheck();

function step1(value) {
  if (value != 0) {
    $(".form-solucionador").remove();
    location.reload();
  }
  $("#consultor-texto").html('El agua de mi pileta');
  $("#consultor").html(
    '<optgroup label="El agua de mi pileta:">' +
    '<option selected hidden value="">Seleccione opción</option>' +
    '<option value="verde">se puso verde</option>' +
    '<option value="turbia">está turbia</option>' +
    '<option value="marron">se ve marrón/oscura</option>' +
    '<option value="picar">me hace picar los ojos</option>' +
    '<option value="cloro">tiene mucho olor a cloro</option>' +
    '<option value="manchas">tiene manchas negras</option>' +
    '</optgroup>'
  );
}

function step2(value) {
  switch (value) {
    case 'verde':
      $("#consultor option").remove();
      $("#consultor-texto").html('<a onclick="step1();"><span class="fa fa-chevron-circle-left" style="margin-right:15px;"></span></a>' +
        'Ok, tu pileta está verde ¿qué verde exactamente?');
      $("#consultor").html(
        '<optgroup label="¿Qué verde exactamente?:">' +
        '<option selected hidden value="">Seleccione opción</option>' +
        '<option value="verde-transparente">A - Transparente</option>' +
        '<option value="verde-turbio">B - Turbio</option>' +
        '</optgroup>'
      )
      break;
    case 'turbia':
      $("#consultor option").remove();
      $("#consultor-texto").html('<a onclick="step1();"><span class="fa fa-chevron-circle-left" style="margin-right:15px;"></span></a>' +
        'Ok, tu pileta está turbia ¿cuán turbia exactamente?');
      $("#consultor").html(
        '<optgroup label="¿cuán turbia exactamente?:">' +
        '<option selected hidden value="">Seleccione opción</option>' +
        '<option value="turbia-blanco">A - Blanco / Lechoso</option>' +
        '<option value="turbia-verde">B - Verde</option>' +
        '<option value="turbia-marron">C - Marron / Negro / Oscuro</option>' +
        '</optgroup>'
      );
      break;
    case 'marron':
      $("#consultor option").remove();
      $("#consultor-texto").html('<a onclick="step1();"><span class="fa fa-chevron-circle-left" style="margin-right:15px;"></span></a>' +
        'Ok, tu pileta está marrón ¿qué marrón exactamente?');
      $("#consultor").html(
        '<optgroup label="¿Qué marrón exactamente?:">' +
        '<option selected hidden value="">Seleccione opción</option>' +
        '<option value="marron-precipitado">A - Precipitado / Rojizo</option>' +
        '</optgroup>'
      );
      break;
    case 'picar':
      $("#consultor option").remove();
      $("#consultor-texto").html('<a onclick="step1();"><span class="fa fa-chevron-circle-left" style="margin-right:15px;"></span></a>' +
        'Ok, tu pileta te hace picar los ojos ¿qué otra cosa sentís?');
      $("#consultor").html(
        '<optgroup label="¿Qué otra cosa sentís?:">' +
        '<option selected hidden value="">Seleccione opción</option>' +
        '<option value="picar-cloro">A - Olor a cloro</option>' +
        '</optgroup>'
      );
      break;
    case 'cloro':
      $("#consultor option").remove();
      $("#consultor-texto").html('<a onclick="step1();"><span class="fa fa-chevron-circle-left" style="margin-right:15px;"></span></a>' +
        'Ok, tu pileta tiene mucho olor a cloro ¿qué otra cosa sentís?');
      $("#consultor").html(
        '<optgroup label="¿Qué otra cosa sentís?:">' +
        '<option selected hidden value="">Seleccione opción</option>' +
        '<option value="cloro-picazon">A - Picazon de ojos</option>' +
        '</optgroup>'
      );
      break;
    case 'manchas':
      $("#consultor").remove();
      datoPileta("manchas", 1);
      break;

    case 'cloro-picazon':
      $("#consultor").remove();
      $("#consultor-texto").html('¿Qué medidas tiene tu pileta?').css('margin-bottom', '25px');
      datoPileta("cloro-picazon", 1);
      break;
    case 'picar-cloro':
      $("#consultor").remove();
      $("#consultor-texto").html('¿Qué medidas tiene tu pileta?').css('margin-bottom', '25px');
      datoPileta("picar-cloro", 1);
      break;
    case 'marron-precipitado':
      $("#consultor").remove();
      $("#consultor-texto").html('¿Qué medidas tiene tu pileta?').css('margin-bottom', '25px');
      datoPileta("marron-precipitado", 1);
      break;
    case 'turbia-blanco':
      $("#consultor").remove();
      $("#consultor-texto").html('¿Qué medidas tiene tu pileta?').css('margin-bottom', '25px');
      datoPileta("turbia-blanco", 1);
      break;
    case 'turbia-verde':
      $("#consultor").remove();
      $("#consultor-texto").html('¿Qué medidas tiene tu pileta?').css('margin-bottom', '25px');
      datoPileta("turbia-verde", 1);
      break;
    case 'turbia-marron':
      $("#consultor").remove();
      $("#consultor-texto").html('¿Qué medidas tiene tu pileta?').css('margin-bottom', '25px');
      datoPileta("turbia-marron", 1);
      break;
    case 'verde-transparente':
      $("#consultor").remove();
      $("#consultor-texto").html('¿Qué medidas tiene tu pileta?').css('margin-bottom', '25px');
      datoPileta("verde-transparente", 1);
      break;
    case 'verde-turbio':
      $("#consultor").remove();
      $("#consultor-texto").html('¿Qué medidas tiene tu pileta?').css('margin-bottom', '25px');
      datoPileta("verde-turbio", 1);
      break;
  }
}

$("#consultor").change(function () {
  selected = $(this).val();
  step2(selected);
});

function datoPileta(opcion, x) {
  var step = ""
  if ( x == "1") {
    step = "step1(1);"
  } else {
    step = "step2('"+opcion+"', 2);"
  }

  $(".form-solucionador .form-group").html('<a onclick="' + step + '" id="solucionador-back"><span class="fa fa-chevron-circle-left" style="margin-right:15px;"></span><small>cancelar</small></a>' +
    '<span id="consultor-texto" style="margin-bottom:25px;">¿Qué medidas tiene tu pileta?</span>' +
    '<div class="medidas-pileta" style="display: flex; flex-direction: column">' +
    '<input type="number" placeholder="Largo en metros" id="pileta-largo" class="form-control calculador-pileta required" required="true">' +
    '<input type="number" placeholder="Ancho en metros" id="pileta-ancho" class="form-control calculador-pileta required" style="margin: 10px 0;" required="true">' +
    '<small>(profundidad promedio 1,5mts)</small>' +
    "<button onclick='result(\"" + opcion + "\"); return false;' class='btn btn-default btn-azul calculador-pileta' style='margin-top: 25px;'>Listo</button>" +
    '</div>'
  ).css({
    'display': 'flex',
    'flex-direction': 'column'
  });
}

function result(resultado) {
  $("#solucionador-back").remove();
  var largo = $("#pileta-largo").val();
  var ancho = $("#pileta-ancho").val();
  var profundidad = 1.5;
  $(".medidas-pileta").remove();
 
  if (largo != "" && ancho != "") {
    $("#consultor").remove();
    $(".calculador-pileta").css('display', 'none');
    $("#consultor-texto").html('. . .');
    $(".mb-1.bold").css('display', 'block');
    $("#consultor-titulo").html('Un momento, <span>estamos analizando tu consulta</span>');

    setTimeout(function () {
      $("#soluciones .feature-options").css('margin', '100px 0');
      $("#consultor-titulo").html('Nuestra solución <span>Nataclor</span>');
      $("#consultor-texto").remove();
      $("#consultor-resultado").html(
        '<div class="row">' +
        '<div class="col-md-12">' +
        '<div class="mis-productos">' +
        '<div class="bg-white rounded producto">' +
        '<p>' +
        '<span>Diagnóstico</span><br><span id="prod-diagnostico-resultado" style="color:#001e85; font-weight: 400;"></span>' +
        '</p>' +
        '<p>' +
        '<span>Tratamiento</span><br><span id="prod-proceso-resultado" style="color:#001e85; font-weight: 400;"></span>' +
        '</p>' +
        '<p class="prod-pasos">' +
        '<span>Pasos</span><br><span id="prod-pasos-resultado" style="color:#001e85; font-weight: 400;"></span>' +
        '</p>' +
        '<p>' +
        '<span>¿Cómo usarlo en tu pileta?</span><br><span id="prod-dosificacion-resultado" style="color:#001e85; font-weight: 400;"></span>' +
        '</p>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-6">' +
        '<div class="mis-productos">' +
        '<div class="bg-white rounded producto">' +
        '<div class="borde-azul">' +
        '<div class="imagen-producto">' +
        '<img alt="" id="prod-img-resultado">' +
        '<h3 id="prod-titulo-resultado"></h3>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-6">' +
        '<div class="botones" style="margin-top: 30px;text-align:left;">' +
        '<div>' +
        '<a class="btn btn-default btn-azul" id="prod-comprar" style="margin-top:0;">Comprar</a>' +
        '</div>' +
        '<div>' +
        '<a class="btn btn-default btn-transparent border-azul" onclick="step1(1);">Realizar otra consulta</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
      ).css('display', 'block');

      switch (resultado) {
        case "manchas":
          $("#prod-img-resultado").prop({
            'src': 'images/lista-productos/fungicida/1lt.png'
          });
          $("#prod-titulo-resultado").html('Fungicida Nataclor').css('padding', '25px 0');
          $("#prod-diagnostico-resultado").html('Tenés presencia de Algas Negras (Hongos) que son muy resistentes al cloro. No te precupes, lo vamos a solucionar juntos. ');
          $("#prod-proceso-resultado").html('Duración 24hs.');
          $("#prod-pasos-resultado").html('CCepillar levemente la zona de presencia de hongos para quitar la primer capa de la mancha. Colocar el producto  sobre la zona focalizada (evitando manchar la pared de la misma). Esperar una noche; si persiste la presencia de hongos, repetir el proceso hasta que no se vean. Recomendación: Estos hongos están presentes de forma permanente sin que vos los veas, por eso te recomendamos o utilizar más cloro del habitual; o utilizar el funguicida semanal o quincenalmente. ');
          //$("#prod-proporcion-resultado").html('1L / 50.000L');
          $("#prod-dosificacion-resultado").html(function () {
            var dosificacion = ((1 / 50000) * (largo * ancho * profundidad) * 1000);
            return 'Tenés que aplicar: <strong>' + dosificacion.toFixed(2) + '</strong> litros';
          });
          $("#prod-comprar").prop('href', 'https://www.tiendanataclor.com.ar/MLA-754651169-fungicida-para-piletas-de-1-litro-nataclor-rinde--_JM');
          break;

        case "cloro-picazon":
          $("#prod-img-resultado").prop({
            'src': 'images/lista-productos/instantaneo/1kg.png',
            'width': '200'
          }).removeClass('img-fluid');
          $("#consultor-resultado .imagen-producto").append('<img src="images/lista-productos/clarificador/1lt.jpg" width="200" >');
          $("#prod-titulo-resultado").html('Cloro Instantáneo + Clarificador').css('padding', '25px 0');
          $("#prod-diagnostico-resultado").html('"Rompamos el Mito" El olor a cloro en realidad es la cloramina, y está formada por cloruro + restos orgánicos (nitrógeno) que surgen de sudor, bronceador, cremas, algas. Para eliminarla debemos hiperclorar (poner más cloro que lo habitual). No te preocupes, lo vamos a solucionar juntos.');
          $("#prod-proceso-resultado").html('Duración 48hs (Dependiendo de la cantidad)');
          $("#prod-pasos-resultado").html('Hiperclorar a partir de 5 veces la dosis, con 1 hora de recirculado para lograr una mezcla bien homogenea. Siguiendo estos pasos la tenés clara.');
          //$("#prod-proporcion-resultado").html('100g / 10.000L');
          $("#prod-dosificacion-resultado").html(function () {
            var dosificacion = ((100 / 10000) * (largo * ancho * profundidad) * 1000);
            var dosificacion2 = ((1 / 200000) * (largo * ancho * profundidad) * 1000);
            return 'Tenés que aplicar Cloro Instantáneo: <strong>' + dosificacion + '</strong> gramos <br> Tenés que aplicar Clarificador: <strong>' + dosificacion2.toFixed(2) + '</strong> litros ';
          });
          $("#prod-comprar").prop('href', 'https://articulo.mercadolibre.com.ar/MLA-1109167518-cloro-instantaneo-1kg-clarificador-1lt-nataclor-_JM');
          break;

        case "picar-cloro":
          $("#prod-img-resultado").prop({
            'src': 'images/lista-productos/instantaneo/1kg.png',
            'width': '200'
          }).removeClass('img-fluid');
          $("#consultor-resultado .imagen-producto").append('<img src="images/lista-productos/clarificador/1lt.jpg" width="200" >');
          $("#prod-titulo-resultado").html('Cloro Instantáneo + Clarificador').css('padding', '25px 0');
          $("#prod-diagnostico-resultado").html('"Rompamos el Mito" El olor a cloro en realidad es la cloramina, y está formada por cloruro + restos orgánicos (nitrógeno) que surgen de sudor, bronceador, cremas, algas. Para eliminarla debemos hiperclorar (poner más cloro que lo habitual). No te preocupes, lo vamos a solucionar juntos.');
          $("#prod-proceso-resultado").html('Duración 48hs (Dependiendo de la cantidad)');
          $("#prod-pasos-resultado").html('Hiperclorar a partir de 5 veces la dosis, con 1 hora de recirculado para lograr una mezcla bien homogenea. Siguiendo estos pasos la tenés clara');
          //$("#prod-proporcion-resultado").html('100g / 10.000L');
          $("#prod-dosificacion-resultado").html(function () {
            var dosificacion = ((100 / 10000) * (largo * ancho * profundidad) * 1000);
            var dosificacion2 = ((1 / 200000) * (largo * ancho * profundidad) * 1000);
            return 'Tenés que aplicar Cloro Instantáneo: <strong>' + dosificacion + '</strong> gramos  <br> Tenés que aplicar Clarificador: <strong>' + dosificacion2.toFixed(2) + '</strong> litros ';
          });
          $("#prod-comprar").prop('href', 'https://articulo.mercadolibre.com.ar/MLA-1109167518-cloro-instantaneo-1kg-clarificador-1lt-nataclor-_JM');
          break;

        case "marron-precipitado":
          $("#prod-img-resultado").prop({
            'src': 'images/lista-productos/instantaneo/1kg.png',
            'width': '200'
          }).removeClass('img-fluid');
          $("#consultor-resultado .imagen-producto").append('<img src="images/lista-productos/clarificador/1lt.jpg" width="200" >');
          $("#prod-titulo-resultado").html('Cloro Instantáneo + Clarificador').css('padding', '25px 0');
          $("#prod-diagnostico-resultado").html('Tenés presencia de metales en tu pisicina (hierro), ves visible solo la parte oxidada, debemos eliminar todo generando una oxidación total. No te preocupes lo vamos a solucionar juntos.');
          $("#prod-proceso-resultado").html('Duración 24hs');
          $("#prod-pasos-resultado").html('Aplicar 4 medidas (40 grms) de cloro granulado Nataclor (Verde), previa dilución en un balde de 5lts, distribuyéndolo de manera homogénea a lo largo de toda la superficie. Dejar actuar durante 2 horas. Al caer el sol incorporar el clarificador previa dilución preferible en regadera, distribuyéndolo de forma uniforme en toda la superficie de la pileta en forma de lluvia, dejar actuar 8hs. Pasar limpiafondo en funcion desagote. Siguiendo estos pasos la tenés clara.');
          //$("#prod-proporcion-resultado").html('Cloro instantáneo 40g / 10.000L <br> Clarificador 1L / 200.000L');
          $("#prod-dosificacion-resultado").html(function () {
            var dosificacion = ((40 / 10000) * (largo * ancho * profundidad) * 1000);
            var dosificacion2 = ((1 / 200000) * (largo * ancho * profundidad) * 1000);
            return 'Tenés que aplicar Cloro Instantáneo: <strong>' + dosificacion + '</strong> gramos  <br> Tenés que aplicar Clarificador: <strong>' + dosificacion2.toFixed(2) + '</strong> litros ';
          });
          $("#prod-comprar").prop('href', 'https://articulo.mercadolibre.com.ar/MLA-1109167518-cloro-instantaneo-1kg-clarificador-1lt-nataclor-_JM');
          break;

        case "turbia-blanco":
          $("#prod-img-resultado").prop({
            'src': 'images/lista-productos/clarificador/1lt.jpg'
          });
          $("#prod-titulo-resultado").html('Clarificador').css('padding', '25px 0');
          $("#prod-diagnostico-resultado").html('¿Vinieron muchos amigos el fin de semana? ¿Te quedó el agua turbia? El tiempo de filtrado es directamente propocional al uso de la pileta. No te preocupes, lo vamos a solucionar juntos.');
          $("#prod-proceso-resultado").html('1 noche');
          $("#prod-pasos-resultado").html('Diluir el clarificador en una regadera, se aplica sobre toda la superficie en forma de lluvia, no poner aún la bomba en marcha. Al dia siguiente agregar pastilla de gel en la bomba, pasar limpiafondos y mantener la bomba en funcion filtrado durante 6 horas como mínimo. Siguiendo estos pasos la tenés clara.');
          //$("#prod-proporcion-resultado").html('Clarificador 1L / 200.000L');
          $("#prod-dosificacion-resultado").html(function () {
            var dosificacion = ((1 / 200000) * (largo * ancho * profundidad) * 1000);
            return 'Tenés que aplicar: <strong>' + dosificacion.toFixed(2) + '</strong> litros ';
          });
          $("#prod-comprar").prop('href', 'https://www.tiendanataclor.com.ar/MLA-762534529-clarificador-clasico-de-5-litros-nataclor-rinde--_JM');
          break;

        case "turbia-verde":
          $("#prod-img-resultado").prop({
            'src': 'images/lista-productos/alguicida_nataclor/1lt.jpg',
            'width': '200'
          }).removeClass('img-fluid');
          $("#consultor-resultado .imagen-producto").append('<img src="images/lista-productos/clarificador/1lt.jpg" width="200" >');
          $("#prod-titulo-resultado").html('Super Alguicida + Clarificador').css('padding', '25px 0');
          $("#prod-diagnostico-resultado").html(' ¡Tenes una invasión de algas en tu pileta! Las causas pueden ser varias: Aumento temperatura del agua, trabajos de jardineria, lluvia. No te preocupes, lo vamos a solucionar juntos.');
          $("#prod-proceso-resultado").html('Duración 48hs');
          $("#prod-pasos-resultado").html('Cepillá de manera suave la pared previo a incorporar producto. Incorporar super alguicida usando un balde, sobre toda la superficie de la pileta.  Poner en recirculado/filtrado la valvula del filtro, encender la bomba durante 1 hora. Parar la bomba, dejar actuar el producto al menos 8hs. Verificar que haya desaparecido el color verde (se mantiene turbia). Caso contrario aplicar una 2dosis de producto. Incorporar el clarificador previa dulición preferible en regadera, distribuyéndolo de manera uniforme en toda la superficie de la pileta en forma de lluvia, dejar actuar 8hs. Pasar limpiafondo en funcion desagote. Siguiendo estos pasos la tenés clara.');
          //$("#prod-proporcion-resultado").html('Super Alguicida 1L / 50.000L <br> Clarificador 1L / 200.000L');
          $("#prod-dosificacion-resultado").html(function () {
            var dosificacion = ((1 / 50000) * (largo * ancho * profundidad) * 1000);
            var dosificacion2 = ((1 / 200000) * (largo * ancho * profundidad) * 1000);
            return 'Tenés que aplicar Super Alguicida: <strong>' + dosificacion.toFixed(2) + '</strong> litros  <br> Tenés que aplicar Clarificador: <strong>' + dosificacion2.toFixed(2) + '</strong> litros ';
          });
          $("#prod-comprar").prop('href', 'https://articulo.mercadolibre.com.ar/MLA-1106715172-super-alguicida-1lt-clarificador-1lt-nataclor-_JM');
          break;

        case "turbia-marron":
          $("#prod-img-resultado").prop({
            'src': 'images/lista-productos/instantaneo/1kg.png',
            'width': '200'
          }).removeClass('img-fluid');
          $("#consultor-resultado .imagen-producto").append('<img src="images/lista-productos/clarificador/1lt.jpg" width="200" >');
          $("#prod-titulo-resultado").html('Cloro Instantáneo + Clarificador').css('padding', '25px 0');
          $("#prod-diagnostico-resultado").html('Tenés presencia de metales en tu pisicina (hierro), ves visible solo la parte oxidada, debemos eliminar todo generando una oxidación total. No te preocupes lo vamos a solucionar juntos.');
          $("#prod-proceso-resultado").html('Duración 24hs');
          $("#prod-pasos-resultado").html('Aplicar 4 medidas (40 grms) de cloro granulado Nataclor (Verde), previa dilución en un balde de 5lts, distribuyéndolo de manera homogénea a lo largo de toda la superficie. Dejar actuar durante 2 horas. Al caer el sol incorporar el clarificador previa dilución preferible en regadera, distribuyéndolo de forma uniforme en toda la superficie de la pileta en forma de lluvia, dejar actuar 8hs. Pasar limpiafondo en funcion desagote. Siguiendo estos pasos la tenés clara.');
          //$("#prod-proporcion-resultado").html('Cloro instantáneo 40g / 10.000L <br> Clarificador 1L / 200.000L');
          $("#prod-dosificacion-resultado").html(function () {
            var dosificacion = ((40 / 10000) * (largo * ancho * profundidad) * 1000);
            var dosificacion2 = ((1 / 200000) * (largo * ancho * profundidad) * 1000);
            return 'Tenés que aplicar Cloro Instantáneo: <strong>' + dosificacion + '</strong> gramos  <br> Tenés que aplicar Clarificador: <strong>' + dosificacion2.toFixed(2) + '</strong> litros ';
          });
          $("#prod-comprar").prop('href', 'https://articulo.mercadolibre.com.ar/MLA-1109167518-cloro-instantaneo-1kg-clarificador-1lt-nataclor-_JM');
          break;

        case "verde-transparente":
          $("#prod-img-resultado").prop({
            'src': 'images/lista-productos/super_alguicida.jpg'
          });
          $("#prod-titulo-resultado").html('Super Alguicida').css('padding', '25px 0');
          $("#prod-diagnostico-resultado").html('Tenes presencia inicial de algas, pero todavia no invadieron toda tu pileta. No te preocupes, lo vamos a solucionar juntos.');
          $("#prod-proceso-resultado").html('Duración 24hs');
          $("#prod-pasos-resultado").html('Cepillá de manera suave la pared previo a incorporar producto. El producto hay que incorporarlo usando un balde para distribuirlo a lo largo de toda la pared de la pileta. Pasadas las 24hs, pasar limpiafondo en modo desagote hasta eliminar las algas precipitadas en el fondo. Siguiendo estos pasos la tenés clara.');
          //$("#prod-proporcion-resultado").html('1L / 50.000L');
          $("#prod-dosificacion-resultado").html(function () {
            var dosificacion = ((1 / 50000) * (largo * ancho * profundidad) * 1000);
            return 'Tenés que aplicar: <strong>' + dosificacion.toFixed(2) + '</strong> litros ';
          });
          $("#prod-comprar").prop('href', 'https://www.tiendanataclor.com.ar/MLA-905950726-super-alguicida-nataclor-ideal-para-recuperar-agua-verde-_JM');
          break;

        case "verde-turbio":
          $("#prod-img-resultado").prop({
            'src': 'images/lista-productos/super_alguicida.jpg',
            'width': '200'
          }).removeClass('img-fluid');
          $("#consultor-resultado .imagen-producto").append('<img src="images/lista-productos/clarificador/1lt.jpg" width="200" >');
          $("#prod-titulo-resultado").html('Super Alguicida + Clarificador').css('padding', '25px 0');
          $("#prod-diagnostico-resultado").html('¡Tenes una invasión de algas en tu pileta! Las causas pueden ser varias: cambio brusco de temperatura del agua, trabajos de jardineria, lluvia, entre otros. No te preocupes, lo vamos a solucionar juntos.');
          $("#prod-proceso-resultado").html('Duración 48hs');
          $("#prod-pasos-resultado").html('Cepillá de manera suave la pared previo a incorporar producto para eliminar las algas. Incorporar super alguicida usando un balde en toda la superficie de la pileta.  Poner en modo recirculado/filtrado la valvula del filtro y encender la bomba durante 1 hora. Parar la bomba y dejar actuar el producto por al menos 8hs. Verificar que haya desaparecido el color verde (se mantiene turbia). Caso contrario aplicar una 2da dosis de producto. Luego, al final de la tarde incorporar el clarificador previa dilución (preferible en regadera, distribuyéndolo de forma uniforme en toda la superficie de la pileta en forma de lluvia), dejar actuar 8hs. Luego pasar limpiafondo en funcion desagote. Siguiendo estos pasos la tenés clara.');
          //$("#prod-proporcion-resultado").html('Super Alguicida 1L / 50.000L <br> Clarificador 1L / 200.000L');
          $("#prod-dosificacion-resultado").html(function () {
            var dosificacion = ((1 / 50000) * (largo * ancho * profundidad) * 1000);
            var dosificacion2 = ((1 / 200000) * (largo * ancho * profundidad) * 1000);
            return 'Tenés que aplicar Super alguicida: <strong>' + dosificacion.toFixed(2) + '</strong> litros  <br> Tenés que aplicar Clarificador: <strong>' + dosificacion2.toFixed(2) + '</strong> litros ';
          });
          $("#prod-comprar").prop('href', 'https://articulo.mercadolibre.com.ar/MLA-1106715172-super-alguicida-1lt-clarificador-1lt-nataclor-_JM')
          break;
      }
    }, 3000);
  } else {
    ("#pileta-largo").css('border-color', 'red');
    ("#pileta-ancho").css('border-color', 'red');
  }

}