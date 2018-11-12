var maxLength = 12;

function toUpper() 
{
	var str = document.getElementsByClassName("input")[0].value;
	var upper = str.toUpperCase();
	document.getElementsByClassName("out")[0].innerHTML = upper;
	console.log(upper);
}
function swap()
{
	var className = document.getElementsByClassName("input")[1].value;
	var newHTML = document.getElementsByClassName("input")[2].value;
	var i;
	for (i=0; i<document.getElementsByClassName(className).length; i++)
		{
			document.getElementsByClassName(className)[i].innerHTML = newHTML;
		}
	console.log(className);
	console.log(newHTML);
}

function multi()
{
	var a = document.getElementsByClassName("input")[3].value;
	var b = document.getElementsByClassName("input")[4].value;
	var c = a*b;
	document.getElementsByClassName("out")[2].innerHTML = c;
	console.log(c);
}

function changeHeaders()
{
	var tableName = document.getElementsByClassName("input")[5].value;
	var newHeaders = document.getElementsByClassName("input")[6].value;
	var arrayOfHeaders = newHeaders.split(",");
	var j = document.getElementById(tableName).rows[0].cells;
	var i;
	for (i=0; i<arrayOfHeaders.length; i++)
		{
			j[i].innerHTML = arrayOfHeaders[i];
		}
}

function prom()
{	
	var fieldID = document.getElementsByClassName("input")[7].value;
	var name = prompt("Please enter your name");
	    if (name != null) {
			document.getElementById(fieldID).innerHTML = name;
		}
}