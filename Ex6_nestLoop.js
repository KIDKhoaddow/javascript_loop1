let sout, i, j;
sout = "<table style="+";"+"width:300px" +";"
    +"border-collapse:collapse"+";"+"mso-cellspacing:1px"+";>";

i = j = 1;
while (i <= 10) {
    sout = sout + "<tr>";
    while (j <= 10) {
        sout = sout + "<td>" + i * j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++;
}
sout = sout + "</table>";
document.write(sout);