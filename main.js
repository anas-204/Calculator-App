
var theRoot = document.querySelector(':root');
var currenttheme_num = 1;
var changethemebut1 = document.querySelector(".theme-but-ball");
var resetbut = document.querySelector(".reset");
var textspace = document.querySelector(".textarea");
var deletebut = document.querySelector(".delete");
var numberbuts = document.querySelectorAll(".number-but");
var equalbut = document.querySelector(".equal");
var operationsbuts = document.querySelectorAll(".operation-but");
var istextareaClear = true;


operationsbuts.forEach(Element=>{
    Element.onclick = function(){
        var lastchar = textspace.textContent[textspace.textContent.length-1];
        var content = textspace.textContent;

        if (lastchar == '+' || lastchar == 'x' || lastchar == '-' || lastchar == '/' ){
            textspace.textContent = textspace.textContent.slice(0,-1);
            textspace.textContent += this.textContent;
        }else if(content.includes('+') || content.includes('-') || content.includes('x') || content.includes('/') ){
            calcResult();
            textspace.textContent += this.textContent;
            content += this.textContent;
        }else {
            if(istextareaClear!=true){
                textspace.textContent = "" ;
                istextareaClear = true;
            }
            textspace.textContent += this.textContent;
        }
    }
})

equalbut.onclick = function(){
    calcResult();
}

numberbuts.forEach(Element =>{
  
    Element.onclick = function(){
        // if(istextareaClear!=true){
        //     textspace.textContent = "" ;
        //     istextareaClear = true;
        // }
        textspace.textContent += this.textContent;
    }
} )


resetbut.onclick = function(){
    textspace.textContent = "" ;
}

deletebut.onclick = function (){
    var textlength = textspace.textContent.length;
    
    if(textlength> 0 ){
        textspace.textContent = textspace.textContent.slice(0,-1);
    }
    
}

changethemebut1.onclick = function(){
    if(currenttheme_num==1){
        setcolor1();
        currenttheme_num++;
        changethemebut1.style.setProperty("left","37%");
    }else if(currenttheme_num==2){
        setcolor3();
        currenttheme_num++;
        changethemebut1.style.setProperty("left","70%");
    }else{
        setcolor2();
        currenttheme_num=1;
        changethemebut1.style.setProperty("left","3px");
    }
}


function calcResult(){
    if(textspace.textContent.includes("+")){
        Adding();
    }
     if(textspace.textContent.includes("-")){
        if(textspace.textContent[0]=='-'){
            if(textspace.textContent.includes("x")){
                multiplying();
             }
             else if(textspace.textContent.includes("/")){
                Division();
              }
            }
        Subtracting();
    }
      if(textspace.textContent.includes("x")){
       multiplying();
    }
      if(textspace.textContent.includes("/")){
      Division();
    }
    istextareaClear = false;
}

function setcolor1(){
        theRoot.style.setProperty("--container-color","#e6e6e6");
        theRoot.style.setProperty("--theme-but-color","#d0cccb");
        theRoot.style.setProperty("--text-color","#34342e");
        theRoot.style.setProperty("--text-area-color","#eeeeee");
        theRoot.style.setProperty("--but-text-color","#3d3d35");
        theRoot.style.setProperty("--reset-but-color","#388187");
        theRoot.style.setProperty(" --reset-but-shadow-color","#1c6368");
        theRoot.style.setProperty("--equal-but-color","#c85401");
        theRoot.style.setProperty("--equal-but-shadow-color","#8e3a00");
        theRoot.style.setProperty("--numbers-shadow-color","#a69d92");
        theRoot.style.setProperty("--numbers-but-color","#EEE");
}

function setcolor2(){
    theRoot.style.setProperty("--container-color","#3b4664");
    theRoot.style.setProperty("--theme-but-color","#252c44");
    theRoot.style.setProperty("--text-color","#eae3db");
    theRoot.style.setProperty("--text-area-color","#181f32");
    theRoot.style.setProperty("--but-text-color","#4d525d");
    theRoot.style.setProperty("--reset-but-color","#a2b3e1");
    theRoot.style.setProperty("--reset-but-shadow-color","#414e70");
    theRoot.style.setProperty("--equal-but-color","#f96c5b");
    theRoot.style.setProperty("--equal-but-shadow-color","#8f2316");
    theRoot.style.setProperty("--numbers-shadow-color","#b0a296");
    theRoot.style.setProperty("--numbers-but-color","#EEE");
}

function setcolor3(){
    theRoot.style.setProperty("--container-color","#17062a");
    theRoot.style.setProperty("--theme-but-color","#1e0836");
    theRoot.style.setProperty("--text-color","#fce13f");
    theRoot.style.setProperty("--text-area-color","#1e0836");
    theRoot.style.setProperty("--but-text-color","#e5cc4f");
    theRoot.style.setProperty("--reset-but-color","#8631b0");
    theRoot.style.setProperty("--reset-but-shadow-color","#ba14f4");
    theRoot.style.setProperty("--equal-but-color","#00decf");
    theRoot.style.setProperty("--equal-but-shadow-color","#65c6cc");
    theRoot.style.setProperty("--numbers-shadow-color","#802097");
    theRoot.style.setProperty("--numbers-but-color","#331b4d");
}

function Adding(){
    var result = 0;
    var numbers= textspace.textContent.split('+');
    for( var i = 0 ; i<numbers.length ; i++){
        result += parseFloat(numbers[i]);
    }
    textspace.textContent = result;
    istextareaClear = false;
}

function Subtracting(){
    var result = 0;
    var numbers= textspace.textContent.split('-');
    for( var i = 1; i<numbers.length ; i++){
        result += parseFloat(numbers[i]);
    }
    textspace.textContent = numbers[0]-result;
    istextareaClear = false;
}

function multiplying (){
    var result = 1;
    var numbers= textspace.textContent.split('x');
    for( var i = 0 ; i<numbers.length ; i++){
        result = result*parseFloat(numbers[i]);
    }
    textspace.textContent = result;
}

function Division (){
    var result = 1;
    var numbers= textspace.textContent.split('/');
    for( var i = 1 ; i<numbers.length ; i++){
        result = result * parseFloat(numbers[i]);
    }
    textspace.textContent = numbers[0] / (result) ;
}


