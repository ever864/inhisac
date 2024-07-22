var filters = [];

$(document).ready(function () {
  $("#oxypool .comprar").prop("href", "#");
  $("#oxypool_img")
    .attr("src", "images/lista-productos/oxypool.png")
    .attr("alt", "oxypool");

  $("#granulado .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-810735222-cloro-granulado-disolucion-lenta-1kg-nataclor-_JM#position=8&search_layout=stack&type=item&tracking_id=b923c56e-c138-4e9e-80e7-5f4c3aad183d",
  );
  $("#granulado_img")
    .attr("src", "images/lista-productos/granulado/1kg.png")
    .attr("alt", "cloro granulado");

  $("#instantaneo .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-762534523-cloro-granulado-instantaneo-1kg-nataclor-_JM",
  );
  $("#instantaneo_img")
    .attr("src", "../images/lista-productos/instantaneo/1kg.png")
    .attr("alt", "cloro granulado instantaneo");

  $("#ya .comprar").prop(
    "href",
    "https://tiendanataclor.com.ar/MLA-836522961-cloro-instantaneo-multiaccion-dicloro-ya-1-kilo-nataclor-x-2-_JM",
  );
  $("#ya_img")
    .attr("src", "images/lista-productos/instantaneo_multiaccion/1kg.png")
    .attr("alt", "multiacción instantáneo");

  //$("#multiaccion_img").attr('src', '../images/lista-productos/instantaneo_multiaccion/5kg.jpg');

  $("#pastillas-50 .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-754651116-pastillas-de-cloro-activo-50gr-de-1kg-nataclor-rinde--_JM",
  );
  $("#pastillas50_img")
    .attr("src", "images/lista-productos/pastillas/50gr_1kg.png")
    .attr("alt", "pastillas 50g 1kg");

  $("#pastillas-200 .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-773122609-pastillas-de-cloro-activo-200gr-de-1kg-nataclor-rinde--_JM",
  );
  $("#pastillas200_img")
    .attr("src", "images/lista-productos/pastillas/200gr_1kg.png")
    .attr("alt", "pastillas 200g");

  $("#pastillas-multiaccion-200 .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-817601382-cloro-en-pastillas-multiaccion-200gr-de-1kg-nataclor-_JM",
  );
  $("#pastillas200ma_img")
    .attr("src", "images/lista-productos/pastillas_multiaccion/200gr_1kg.png")
    .attr("alt", "pastillas multiacción 200g");

  $("#boya .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-773122145-boya-para-pileta-multiaccion-recargable-nataclor-_JM",
  );
  $("#boya_img")
    .attr("src", "images/lista-productos/boya.png")
    .attr("alt", "boya recargable");

  $("#natabio .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-762534636-natabio-tratamiento-para-pileta-sin-cloro-1-litro-nataclor-_JM",
  );
  $("#natabio_img")
    .attr("src", "images/lista-productos/natabio/1lt.png")
    .attr("alt", "natabio");

  $("#alguicida .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-762534518-alguicida-de-5-litros-nataclor-rinde--_JM",
  );
  $("#alguicida_img")
    .attr("src", "images/lista-productos/alguicida_nataclor/1lt.png")
    .attr("alt", "alguicida");

  $("#super-alguicida .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-905950726-super-alguicida-nataclor-ideal-para-recuperar-agua-verde-_JM",
  );
  $("#superalguicida_img")
    .attr("src", "images/lista-productos/super_alguicida.png")
    .attr("alt", "super alguicida");

  $("#clarificador .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-762534529-clarificador-clasico-de-5-litros-nataclor-rinde--_JM",
  );
  $("#clarificador_img")
    .attr("src", "images/lista-productos/clarificador/1lt.png")
    .attr("alt", "clarificador");

  $("#fungicida .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-754651169-fungicida-para-piletas-de-1-litro-nataclor-rinde--_JM",
  );
  $("#fungicida_img")
    .attr("src", "images/lista-productos/fungicida/1lt.png")
    .attr("alt", "fungicida");

  $("#gel-clarificador .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-833510331-gel-clarificador-nataclor-75grs-x-4-unid-potencia-tu-filtro-_JM",
  );
  $("#gelclarificador_img")
    .attr("src", "images/lista-productos/gel_clarificador/75gr_01.png")
    .attr("alt", "gel clarificador");

  $("#ph-mas .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-838239901-regulador-elevador-ph-mas-2-kg-nataclor-_JM",
  );
  $("#phmas_img")
    .attr("src", "images/lista-productos/phmas.png")
    .attr("alt", "ph + nataclor");

  $("#ph-menos .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-772387159-regulador-para-pileta-de-ph-menos-2-kg-nataclor-rinde--_JM",
  );
  $("#phmenos_img")
    .attr("src", "images/lista-productos/phmenos.png")
    .attr("alt", "ph - nataclor");

  $("#multiaccion-lona .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-811939534-pastillas-de-cloro-multiaccion-piletas-de-lona-14-kilo-nata-_JM#position=3&search_layout=stack&type=item&tracking_id=19db1bc1-2617-4e73-b813-b456f7e1039c",
  );
  $("#multiaccionlona_img")
    .attr("src", "images/lista-productos/pastillas_multiaccion/lona_250gr.png")
    .attr("alt", "pastillas multiacción lona");

  $("#alguicida-lona .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-754651099-alguicida-de-500-cc-nataclor-piletas-de-lona-rinde--_JM",
  );
  $("#alguicidalona_img")
    .attr("src", "images/lista-productos/alguicida_nataclor/lona_500cc.png")
    .attr("alt", "alguicida piletas de lona");

  $("#kit-lona .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-772387170-kit-para-pileta-de-lona-pastillas-multiaccion-boya-nataclor-_JM",
  );
  $("#kitlona_img")
    .attr("src", "images/lista-productos/kit_piletas_lona.png")
    .attr("alt", "kit piletas de lona");

  $("#natabio-lona .comprar").prop(
    "href",
    "https://www.tiendanataclor.com.ar/MLA-762534642-natabio-tratamiento-para-pileta-lona-sin-cloro-500cc-nataclo-_JM",
  );
  $("#natabiolona_img")
    .attr("src", "images/lista-productos/natabio/lona_500cc.png")
    .attr("alt", "natabio piletas de lona");

  product = location.search.split("?param:").join("");

  if (product.length != 0) {
    $("#opcion-" + product).prop("checked", ":checked");
    check_option("#opcion-" + product);
  } else {
    $("#f-todos").prop("checked", true);
  }
});

$("#prod1").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#granulado .comprar").prop("href", "#");
      $("#granulado_img")
        .attr("src", "images/lista-productos/granulado/1kg.png")
        .attr("alt", "producto 1");
      break;
    case "2":
      $("#granulado .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-810735082-cloro-granulado-disolucion-lenta-5kg-nataclor-_JM",
      );
      $("#granulado_img")
        .attr("src", "images/lista-productos/granulado/5kg.png")
        .attr("alt", "cloro granulado");
      break;
    case "3":
      $("#granulado .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-810735457-cloro-granulado-disolucion-lenta-10kg-nataclor-_JM",
      );
      $("#granulado_img")
        .attr("src", "images/lista-productos/granulado/10kg.png")
        .attr("alt", "cloro granulado");
      break;
    case "4":
      $("#granulado .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-810735079-cloro-granulado-disolucion-lenta-20kg-nataclor-_JM",
      );
      $("#granulado_img")
        .attr("src", "images/lista-productos/granulado/20kg.png")
        .attr("alt", "cloro granulado");
      break;
  }
});

$("#prod2").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#instantaneo .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534523-cloro-granulado-instantaneo-1kg-nataclor-_JM",
      );
      $("#instantaneo_img")
        .attr("src", "images/lista-productos/instantaneo/1kg.png")
        .attr("alt", "cloro granulado instantaneo");
      break;
    case "2":
      $("#instantaneo .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-819982019-cloro-granulado-instantaneo-5kg-nataclor-_JM",
      );
      $("#instantaneo_img")
        .attr("src", "images/lista-productos/instantaneo/3kg.png")
        .attr("alt", "cloro granulado instantaneo");
      break;
    case "3":
      $("#instantaneo .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-819982020-cloro-granulado-instantaneo-10kg-nataclor-_JM",
      );
      $("#instantaneo_img")
        .attr("src", "images/lista-productos/instantaneo/10kg.png")
        .attr("alt", "cloro granulado instantaneo");
      break;
    case "4":
      $("#instantaneo .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-754651076-cloro-granulado-instantaneo-20kg-nataclor-_JM",
      );
      $("#instantaneo_img")
        .attr("src", "images/lista-productos/instantaneo/20kg.png")
        .attr("alt", "cloro granulado instantaneo");
      break;
  }
});

$("#prod4").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#ya .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-836522961-cloro-instantaneo-multiaccion-dicloro-ya-1-kilo-nataclor-x-2-_JM",
      );
      $("#ya_img")
        .attr("src", "images/lista-productos/instantaneo_multiaccion/1kg.png")
        .attr("alt", "cloro instantáneo multiacción");
      break;
    case "2":
      $("#ya .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534536-cloro-instantaneo-multiaccion-de-5-kilos-nataclor-rinde--_JM",
      );
      $("#ya_img")
        .attr("src", "images/lista-productos/instantaneo_multiaccion/5kg.png")
        .attr("alt", "cloro instantáneo multiacción");
      break;
    case "3":
      $("#ya .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534536-cloro-instantaneo-multiaccion-de-5-kilos-nataclor-rinde--_JM",
      );
      $("#ya_img")
        .attr("src", "images/lista-productos/instantaneo_multiaccion/10kg.png")
        .attr("alt", "cloro instantáneo multiacción");
      break;
    case "4":
      $("#ya .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534536-cloro-instantaneo-multiaccion-de-5-kilos-nataclor-rinde--_JM",
      );
      $("#ya_img")
        .attr("src", "images/lista-productos/instantaneo_multiaccion/20kg.png")
        .attr("alt", "cloro instantáneo multiacción");
      break;
  }
});

$("#prod5").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#pastillas50 .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-754651116-pastillas-de-cloro-activo-50gr-de-1kg-nataclor-rinde--_JM",
      );
      $("#pastillas50_img")
        .attr("src", "images/lista-productos/pastillas/50gr_1kg.png")
        .attr("alt", "pastillas 50gr");
      break;
    case "2":
      $("#pastillas50 .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-754651116-pastillas-de-cloro-activo-50gr-de-1kg-nataclor-rinde--_JM",
      );
      $("#pastillas50_img")
        .attr("src", "images/lista-productos/pastillas/50gr_5kg.png")
        .attr("alt", "pastillas 50gr");
      break;
    case "3":
      $("#pastillas50 .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-754651116-pastillas-de-cloro-activo-50gr-de-1kg-nataclor-rinde--_JM",
      );
      $("#pastillas50_img")
        .attr("src", "images/lista-productos/pastillas/50gr_10kg.png")
        .attr("alt", "pastillas 50gr");
      break;
    case "4":
      $("#pastillas50 .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-754651116-pastillas-de-cloro-activo-50gr-de-1kg-nataclor-rinde--_JM",
      );
      $("#pastillas50_img")
        .attr("src", "images/lista-productos/pastillas/50gr_20kg.png")
        .attr("alt", "pastillas 50gr");
      break;
  }
});

$("#prod6").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#pastillas200 .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-773122609-pastillas-de-cloro-activo-200gr-de-1kg-nataclor-rinde--_JM",
      );
      $("#pastillas200_img")
        .attr("src", "images/lista-productos/pastillas/200gr_1kg.png")
        .attr("alt", "pastillas 200gr");
      break;
    case "2":
      $("#pastillas200 .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-773122609-pastillas-de-cloro-activo-200gr-de-1kg-nataclor-rinde--_JM",
      );
      $("#pastillas200_img")
        .attr("src", "images/lista-productos/pastillas/200gr_5kg.png")
        .attr("alt", "pastillas 200gr");
      break;
    case "3":
      $("#pastillas200 .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-773122609-pastillas-de-cloro-activo-200gr-de-1kg-nataclor-rinde--_JM",
      );
      $("#pastillas200_img")
        .attr("src", "images/lista-productos/pastillas/200gr_10kg.png")
        .attr("alt", "pastillas 200gr");
      break;
    case "4":
      $("#pastillas200 .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-773122609-pastillas-de-cloro-activo-200gr-de-1kg-nataclor-rinde--_JM",
      );
      $("#pastillas200_img")
        .attr("src", "images/lista-productos/pastillas/200gr_20kg.png")
        .attr("alt", "pastillas 200gr");
      break;
  }
});

$("#prod7").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#pastillas200ma .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-817601382-cloro-en-pastillas-multiaccion-200gr-de-1kg-nataclor-_JM",
      );
      $("#pastillas200ma_img")
        .attr(
          "src",
          "images/lista-productos/pastillas_multiaccion/200gr_1kg.png",
        )
        .attr("alt", "pastillas multiaccón 200gr");
      break;
    case "2":
      $("#pastillas200ma .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-772387171-pastillas-de-cloro-multiaccion-200gr-de-5kg-nataclor-rinde--_JM",
      );
      $("#pastillas200ma_img")
        .attr(
          "src",
          "images/lista-productos/pastillas_multiaccion/200gr_5kg.png",
        )
        .attr("alt", "pastillas multiaccón 200gr");
      break;
    case "3":
      $("#pastillas200ma .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-772387171-pastillas-de-cloro-multiaccion-200gr-de-5kg-nataclor-rinde--_JM",
      );
      $("#pastillas200ma_img")
        .attr(
          "src",
          "images/lista-productos/pastillas_multiaccion/200gr_10kg.png",
        )
        .attr("alt", "pastillas multiaccón 200gr");
      break;
    case "4":
      $("#pastillas200ma .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-793149050-cloro-en-pastillas-nataclor-multiaccion-200gr-x-20kg-_JM",
      );
      $("#pastillas200ma_img")
        .attr(
          "src",
          "images/lista-productos/pastillas_multiaccion/200gr_20kg.png",
        )
        .attr("alt", "pastillas multiaccón 200gr");
      break;
  }
});

$("#prod9").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#natabio .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534636-natabio-tratamiento-para-pileta-sin-cloro-1-litro-nataclor-_JM",
      );
      $("#natabio_img")
        .attr("src", "images/lista-productos/natabio/1lt.png")
        .attr("alt", "natabio");
      break;
    case "2":
      $("#natabio .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-811359385-natabio-sin-cloro-nataclor-2-litros-_JM",
      );
      $("#natabio_img")
        .attr("src", "images/lista-productos/natabio/2lt.png")
        .attr("alt", "natabio");
      break;
  }
});

$("#prod10").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#alguicida .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534518-alguicida-de-5-litros-nataclor-rinde--_JM",
      );
      $("#alguicida_img")
        .attr("src", "images/lista-productos/alguicida_nataclor/1lt.png")
        .attr("alt", "alguicida");
      break;
    case "2":
      $("#alguicida .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534518-alguicida-de-5-litros-nataclor-rinde--_JM",
      );
      $("#alguicida_img")
        .attr("src", "images/lista-productos/alguicida_nataclor/5lt.png")
        .attr("alt", "alguicida");
      break;
    case "3":
      $("#alguicida .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534518-alguicida-de-5-litros-nataclor-rinde--_JM",
      );
      $("#alguicida_img")
        .attr("src", "images/lista-productos/alguicida_nataclor/10lt.png")
        .attr("alt", "alguicida");
      break;
  }
});

$("#prod12").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#clarificador .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534529-clarificador-clasico-de-5-litros-nataclor-rinde--_JM",
      );
      $("#clarificador_img")
        .attr("src", "images/lista-productos/clarificador/1lt.png")
        .attr("alt", "clarificador");
      break;
    case "2":
      $("#clarificador .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534529-clarificador-clasico-de-5-litros-nataclor-rinde--_JM",
      );
      $("#clarificador_img")
        .attr("src", "images/lista-productos/clarificador/5lt.png")
        .attr("alt", "clarificador");
      break;
    case "3":
      $("#clarificador .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-762534529-clarificador-clasico-de-5-litros-nataclor-rinde--_JM",
      );
      $("#clarificador_img")
        .attr("src", "images/lista-productos/clarificador/10lt.png")
        .attr("alt", "clarificador");
      break;
  }
});

$("#prod17").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#multiaccionlona .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-811939534-pastillas-de-cloro-multiaccion-piletas-de-lona-14-kilo-nata-_JM#position=3&search_layout=stack&type=item&tracking_id=19db1bc1-2617-4e73-b813-b456f7e1039c",
      );
      $("#multiaccionlona_img")
        .attr(
          "src",
          "images/lista-productos/pastillas_multiaccion/lona_250gr.png",
        )
        .attr("alt", "pastillas multiacción piletas de lona");
      break;
    case "2":
      $("#multiaccionlona .comprar").prop(
        "href",
        "https://www.tiendanataclor.com.ar/MLA-811939534-pastillas-de-cloro-multiaccion-piletas-de-lona-14-kilo-nata-_JM",
      );
      $("#multiaccionlona_img")
        .attr(
          "src",
          "images/lista-productos/pastillas_multiaccion/lona_250gr.png",
        )
        .attr("alt", "pastillas multiacción piletas de lona");
      break;
  }
});

$("#prod21").change(function () {
  switch ($(this).val()) {
    case "1":
      $("#oxypool .comprar").prop("href", "#");
      $("#oxypool_img")
        .attr("src", "images/lista-productos/oxypool.png")
        .attr("alt", "oxypool");
      break;
    case "2":
      $("#oxypool .comprar").prop("href", "#");
      $("#oxypool_img")
        .attr("src", "images/lista-productos/oxypool.png")
        .attr("alt", "oxypool");
      break;
    case "3":
      $("#oxypool .comprar").prop("href", "#");
      $("#oxypool_img")
        .attr("src", "images/lista-productos/oxypool.png")
        .attr("alt", "oxypool");
      break;
    case "4":
      $("#oxypool .comprar").prop("href", "#");
      $("#oxypool_img")
        .attr("src", "images/lista-productos/oxypool.png")
        .attr("alt", "oxypool");
      break;
  }
});

// filtro

$("#f-todos").change(function () {
  if ($("#f-todos").is(":checked")) {
    $(".opcion").prop("checked", false);
    $(".prod").css("display", "block");
    filters = [];
  }
});

$(".opcion").click(function () {
  check_option(this);
});

function check_option(option) {
  $(option).each(function () {
    if ($(this).is(":checked")) {
      $("#f-todos").prop("checked", false);
      filters.push($(this).data("filter"));
    } else {
      removeFilter = $(this).data("filter");
      filters = $.grep(filters, function (value) {
        return value !== removeFilter;
      });
    }
    if (filters.length == 0) {
      $("#f-todos").prop("checked", true);
      $(".prod").css("display", "block");
    } else {
      $(".prod")
        .hide()
        .each(function () {
          c = 0;
          var dataFilter = $(this).data("filter").split(", ");
          for (i = 0; i < filters.length; i++) {
            if (dataFilter.includes(filters[i])) {
              c++;
            } else {
              c--;
            }
          }
          console.log(c);
          if (c == filters.length) {
            $(this).show();
          }
        });
    }
  });
}

$("#toggle_filtros").click(function () {
  $("#mis-filtros").toggle("slow", function () {
    $(this).css("margin-bottom", "25px");
  });
});
