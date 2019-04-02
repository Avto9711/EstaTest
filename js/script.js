console.log("Hola sicario")


document.getElementById("btnCopyContent").addEventListener('click',function(evt){
    console.log(evt);
    SelectAndCopytext("card-body")

})

function SelectAndCopytext(element) {

    var doc = document
        , text = doc.getElementsByClassName(element)[0]
        , range, selection
    ;    

    var input = document.getElementById("txtHTML");
    input.value = text.innerHTML;
    input.select();
    document.execCommand("copy");

    alert("Contenido copiado")

}