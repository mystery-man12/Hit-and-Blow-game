flag = false;
var level = 3;
var finished = false;
var time = 0;
var ElementDifficultly = 0;
var digit1 = -1;
var digit2 = -1;
var digit3 = -1;
var digit4 = -1;
var digit5 = -1;
var digit6 = -1;
var QuestionNumber1 = 0;
var QuestionNumber2 = 0;
var QuestionNumber3 = 0;
var QuestionNumber4 = 0;
var QuestionNumber5 = 0;
var QuestionNumber6 = 0;
var hit = 0;
var blow = 0;
var QuestionNumber = 0;
var digits = 0;


document.getElementById("level3").addEventListener("click", function () {
    level = 3;
    ElementDifficultly = document.getElementById("level-p");
    ElementDifficultly.innerHTML = "現在はレベル" + level +"桁";
});
document.getElementById("level4").addEventListener("click", function () {
    level = 4;
    ElementDifficultly = document.getElementById("level-p");
    ElementDifficultly.innerHTML = "現在はレベル" + level +"桁";
});
document.getElementById("level5").addEventListener("click", function () {
    level = 5;
    ElementDifficultly = document.getElementById("level-p");
    ElementDifficultly.innerHTML = "現在はレベル" + level +"桁";
});
document.getElementById("level6").addEventListener("click", function () {
    level = 6;
    ElementDifficultly = document.getElementById("level-p");
    ElementDifficultly.innerHTML = "現在はレベル" + level +"桁";
});

function generateRandomNumber(n) {
    let result = [];
    while (result.length < n) {
        let digit = Math.floor(Math.random() * 10);
        if (result.length === 0 && digit === 0) {
            continue;
        }
        if (!result.includes(digit)) {
            result.push(digit);
        }
    }
    return result.join('');
}

function reset(){
    var element = document.getElementById("display")
    var parent = element.parentElement;
    parent.removeChild(element);
    var element = document.getElementById("ResultDisplay")
    var parent = element.parentElement;
    parent.removeChild(element);
    var element = document.getElementById("sentence-p")
    var parent = element.parentElement;
    parent.removeChild(element);
    var element = document.getElementById("guess")
    var parent = element.parentElement;
    parent.removeChild(element);
}

document.getElementById("StartButton").addEventListener("click",function(){
    flag = true;

    time = 0;

    const timerFunction = () => {
        if (!finished) {
            time += 0.01; 
        }else{
            clearInterval(timer);
            alert("Clear:TOPへ戻るにはF5キーを押す。\nクリアタイムは"+ Math.floor(time*100)/100);
            reset();
        }
    };
        
    const timer = setInterval(timerFunction, 10);  

    QuestionNumber = generateRandomNumber(level);
    if(level === 3){
        QuestionNumber1 = Math.floor((QuestionNumber / 100) % 10);
        QuestionNumber2 = Math.floor((QuestionNumber / 10) % 10);
        QuestionNumber3 = Math.floor((QuestionNumber / 1) % 10);
    }else if(level === 4){
        QuestionNumber1 = Math.floor((QuestionNumber / 1000) % 10);
        QuestionNumber2 = Math.floor((QuestionNumber / 100) % 10);
        QuestionNumber3 = Math.floor((QuestionNumber / 10) % 10);
        QuestionNumber4 = Math.floor((QuestionNumber / 1) % 10);
    }else if(level === 5){
        QuestionNumber1 = Math.floor((QuestionNumber / 10000) % 10);
        QuestionNumber2 = Math.floor((QuestionNumber / 1000) % 10);
        QuestionNumber3 = Math.floor((QuestionNumber / 100) % 10);
        QuestionNumber4 = Math.floor((QuestionNumber / 10) % 10);
        QuestionNumber5 = Math.floor((QuestionNumber / 1) % 10);
    }else{
        QuestionNumber1 = Math.floor((QuestionNumber / 100000) % 10);
        QuestionNumber2 = Math.floor((QuestionNumber / 10000) % 10);
        QuestionNumber3 = Math.floor((QuestionNumber / 1000) % 10);
        QuestionNumber4 = Math.floor((QuestionNumber / 100) % 10);
        QuestionNumber5 = Math.floor((QuestionNumber / 10) % 10);
        QuestionNumber6 = Math.floor((QuestionNumber / 1) % 10);
    }

    element = document.getElementById("level-p")
    parent = element.parentElement;
    parent.removeChild(element);

    element = document.getElementById("level3")
    parent = element.parentElement;
    parent.removeChild(element);
    element = document.getElementById("level4")
    parent = element.parentElement;
    parent.removeChild(element);
    element = document.getElementById("level5")
    parent = element.parentElement;
    parent.removeChild(element);
    element = document.getElementById("level6")
    parent = element.parentElement;
    parent.removeChild(element);

    element = document.getElementById("div-StartButton")
    parent = element.parentElement;
    parent.removeChild(element);

    var newelemert = document.createElement("div");
    newelemert.setAttribute("id", "display");
    var parentElement = document.getElementById("DisplayParent");
    parentElement.appendChild(newelemert);
    
    newelemert = document.createElement("p");
    newcontent = document.createTextNode("数字を打ち込め!");
    newelemert.appendChild(newcontent);
    newelemert.setAttribute("id", "sentence-p");
    parentElement = document.getElementById("sentence");
    parentElement.appendChild(newelemert);

    var newelemert = document.createElement("div");
    newelemert.setAttribute("id", "ResultDisplay");
    var parentElement = document.getElementById("ResultParent");
    parentElement.appendChild(newelemert);

    newelemert = document.createElement("div");
    newcontent = document.createTextNode("GUESS");
    newelemert.appendChild(newcontent);
    newelemert.setAttribute("id", "guess");
    newelemert.setAttribute("onClick", "clicked();");
    parentElement = document.getElementById("Guess-button");
    parentElement.appendChild(newelemert);

    var newelemert = document.createElement("p");
    newelemert.setAttribute("id", "digit1");
    var parentElement = document.getElementById("display");
    parentElement.appendChild(newelemert);
    var newelemert = document.createElement("p");
    newelemert.setAttribute("id", "digit2");
    var parentElement = document.getElementById("display");
    parentElement.appendChild(newelemert);
    var newelemert = document.createElement("p");
    newelemert.setAttribute("id", "digit3");
    var parentElement = document.getElementById("display");
    parentElement.appendChild(newelemert);
    var newelemert = document.createElement("p");
    newelemert.setAttribute("id", "digit4");
    var parentElement = document.getElementById("display");
    parentElement.appendChild(newelemert);
    var newelemert = document.createElement("p");
    newelemert.setAttribute("id", "digit5");
    var parentElement = document.getElementById("display");
    parentElement.appendChild(newelemert);
    var newelemert = document.createElement("p");
    newelemert.setAttribute("id", "digit6");
    var parentElement = document.getElementById("display");
    parentElement.appendChild(newelemert);

    var newelemert = document.createElement("p");
    newelemert.setAttribute("id","result");
    var parentElement = document.getElementById("ResultDisplay");
    parentElement.appendChild(newelemert);
})
document.onkeyup = keyup;
function keyup(e){
    if(flag === true && e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" ||e.key === "5" || e.key === "6" ||e.key === "7" || e.key === "8" ||e.key === "9"|| e.key === "0" && digit1 !== -1){
    
    if(digit1 === -1){
        target = document.getElementById("digit1");
        digit1 = e.key;
        target.innerHTML = digit1;
    }else if(digit2 === -1){
        target = document.getElementById("digit2");
        digit2 = e.key;
        target.innerHTML = digit2;
    }else if(digit3 === -1){
        target = document.getElementById("digit3");
        digit3 = e.key;
        target.innerHTML = digit3
    }else if(digit4 === -1 && level >= 4){
        target = document.getElementById("digit4");
        digit4 = e.key;
        target.innerHTML = digit4;
    }else if(digit5 === -1 && level >= 5){
        target = document.getElementById("digit5");
        digit5 = e.key;
        target.innerHTML = digit5;
    }else if(digit6 === -1 && level >= 6){
        target = document.getElementById("digit6");
        digit6 = e.key;
        target.innerHTML = digit6;
    }else{

    }

    }else if (e.key === 'Backspace'){
    if(level >= 6 && digit6 !== -1){
        target = document.getElementById("digit6");
        target.innerHTML = '<p id="digit6"></p>';
        digit6 = -1;
    }else if(level >= 5 && digit5 !== -1){
        target = document.getElementById("digit5");
        target.innerHTML = '<p id="digit5"></p>';
        digit5 = -1;
    }else if(level >= 4 && digit4 !== -1){
        target = document.getElementById("digit4");
        target.innerHTML = '<p id="digit4"></p>';
        digit4 = -1;
    }else if(digit3 !== -1){
        target = document.getElementById("digit3");
        target.innerHTML = '<p id="digit3"></p>';
        digit3 = -1;
    }else if(digit2 !== -1){
        target = document.getElementById("digit2");
        target.innerHTML = '<p id="digit2"></p>';
        digit2 = -1;
    }else if(digit1 !== -1){
        target = document.getElementById("digit1");
        target.innerHTML = '<p id="digit1"></p>';
        digit1 = -1;
    }
    }else{

    }
}

function Gameclear(){
    finished = true;
}

function cheak(){
if(hit === level){
    Gameclear();
}else{
    target = document.getElementById("result");
    target.innerHTML = "Result Hit:" + hit + " Blow:" + blow;

    target = document.getElementById("digit6");
    target.innerHTML = '<p id="digit6"></p>';
    digit6 = -1;
    target = document.getElementById("digit5");
    target.innerHTML = '<p id="digit5"></p>';
    digit5 = -1;
    target = document.getElementById("digit4");
    target.innerHTML = '<p id="digit4"></p>';
    digit4 = -1;
    target = document.getElementById("digit3");
    target.innerHTML = '<p id="digit3"></p>';
    digit3 = -1;
    target = document.getElementById("digit2");
    target.innerHTML = '<p id="digit2"></p>';
    digit2 = -1;
    target = document.getElementById("digit1");
    target.innerHTML = '<p id="digit1"></p>';
    digit1 = -1;
}
}

function guess(nowlevel){
    hit = 0;
    blow = 0;
    switch(nowlevel){
        case 3:
            digits = String(digit1) + String(digit2) + String(digit3);
            for(var i = 0; i < 3; i++){
                for(var j = 0; j < 3; j++){
                if(Math.floor((digits / 10**i) % 10) === Math.floor((QuestionNumber / 10**j) % 10)){
                    if(i === j){
                    hit += 1;
                    }else{
                    blow += 1;
                    }
                }else {

                }}
            }
            cheak();
        break;
        case 4:
            digits = String(digit1) + String(digit2) + String(digit3) + String(digit4);
            for(var i = 0; i < 4; i++){
                for(var j = 0; j < 4; j++){
                if(Math.floor((digits / 10**i) % 10) === Math.floor((QuestionNumber / 10**j) % 10)){
                    if(i === j){
                    hit += 1;
                    }else{
                    blow += 1;
                    }
                }else {

                }
                }
            }
            cheak();
        break;
        case 5:
            digits = String(digit1) + String(digit2) + String(digit3) + String(digit4) + String(digit5);
            for(var i = 0; i < 5; i++){
                for(var j = 0; j < 5; j++){
                if(Math.floor((digits / 10**i) % 10) === Math.floor((QuestionNumber / 10**j) % 10)){
                    if(i === j){
                    hit += 1;
                    }else{
                    blow += 1;
                    }
                }else {

                }
                }
            }
            cheak();
        break;
        case 6:
            digits = String(digit1) + String(digit2) + String(digit3) + String(digit4) + String(digit5) + String(digit6);
            for(var i = 0; i < 6; i++){
                for(var j = 0; j < 6; j++){
                if(Math.floor((digits / 10**i) % 10) === Math.floor((QuestionNumber / 10**j) % 10)){
                    if(i === j){
                    hit += 1;
                    }else{
                    blow += 1;
                    }
                }else {

                }
                }
            }
            cheak();
        break;
}
}


function clicked(){
    if(digit3 !== -1 && level === 3 || digit4 !== -1 && level === 4 || digit5 !== -1 && level === 5 || digit6 !== -1 && level === 6){
        guess(level);
    }else{
        alert("必要な桁数が揃ってません");
            target = document.getElementById("digit6");
            target.innerHTML = '<p id="digit6"></p>';
            digit6 = -1;
            target = document.getElementById("digit5");
            target.innerHTML = '<p id="digit5"></p>';
            digit5 = -1;
            target = document.getElementById("digit4");
            target.innerHTML = '<p id="digit4"></p>';
            digit4 = -1;
            target = document.getElementById("digit3");
            target.innerHTML = '<p id="digit3"></p>';
            digit3 = -1;
            target = document.getElementById("digit2");
            target.innerHTML = '<p id="digit2"></p>';
            digit2 = -1;
            target = document.getElementById("digit1");
            target.innerHTML = '<p id="digit1"></p>';
            digit1 = -1;
    }     
}
