let num= parseInt(prompt("Số ô của bàn cờ: "));

function render(num) {
    let resume = "<table cellpadding='0' cellspacing='0' >";
    for (let i=0; i< num; i++){
        resume += "<tr>";
        for (let j=0; j<num;j++){
            resume+= "<td>";
            resume +="<button id='click "+ i +"_"+ j +"' onclick='click()'></button>";
            resume += "</td>";
        }  resume += "</tr>";
    }
    resume += "</table>";
    return resume;
}
console.log(render (6));