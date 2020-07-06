function desabilitarTextArea(object){
    let id = object.id;
    textArea = document.getElementById(id);
    textArea.value = "";
    object.setAttribute("disabled", "disabled")
}

function habilitarTextArea(object){
    object.removeAttribute("disabled");
}


