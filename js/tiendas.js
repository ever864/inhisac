var tiendas = [];
var resultado = [];
var resmap = [];
const range = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));


$(document).ready(function () {
  $.ajax({
    url: "js/tiendas.json",
    method: "GET",
    dataType: "json",
    success: function (data) {
      //var tiendas = [];
      $.each(data, function () {
        tiendas.push(this)
      });
    },
    error: function () {
      alert('error');
    }
  });
});

function checkCP(x, n, m) {
  if (x >= n && x <= m) {
    return x;
  } else {
    return !x;
  }
}

function buscarTienda() {

  var codPostal = $("#input_cp").val();
  //var codPostal = 1846;
  var buscar = [];

  switch (codPostal) {
    case checkCP(codPostal, 1001, 1439):
      buscar = range(1001, 1439, 1);
      break;
    case checkCP(codPostal, 1440, 2942):
      buscar = range(1440, 2942, 1);
      break;
    case checkCP(codPostal, 6400, 8180):
      buscar = range(6400, 8180, 1);
      break;
    case checkCP(codPostal, 2000, 2300):
      buscar = range(2000, 2300, 1);
      break;
    case checkCP(codPostal, 2440, 2520):
      buscar = range(2440, 2520, 1);
      break;
    case checkCP(codPostal, 3000, 3080):
      buscar = range(3000, 3080, 1);
      break;
    case checkCP(codPostal, 2354, 2357):
      buscar = range(2354, 2357, 1);
      break;
    case checkCP(codPostal, 3740, 3763):
      buscar = range(3740, 3763, 1);
      break;
    case checkCP(codPostal, 4184, 4354):
      buscar = range(4184, 4354, 1);
      break;
    case checkCP(codPostal, 2820, 2840):
      buscar = range(2820, 2840, 1);
      break;
    case checkCP(codPostal, 3100, 3280):
      buscar = range(3100, 3280, 1);
      break;
    case checkCP(codPostal, 3300, 3384):
      buscar = range(3300, 3384, 1);
      break;
    case checkCP(codPostal, 3400, 3485):
      buscar = range(3400, 3485, 1);
      break;
    case checkCP(codPostal, 3500, 3541):
      buscar = range(3500, 3541, 1);
      break;
    case checkCP(codPostal, 3700, 3734):
      buscar = range(3700, 3734, 1);
      break;
    case checkCP(codPostal, 3600, 3636):
      buscar = range(3600, 3636, 1);
      break;
    case checkCP(codPostal, 4000, 4178):
      buscar = range(4000, 4178, 1);
      break;
    case checkCP(codPostal, 4400, 4651):
      buscar = range(4400, 4651, 1);
      break;
    case checkCP(codPostal, 4500, 4514):
      buscar = range(4500, 4514, 1);
      break;
    case checkCP(codPostal, 4600, 4655):
      buscar = range(4600, 4655, 1);
      break;
    case checkCP(codPostal, 4700, 4750):
      buscar = range(4700, 4750, 1);
      break;
    case checkCP(codPostal, 5300, 5386):
      buscar = range(5300, 5386, 1);
      break;
    case checkCP(codPostal, 5400, 5467):
      buscar = range(5400, 5467, 1);
      break;
    case checkCP(codPostal, 5500, 5620):
      buscar = range(5500, 5620, 1);
      break;
    case checkCP(codPostal, 5700, 5900):
      buscar = range(5700, 5900, 1);
      break;
    case checkCP(codPostal, 6200, 6221):
      buscar = range(6200, 6221, 1);
      break;
    case checkCP(codPostal, 6300, 6387):
      buscar = range(6300, 6387, 1);
      break;
    case checkCP(codPostal, 8200, 8299):
      buscar = range(8200, 8307, 1);
      break;
    case checkCP(codPostal, 8300, 8407):
      buscar = range(8300, 8407, 1);
      break;
    case checkCP(codPostal, 8400, 8536):
      buscar = range(8400, 8536, 1);
      break;
    case checkCP(codPostal, 9000, 9220):
      buscar = range(9000, 9220, 1);
      break;
    case checkCP(codPostal, 9300, 9407):
      buscar = range(9300, 9407, 1);
      break;
  }

  for (var i = 0; i < buscar.length; i++) {
    $(tiendas[0]).each(function (key, value) {
      if (buscar[i] == this.key) {
        resultado.push(this.value);
      }
    });
  }

  // $(tiendas[0]).each(function (key, value) {
  //   if (index == this.key) {
  //     resultado.push(this.value);
  //   }
  // })

  resmap = $.map(resultado, function (key, value) {
    return key.tienda
  });

  if (resmap.length == 0) {
    $("#tienda .modal-body .row").remove();
    $("#tienda .modal-body").append(
      '<div class="row">' +
      '<div class="col-md-12">' +
      '<div class="mis-productos">' +
      '<div class="bg-white rounded producto">' +
      '<p>Lo siento, no pudimos encontrar una tienda cercana a tu código postal</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>'
    );

    $("#resultado-tienda").modal("show");
  } else {
    $("#tienda .modal-body .row").remove();
  }

  $.each(resmap, function () {

    $("#tienda .modal-body").append(
      '<div class="row">' +
      '<div class="col-sm-5">' +
      '<div class="mis-productos">' +
      '<div class="bg-white rounded producto">' +
      '<div class="imagen-producto">' + this.map + '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-sm-7">' +
      '<div class="mis-productos">' +
      '<div class="bg-white rounded producto">' +
      '<p><span>Direccion</span><br>' + this.direccion + '</p>' +
      '<p><span>Teléfono</span><br>' + this.telefono + '</p>' +
      '<a href="' + this.link + '" class="btn btn-default btn-naranja" style="margin-top:0;" target="_blank">¿Cómo llegar?</a>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>'
    );

    $("#resultado-tienda").modal("show");
  });

  if (resmap.length > 1) {
    $("#tienda .modal-body .row:not(:first-of-type)").css({
      "margin-top": "15px",
      "border-top": "1px solid #fb4f00",
      "padding-top": "15px"
    });
  }
  resultado = [];
  resmap = [];
}