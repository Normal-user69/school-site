
function login() {
    var name = "admin";
    var pass = "admin";
    var bool = true;
    var name2 = "hassan";
    var uname = document.getElementById("name").value;
    var upass = document.getElementById("pass").value;

  if ((uname.trim() == name || name2) && (upass == pass)) {

    document.getElementById("login").innerHTML = "<h1>LogedIn</h1>"

    document.getElementById("login").innerHTML += "<h2>" + "welcome " + uname + "</h2>"
    location.replace("./ClassTable.html");
} else if (bool) {
    document.getElementById("login").innerHTML += "<br><br><h2>Wrong name or password<h2>"
    bool = false;
  } else {
    document.getElementById("login").innerHTML += ""
  }
}

function addToTable() {
    var contry = document.getElementById('Contry').value.trim();
    var company = document.getElementById('Company').value.trim();
    var contact = document.getElementById('Contact').value.trim();
    
    if(contry != "" && company != "" && contact !=""){
    const cellText = document.createTextNode(company);
    const cellText2 = document.createTextNode(contact);
    const cellText3 = document.createTextNode(contry);
    
    var tbl = document.getElementById('tableData');
    var tblBody = document.getElementById("body");
    var row = document.createElement("tr");
    
    var cell = document.createElement("td");
    cell.appendChild(cellText);
    
    row.appendChild(cell);
    
    var cell2 = document.createElement("td");
    cell2.appendChild(cellText2);
    
    row.appendChild(cell2);
    
    var cell3 = document.createElement("td");
    cell3.appendChild(cellText3);
    
    row.appendChild(cell3);
    
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
    }else{
    alert("please enter data");
    }
    }
    