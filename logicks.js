const keyboard = ["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space",'AltRight', "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];

let arr = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace','Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф',  'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲','Shift' , 'Ctrl', '', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
let arrEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲','Shift', 'Ctrl', '', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

function backspace(){
    var del = document.getElementById('textarea').value
    var clean = '';
    for(let z=0; z+1<del.length; z++){
        clean += del[z];
    }
    document.getElementById('textarea').value = clean
}

function Tabbing(){
    var del = document.getElementById('textarea').value
    var clean = '';
    for(let z=0; z<del.length; z++){
        clean += del[z];
    }
        clean += "   "
    document.getElementById('textarea').value = clean
}

function Spacing(){
    var del = document.getElementById('textarea').value
    var clean = '';
    for(let z=0; z<del.length; z++){
        clean += del[z];
    }
        clean += " "
    document.getElementById('textarea').value = clean
}
function Entering(){
    var del = document.getElementById('textarea').value
    var clean = '';
    for(let z=0; z<del.length; z++){
        clean += del[z];
    }
        clean += "\n"
    document.getElementById('textarea').value = clean
}

let body = document.querySelector("body");




  function createElement(tag, classes, target, content = "") {
    const element = document.createElement(tag);
    if (classes) element.classList.add(...classes.split(" "));
    if (content) element.textContent = content;
    target.append(element);
    return element;

  }


  const keybord_area = createElement("div", "text_vvod", body);
  const keybord_areas = createElement("textarea", "body--textarea textarea", keybord_area);
  document.querySelector('.textarea').id = "textarea";


  testarea = document.querySelector('#textarea');

 
  let k = 0;
  const keybord_body = createElement("div", "keybord_body", body);

  for (let i = 0; i<5; i++){
      let str = 'keyboard_row row';
      str +=i;
const row = createElement("div", str , keybord_body);

  }
let mass = document.querySelectorAll('.keyboard_row');

for(let i=0; i<9; i++){
    const key_board = createElement("div", "keyboard--key key" , mass[4]);
}

for(let i=0; i<15; i++){
    const key_board = createElement("div", "keyboard--key key" , mass[1]);
}
for(let i=0; i<14; i++){
    const key_board = createElement("div", "keyboard--key key" , mass[0]);
}

for(let i=0; i<13; i++){
    const key_board = createElement("div", "keyboard--key key" , mass[3]);
}
for(let i=0; i<13; i++){
    const key_board = createElement("div", "keyboard--key key" , mass[2]);
}

let keys = document.querySelectorAll(".keyboard--key");

for(let i=0; i<keys.length; i++){

    const swt = createElement("span", "rus" , keys[i]);
    const swt2 = createElement("span", "eng hidden" , keys[i]);

}

const swt3 = document.querySelectorAll(".rus");


for(let i=0; i<swt3.length; i++){

    swt3[i].append(arr[i])

}

const swtEng = document.querySelectorAll(".eng");

for(let i=0; i<swtEng.length; i++){

    swtEng[i].append(arrEng[i])

}


function init(){


    let out = '';
    for( let i=0; i<keyboard.length; i++){
        out = keyboard[i]; 
        keys[i].classList.add(out);
    }
}
init();
let flags = false;

let flags_to_caps = false;

document.onkeydown = function(event) {
document.querySelectorAll('.key').forEach(function(element){
    element.classList.remove('active');
})

let hells = '.';
hells += event.code;
console.log(hells)

    document.querySelector(hells).classList.add('active');

    if(hells = '.CapsLock'){

        document.querySelector(hells).classList.remove('active');
    }

if(event.code == 'ShiftLeft') {flags = true};
if(event.code == 'AltLeft' && flags == true){

    for(i=0; i<eng.length; i++){

        if(eng[i].classList.contains('hidden') == true ){
        eng[i].classList.remove('hidden');
        rus[i].classList.add('hidden');
        for(let k=0; k<caseDown.length; k++){
            caseDown[k].classList.remove('hidden');}
        }
        else{

            rus[i].classList.remove('hidden');
            eng[i].classList.add('hidden');
            for(let k=0; k<caseDown.length; k++){
                caseDown[k].classList.remove('hidden');}
        }
            
        }
    }

    
if(event.code == 'CapsLock'){

    
    if(flags_to_caps == false){

        flags_to_caps = true;
        document.querySelector('.CapsLock').classList.add('actives');
    }

    else{

        document.querySelector('.CapsLock').classList.remove('actives');
        flags_to_caps = false;
    }
}

   
}

let ggvp = document.querySelectorAll('.key');


document.onclick = function(evt){


    document.querySelectorAll('.key').forEach(function(element){
        element.classList.remove('active');
    })
   
   for(i =0; i<keyboard.length; i++){


    if(evt.target.classList.contains(keyboard[i]) == true){


        let hells = '.';
        hells += keyboard[i];
 
            document.querySelector(hells).classList.add('active');
       
    }

   }
}

let rusChar = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let rusToApper = rusChar.toUpperCase();
let enChar = 'abcdefghijklmnopqrstuvwxyz';
let enToApper = enChar.toUpperCase();
let allfl = rusChar + rusToApper + enChar + enToApper;



    
let eng = document.querySelectorAll('.eng');
let rus = document.querySelectorAll('.rus');
let flag = false;
let keyw = document.querySelectorAll('.keyboard--key');
let hell = document.querySelector('.keyboard_row');
let rus_child1 = document.querySelectorAll('.caseDown');
let eng_child1 = document.querySelector('.caseDown');




testarea.addEventListener('keypress', function (e) {
	    
    const char = String.fromCharCode(e.keyCode || e.charCode)
                    console.log(char)
                   if(char.includes(allfl)){
                    e.preventDefault()
                    console.log('hell')
                   }
                }
  );




function init(){


    let out = '';
    for( let i=0; i<keyboard.length; i++){
        out = keyboard[i]; 
        keys[i].classList.add(out);
    }
}
init();



var parentEl = document.querySelector('.MetaLeft');

img = document.createElement("IMG");
 

img.src = "/icons.png";


parentEl.appendChild(img);

let flag_test = true;
 flags_to_caps = false;


document.querySelector('.textarea').setAttribute('readonly', true);

document.onkeydown = function(event){
      
    
    if (event.code == 'AltLeft') flag = true;
    if (event.code == 'ShiftLeft' && flag) {
        

        for( let i=0; i<keyboard.length; i++){
            if(eng[i].classList.length >= 2){
                
                eng[i].classList.remove('hidden');
                rus[i].classList.add('hidden');
                for( let k=0; k<rus_child1.length; k++){
                rus_child1[k].classList.remove('hidden');}
                flag_test = false;
                flag = false;
            }
            else{
              
                flag_test = true;
                eng[i].classList.add('hidden');
                rus[i].classList.remove('hidden');
                flag = false;
            }
        }

       
    }


    let out = '.';
    out += event.code;

    if(out == '.CapsLock'){


        document.querySelector(out).classList.remove('active');
    }
    


   

    if(event.code == 'CapsLock'){

    
        if(flags_to_caps == false){
            
            
            flags_to_caps = true;
            document.querySelector('.CapsLock').classList.add('actives');
        }
    
        else{
    
           
            document.querySelector('.CapsLock').classList.remove('actives');
            flags_to_caps = false;
        }
    }


  
    

    keyw.forEach(function(element){
        element.classList.remove('active');
    });
    document.querySelector(out).classList.add('active');

   
    for(i =0; i<keyboard.length; i++){
        
        
        if(event.code == keyboard[i] ){
           
        out = '.'
     
        out += keyboard[i];
        document.querySelector('.textarea').setAttribute('readonly', true);
        if(out !== '.ShiftLeft'){
            if(out !== '.ControlLeft'){
                if(out !== '.ControlRight'){
                    if(out !== '.Delete'){
                        if(out !== '.CapsLock'){
                            if(out !== '.AltLeft'){
                                if(out !== '.AltRight'){
                                    if(out !== '.ArrowRight'){
                                        if(out !== '.ArrowLeft'){
                                            if(out !== '.ArrowUp'){
                                                if(out !== '.ArrowDown'){
                        
                    if(out == '.Tab'){
                        document.querySelector('.textarea').removeAttribute('readonly', true);
                        event = document.getElementById('textarea').value += '   ';
                        
                        
                    }else{
                        if(out == '.Enter'){

                            document.querySelector('.textarea').removeAttribute('readonly', true);
                   
                   
                    }else{
                        if(out == '.Backspace'){
                            document.querySelector('.textarea').removeAttribute('readonly', true);
                           
                       
                    
                    }else{
                        if(out == '.Space'){
                            
                            document.querySelector('.textarea').removeAttribute('readonly', true);
                           
                           }
                    
                    
                    else{if(flag_test == false){

                        document.querySelector('.textarea').setAttribute('readonly', true);
                        
                        if(flags_to_caps == false){

                        var elems = document.querySelector(out).lastChild.textContent;
                        event = document.getElementById('textarea').value += elems;}

                        else{


                            var elems = document.querySelector(out).lastChild.textContent;
                            event = document.getElementById('textarea').value += elems.toUpperCase();
                        }}

                    else{
                
                        document.querySelector('.textarea').setAttribute('readonly', true);

                        if(flags_to_caps == false){

                            console.log('work');
                            var elems = document.querySelector(out).firstChild.textContent;
                            event = document.getElementById('textarea').value += elems;}
                        
                        else{

                            console.log('wirk');
                            var elems = document.querySelector(out).firstChild.textContent;
                            event = document.getElementById('textarea').value += elems.toUpperCase();
                        }
                    
                    
                    }}
                    

                       
                    
    }}}}}}}}}}}}}}}}
  
   
   
    
}

document.onclick = function(evt){

   
    for(let i=0 ; i<keyboard.length; i++){
        let outs = '.';
        let otsl = '';
        if(evt.target.classList.contains(keyboard[i])){

            outs += keyboard[i]
            let outsl = keyboard[i]
            
    

if (outs == '.AltLeft') flag = true;
if (outs == '.ShiftLeft' && flag) {
    

    for( let i=0; i<keyboard.length; i++){
        if(eng[i].classList.length >= 2){
            
            eng[i].classList.remove('hidden');
            rus[i].classList.add('hidden');
            for( let k=0; k<rus_child1.length; k++){
            rus_child1[k].classList.remove('hidden');}
            flag_test = false;
            flag = false;
        }
        else{
          
            flag_test = true;
            eng[i].classList.add('hidden');
            rus[i].classList.remove('hidden');
            flag = false;
        }
    }

   
}


let out = '';
out += outs;
console.log(out);



if(out == '.CapsLock'){


    document.querySelector(out).classList.remove('active');
}





if(out == '.CapsLock'){


    if(flags_to_caps == false){
        
        
        flags_to_caps = true;
        document.querySelector('.CapsLock').classList.add('actives');
    }

    else{

       
        document.querySelector('.CapsLock').classList.remove('actives');
        flags_to_caps = false;
    }
}





keyw.forEach(function(element){
    element.classList.remove('active');
});
document.querySelector(out).classList.add('active');


for(let i =0; i<keyboard.length; i++){
    
        
if(evt.target.classList.contains(keyboard[i])){
           
           
            outs = '.'; 
            outs += keyboard[i]
            
            
    document.querySelector('.textarea').setAttribute('readonly', true);
    if(outs !== '.ShiftLeft'){
        if(outs !== '.ControlLeft'){
            if(outs !== '.ControlRight'){
                if(outs !== '.Delete'){
                    if(outs !== '.CapsLock'){
                        if(outs !== '.AltLeft'){
                            if(outs !== '.AltRight'){
                                if(outs !== '.ArrowRight'){
                                    if(outs !== '.ArrowLeft'){
                                        if(outs !== '.ArrowUp'){
                                            if(outs !== '.ArrowDown'){
                    
                if(outs == '.Tab'){
                    document.querySelector('.textarea').removeAttribute('readonly', true);
                    Tabbing()
                    
                    
                }
                else{
                    if(outs == '.Enter'){

                        document.querySelector('.textarea').removeAttribute('readonly', true);
                        Entering()
               
                    }else{
                    if(outs == '.Backspace'){
                        document.querySelector('.textarea').removeAttribute('readonly', true);
                        backspace()
                   
                
                }else{
                    if(outs == '.Space'){
                        
                        document.querySelector('.textarea').removeAttribute('readonly', true);
                        Spacing()
                       }
                
                
                else{if(flag_test == false){

                    document.querySelector('.textarea').setAttribute('readonly', true);
                    
                    if(flags_to_caps == false){

                    var elems = document.querySelector(out).lastChild.textContent;
                    evt = document.getElementById('textarea').value += elems;}

                    else{


                        var elems = document.querySelector(out).lastChild.textContent;
                        evt = document.getElementById('textarea').value += elems.toUpperCase();
                    }}

                else{
            
                    document.querySelector('.textarea').setAttribute('readonly', true);

                    if(flags_to_caps == false){

                        console.log('work');
                        var elems = document.querySelector(out).firstChild.textContent;
                        evt = document.getElementById('textarea').value += elems;}
                    
                    else{

                        console.log('wirk');
                        var elems = document.querySelector(out).firstChild.textContent;
                        evt = document.getElementById('textarea').value += elems.toUpperCase();
                    }
                
                
                }}
                

                   
                
}}}}}}}}}}}}}}}


}
}}

testarea.focus(); 
}

testarea.focus(); 





























 