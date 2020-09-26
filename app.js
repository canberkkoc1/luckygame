const span1 = document.getElementById("uNumber");
const span2 = document.getElementById("numbers");






var choose = new Array();
function valueF(item){
    choose.push(item)
    if(choose.length>6){
        choose.pop()
        alert("limit full")
    }
    
    span1.textContent = `Your numbers = [${choose}]`;
}





var num = 0;
var random = new Array();

while(num<6){
    random.push( Math.floor(Math.random() * 49)+1)   
    num++;
}



function oyna(){   
    
    
     random = random.sort((x,y) => x-y);
     choose = choose.sort((a,b)=>a-b);

    var sayc = 0;
    for(let i = 0;i<random.length;i++){
        if(random[i] == choose[i]){
           sayc++
        }        
        
    }
    
    if(sayc > 0){
        alert("WİN");
        span2.textContent = `Lucky numbers = [${random}]`
        
    }else{
        alert("LOSE");
        span2.textContent = `Lucky numbers = [${random}]`

    }
    

}