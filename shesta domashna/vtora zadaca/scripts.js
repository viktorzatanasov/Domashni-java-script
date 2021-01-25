function insert_Row() {
    var table = document.getElementById("sampleTable");
    var indexRow = document.getElementsByTagName("tr");
    var row = table.insertRow(indexRow.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = `Row${indexRow.length} cell1`;
    cell2.innerHTML = `Row${indexRow.length} cell2`;
  }
  