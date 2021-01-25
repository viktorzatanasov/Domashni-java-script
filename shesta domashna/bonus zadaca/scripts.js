function addTable(Rows,Columns) {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < Columns; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < Rows; j++) {
        var td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode("Cell " + (i+1) + "," + (j+1)));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  var tRows = prompt("how many Rows do you want");
  var tCol = prompt("how many columns do you want");
  addTable(tRows,tCol);