const sheetId1 = "1NUKmd_n-K5YNC943pn6uxHUMn960VZaFnbE9uaOfuek";
const gId1 = 0;
const base1 = `https://docs.google.com/spreadsheets/d/${sheetId1}/gviz/tq?gid=${gId1}`;
const sheetName1 = "inhisac-productos";
const query1 = encodeURIComponent("Select *");
const url1 = `${base1}&sheet=${sheetName1}&tq=${query1}`;

const data1 = [];
document.addEventListener("DOMContentLoaded", init1);

const output1 = document.querySelector(".output.manos");

function init1() {
  fetch(url1)
    .then((res) => res.text())
    .then((rep) => {
      //Remove additional text and extract only JSON:
      const jsonData1 = JSON.parse(rep.substring(47).slice(0, -2));
      //console.log(rep)
      console.log(jsonData1);

      const colz1 = [];
      const tr1 = document.createElement("tr");
      //Extract column labels
      jsonData1.table.cols.forEach((heading) => {
        if (heading.label) {
          let column = heading.label;
          colz1.push(column);
          const td1 = document.createElement("td");
          td1.innerText = column;
          tr1.appendChild(td1);
        }
        //output1.appendChild(tr1);
      });
      //console.log(colz1)

      //extract row data:
      jsonData1.table.rows.forEach((rowData) => {
        const row1 = {};
        colz1.forEach((ele, ind) => {
          row1[ele] = rowData.c[ind] != null ? rowData.c[ind].v : "";
        });
        data1.push(row1);
        console.log(row1);
      });
      processRows(data1);
    });
}

const template2 = `
  <div
    class="col-md-6 mb-3 prod"
    data-filter="ceramico, venecitas, cloro, sanitiza"
  >
    <div class="bg-white rounded producto">
      <div class="imagen-producto">
        <img alt="cloro granulado" class="img-fluid" id="granulado_img" />
      </div>
      <p>
        Cloro <span>Granulado</span>
      </p>
      <p class="mini-info">
        Cloro sólido de disolución lenta que mantiene el agua de la piscina
        limpia y cristalina.
        <a
          href="#vermasclorogranulado"
          data-toggle="collapse"
          aria-expanded="false"
          aria-controls="vermasclorogranulado"
        >
          Ver más
        </a>
      </p>
      <div class="collapse" id="vermasclorogranulado">
        <p>
          <span>Dosificación</span>
          <br />
          Cada 40.000 litros:
          <br />- en verano: 80gr diarios <br />- en invierno: 80gr semanales
        </p>
        <p>
          <span>Aplicación</span>
          <br />
          Se esparce en el agua sobre toda la superficie de la piscina.
        </p>
      </div>
      <form action="" id="granulado">
        <div class="botones">
          <a class="btn btn-default comprar">Comprar</a>
        </div>
        <select name="" id="prod1" class="form-control">
          <option value="1">1Kg</option>
          <option value="2">5Kg</option>
          <option value="3">10Kg</option>
          <option value="4">20Kg</option>
        </select>
      </form>
    </div>
  </div>
 `;

const template = `<div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingEight"> <h4 class="panel-title">
        <a
          class="collapsed"
          role="button"
          data-toggle="collapse"
          data-parent="#accordion"
          href="#collapseEight"
          aria-expanded="false" aria-controls="collapseEight"
        >
          <img src="images/icons/emojis-8.png" /> ¿Cómo elegir la manguera
          adecuada para un sistema hidráulico?
        </a>
      </h4>
    </div>
    <div
      id="collapseEight"
      class="panel-collapse collapse"
      role="tabpanel"
      aria-labelledby="headingEight"
    >
      <div class="panel-body">
        Considera factores como la presión de trabajo, el tipo de fluido, la
        temperatura, el diámetro interior y exterior, y la longitud de la
        manguera. Consulta las especificaciones del fabricante y, si es
        posible, busca la asesoría de un experto para asegurarte de
        seleccionar la manguera adecuada para tu aplicación.
      </div>
    </div>
  </div>`;

function processRows(json) {
  $.each(json, function () {
    $(".output").append(template2);
  });
}

console.log(processRows);
