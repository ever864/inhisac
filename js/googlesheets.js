const sheetId1 = '1CvhvXXbwhen5QMJMQlr8LcGp85uc8rkgaiJPI3XHlWs';
const gId1 = 0
const base1 = `https://docs.google.com/spreadsheets/d/${sheetId1}/gviz/tq?gid=${gId1}`;
const sheetName1 = 'inhisac-productos';
const query1 = encodeURIComponent('Select *')
const url1 = `${base1}&sheet=${sheetName1}&tq=${query1}`

const data1 = []
document.addEventListener('DOMContentLoaded', init1)

const output1 = document.querySelector('.output.manos')

function init1() {
  fetch(url1)
    .then(res => res.text())
    .then(rep => {
      //Remove additional text and extract only JSON:
      const jsonData1 = JSON.parse(rep.substring(47).slice(0, -2));
      //console.log(rep)
      //console.log(jsonData1)

      const colz1 = [];
      const tr1 = document.createElement('tr');
      //Extract column labels
      jsonData1.table.cols.forEach((heading) => {
        if (heading.label) {
          let column = heading.label;
          colz1.push(column);
          const td1 = document.createElement('td');
          td1.innerText = column;
          tr1.appendChild(td1);
        }
        //output1.appendChild(tr1);
      })
      //console.log(colz1)



      //extract row data:
      jsonData1.table.rows.forEach((rowData) => {
        const row1 = {};
        colz1.forEach((ele, ind) => {
          row1[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
        })
        data1.push(row1);
        console.log(row1);
      })
      processRows1(data1);
    })
}

function processRows1(json) {
  $.each(data1, function () {
    $('.output').append(
      '<tr>' +
      '<td><div class="pricing-title"><h6>' + this.category + '</h6></div></td>' +
      '<td class="text-right"><div class="pricing-title"><span class="price">' + this.product + '</span></div></td>' +
      '<td class="text-right"><div class="pricing-title"><span class="price">' + this.description + '</span></div></td>' +
      '</tr>'
    );
  })
}