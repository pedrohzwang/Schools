function desabilitarTextArea(object){
    let id = object.id;
    textArea = document.getElementById(id);
    textArea.value = "";
    object.setAttribute("disabled", "disabled")
}

function habilitarTextArea(object){
    object.removeAttribute("disabled");
}
/*
function adicionarResponsavel(){

    let formulario = `
    <div class="form-row">
    <div class="form-group col-sm-8">
        <label for="nomeResponsavel1">Nome do Responsável</label>
        <input class="form-control" type="text" name="nomeResponsavel" id="nomeResponsavel1"
            placeholder="João da Silva">
    </div>
    <div class="form-group col-sm-4">
        <label for="localTrabalhoResponsavel1">Local de Trabalho</label>
        <input class="form-control" type="text" name="localTrabalhoResponsavel"
            id="localTrabalhoResponsavel1" placeholder="Comercial Juninho">
    </div>
</div>

<div class="form-row">
    <div class="form-group col-sm-4">
        <label for="telefoneComercialResponsavel1">Telefone Comercial</label>
        <input type="text" class="form-control" name="telefoneComercialResponsavel"
            id="telefoneComercialResponsavel1">
    </div>
    <div class="form-group col-sm-4">
        <label for="telefoneResidencialResponsavel1">Telefone Residencial</label>
        <input class="form-control" type="text" name="telefoneResidencialResponsavel"
            id="telefoneResidencialResponsavel1">
    </div>
    <div class="form-group col-sm-4">
        <label for="outroTelefoneResponsavel1">Outro</label>
        <input class="form-control" type="text" name="outroTelefoneResponsavel"
            id="outroTelefoneResponsavel1">
    </div>`;

    let divDesenho = document.getElementById("novoResponsavel");

    divDesenho.appendChild(formulario);*/

   // (formulario);


