/*
https://api.chucknorris.io/jokes/random */
function joke() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if ((this.readyState == 4 && this.status == 200) || this.status == 304) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.heleZealand;
      }
    };
    xmlhttp.open("GET", "/corona", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
  }
  