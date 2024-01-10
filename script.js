var number = prompt("Enter Any Number to print table")

for (let i = 1; i <= 10; i++) {
    var table = i * number
    document.write(number + " X " + i + " = " + table + "<br/>");
}