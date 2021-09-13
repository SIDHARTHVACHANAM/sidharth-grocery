function grocery(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4&this.status==200){
        var response = JSON.parse(this.responseText);
        var jgrocery =response.grocery;
        var output = "<table class=table>"
        for(var i=0;i<jgrocery.length;i++){
            output +="<tr class=table-primary><th scope=row>"+ jgrocery[i].serial + "</th>";
            output +="<td>"+ jgrocery[i].name + "</td>";
            output +="<td>"+ jgrocery[i].quantity + "</td>";
            output +="<td>"+ jgrocery[i].unit  + "</td>";
            output +="<td>"+ jgrocery[i].department+ "</td>";
            output +="<td>"+ jgrocery[i].notes + "</td></tr>";
        }
        output += "</table>" 
        document.getElementById("demo").innerHTML=output;
    }
}
xhttp.open("GET","grocery.json",true);
xhttp.send(); 
}
