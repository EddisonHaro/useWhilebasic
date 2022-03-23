
document.write("<h1>")
document.write("IMPRIME MATRIZ")
document.write("</h1>")

var meses=["ENERO", "FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO",
"AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"]


i=0;
document.write("<br>");

while(i<meses.length){

    document.write("<br>");

    document.write("<h2>")
    document.write(meses[i]);
    document.write("</h2>")


    document.write("<br>");

    i++;
}