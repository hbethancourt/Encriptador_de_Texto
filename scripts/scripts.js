
function Encriptar(){
    let TextArea1 = document.getElementById('input-textarea');
    let StrTextArea1 = TextArea1.value;
    let tamTextArea1 = StrTextArea1.length;
    let StrTextoEncriptado="";

   if(tamTextArea1 < 1){
        HabilitaSec2Div1_o_2(tamTextArea1); 
        return;
   }

    for (let i = 0; i < tamTextArea1; i++) {

        /*
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"
        */

        switch(StrTextArea1[i]){
            case 'e':
                StrTextoEncriptado +=  "enter";
                break;
            case 'i':
                StrTextoEncriptado +=  "imes";
                break;
            case 'a':
                StrTextoEncriptado += "ai";
                break;
            case 'o':
                StrTextoEncriptado += "ober";
                break;
            case 'u':
                StrTextoEncriptado += "ufat";
                break;
            default:
                StrTextoEncriptado += StrTextArea1[i];
        }
    }

    document.getElementById('text-area-readonly').value = StrTextoEncriptado;

    HabilitaSec2Div1_o_2(tamTextArea1); 
}

function HabilitaSec2Div1_o_2(valor) {
    let sec2div1 = document.getElementById('sec2div1');
    let sec2div2 = document.getElementById('sec2div2');

    if(valor == 0){
        sec2div1.style.display = 'block';
        sec2div2.style.display = 'none';
    }
    else{
        sec2div1.style.display = 'none';
        sec2div2.style.display = 'block';
    }
}

function Desencriptar(){

    let textarea1 = document.getElementById('input-textarea').value;
    let PalabrasArray = textarea1.split(/\s+/);
    let StrTextoDesencriptado="";
 
    if(textarea1.length < 1){
        HabilitaSec2Div1_o_2(textarea1.length);
        return;
   }
    
    for (let i = 0; i < PalabrasArray.length; i++) {
         /*
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"
        */

        PalabrasArray[i] = PalabrasArray[i].replace(/enter/g, "e");
        PalabrasArray[i] = PalabrasArray[i].replace(/imes/g,"i");
        PalabrasArray[i] = PalabrasArray[i].replace(/ai/g,"a");
        PalabrasArray[i] = PalabrasArray[i].replace(/ober/g,"o");
        PalabrasArray[i] = PalabrasArray[i].replace(/ufat/g,"u");
        

        StrTextoDesencriptado += PalabrasArray[i];
        
        if(i != PalabrasArray.length) StrTextoDesencriptado += " ";
    }  

    document.getElementById('text-area-readonly').value = StrTextoDesencriptado;

    HabilitaSec2Div1_o_2(textarea1.length); 


}

function Copiar(){
    let textarea2 = document.getElementById('text-area-readonly');
    textarea2.select();

    document.execCommand('copy');
    
    window.getSelection().removeAllRanges();
}


function validarTexto(event) {
    let texto = event.target.value;
    let regex = /^[a-z\s]*$/;

    // Si el evento incluye Ctrl + V, no realizar la validación
    if (event.inputType === 'insertFromPaste') {
        return;
    }

    if (!regex.test(texto)) {
        event.target.value = event.target.value.slice(0, -1);
    }
}

document.getElementById('input-textarea').addEventListener('keydown', function(event) {
    // Permitir Ctrl + V (pegar) y otras combinaciones Ctrl
    if (event.ctrlKey) {
        return true;
    }

    // Permitir teclas de control como backspace, tab, etc.
    let teclasPermitidas = [
        'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete'
    ];

    if (teclasPermitidas.includes(event.key)) {
        return true;
    }

    // Bloquear cualquier otra tecla no deseada
    let regex = /^[a-z\s]*$/;
    if (!regex.test(event.key)) {
        event.preventDefault();
    }
});