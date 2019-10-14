


str = '<table border="1">'
for (let i=9;i>0;--i){
    str +='<tr>'
    for(var j=9;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str +='</tr>'
}
str += '</table>'
document.getElementById('table1').innerHTML = str


str = '<table border="1">'
for(let i=9;i>0;--i){
    str +='<tr>'
    for(var j=i;j>0;--j){
        str +='<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str

str = '<table border="1">'
for(let c=9;c>0;--c){
    str +='<tr>'
    for(var x=c;x>0;--x){
        str +='<td>' + x + '*' + c + '=' + ( x * c ) +'</td>'
    }
    str +='</tr>'
}
str += '</table>'

document.getElementById('table3').innerHTML = str
