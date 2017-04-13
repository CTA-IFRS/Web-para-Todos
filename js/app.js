// Exemplo de area de texto

function capturarConteudoExemplo() {
    var texto = document.getElementById('aria-text').innerHTML;
    armazenarDado(texto);
}

function armazenarDado(texto) {
    // desenvolva aqui seu código para trabalhar com os dados inseridos da forma como for necessária
    alert(texto);
}

// Exemplo barra de progresso

function aumentar10(progressbarID) {
    var barra = document.getElementById(progressbarID);
    valuenow = barra.getAttribute('aria-valuenow');
    if (valuenow != "100") {
        valuenow = Number(valuenow) + 10;
        barra.setAttribute('aria-valuenow', valuenow);
        barra.style.width = String(valuenow) + '%';
        barra.innerHTML = String(valuenow) + ' %';
    }
    return true;
}

// Exemplo alertdialog

function modalDialogoAlerta() {
    var modal = document.getElementById('modal-area');
    modal.style.display = "block";
}

function closeModalDialogoAlerta() {
    var modal = document.getElementById('modal-area');
    modal.style.display = "none";
}

// Exemplo botão

var btn = document.getElementById('aria-button');
function acaoBotao(e) {
    if (e.type == 'click' || (e.type == 'keydown' && e.keyCode == '13')) {
        // ação realizada pelo botão
        alert('Botão Pressionado com sucesso!');
    }
}
btn.addEventListener('click', acaoBotao);
btn.addEventListener('keypress', acaoBotao);

// Exemplo do menu, menuitem, menuitemradio e menuitemcheckbox

function mudarEstado(e){
    if (e.type == 'click' || (e.type == 'keydown' && e.keyCode == '13')) {
        var obj = e.target;
        if (obj) {
            var checked = obj.getAttribute('aria-checked')
            if (checked == 'true') {
                obj.setAttribute('aria-checked', 'false');
            }
            else {
                obj.setAttribute('aria-checked', 'true');
            }
        }
    }
}

var elementos = document.getElementsByClassName("checkbox-item");

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', mudarEstado);
    elementos[i].addEventListener('keydown', mudarEstado);
}

var group = document.getElementById('radiogroup');
function mudarEstadoRadio(e) {
    if (e.type == 'click' || (e.type == 'keydown' && e.keyCode == '13')) {
        var group = document.getElementById('radiogroup');
        for (var i = 0; i < group.children.length; i++) {
            var checked = group.children[i].getAttribute('aria-checked')
            if (checked == 'true') {
                group.children[i].setAttribute('aria-checked', 'false');
            }
        }

        var obj = e.target;

        if (obj) {
            var checked = obj.getAttribute('aria-checked')
            if (checked == 'true') {
                obj.setAttribute('aria-checked', 'false');
            }
            else {
                obj.setAttribute('aria-checked', 'true');
            }
        }

    }
}

var elements = document.getElementsByClassName("radio-item");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', mudarEstadoRadio);
    elements[i].addEventListener('keydown', mudarEstadoRadio);
}

// Exemplo do checkbox

function trocarSelecao(e) {
    if (e.type == 'click' || (e.type == 'keydown' && e.keyCode == '13')) {
        if (e.target.getAttribute('aria-checked') == 'true') {
            e.target.setAttribute('aria-checked', 'false');
        }
        else {
            e.target.setAttribute('aria-checked', 'true');
        }
    }
}

var checkbox = document.getElementById('chk1');
checkbox.addEventListener('click', trocarSelecao);
checkbox.addEventListener('keypress', trocarSelecao);

// Exemplo de link

var link = document.getElementById('link');

function linkToCTA(e) {
    if (e.type == 'click' || (e.type == 'keydown' && e.keyCode == '13')) {
        window.location.href = 'http://cta.ifrs.edu.br';
    }
}

link.addEventListener('click', linkToCTA);
link.addEventListener('keypress', linkToCTA);

// Exemplo de drag and drop

var dragged;

var verify_dropELement = false;

var dnd_alert = document.getElementById('alert-area');

function dragStart(event) {
    // TODO: limitar a navegação por tab apenas entre as dropzones quando o elemento arrastável é pegos
    if (event.type == 'dragstart' || (event.type == 'keypress' && event.keyCode == '13')) {

        // Ativa âncoras de começo e fim do widget
        var anchors = document.getElementsByClassName('indicator-anchor');
        for (var i = 0; i < anchors.length; i++) {
            anchors[i].removeAttribute('style');
        }

        // Anuncia que o elemento foi capturado
        var msg = document.createTextNode("O elemento foi capturado");
        dnd_alert.appendChild(msg);

        // Remove o tabindex do elemento arrastável
        dragged = event.target;
        dragged.removeAttribute('tabindex');
        var parent = dragged.parentNode;

        // modifica o atributo aria-grabbed como true no elemento
        event.target.setAttribute("aria-grabbed", true);
        var dropzones = document.getElementsByClassName('dropzone');
        for (var i = 0; i < dropzones.length; i++) {
            dropzones[i].setAttribute("aria-dropeffect", "move");
            dropzones[i].setAttribute('tabindex', '0');
        }
    }
}

function dragEnd(event) {
    // modifica o atributo aria-grabbed para false
    if (event.type == 'dragend' || (event.type == 'keypress' && event.keyCode == '13' && verify_dropELement)) {
        if (verify_dropELement) {

            var anchors = document.getElementsByClassName('indicator-anchor');
            for (var i = 0; i < anchors.length; i++) {
                anchors[i].setAttribute('style', 'display:none;')
            }

            var msg = document.createTextNode("O elemento foi largado");
            dnd_alert.appendChild(msg);
            event.target.setAttribute("aria-grabbed", false);
            var dropzones = document.getElementsByClassName('dropzone');
            for (var i = 0; i < dropzones.length; i++) {
                dropzones[i].removeAttribute("aria-dropeffect");
                dropzones[i].removeAttribute('tabindex');
                dropzones[i].className = "dropzone"
            }
        }
        verify_dropELement = false;
    }
}

function dragOver(event) {
    // previne o comportamento padrão para permitir que o elemento arrastado seja soltado dentro
    event.preventDefault();
}

function dragEnter(event) {
    var el = event.target;
    if (el.className == "dropzone" || el.className == "dropzone drophover") {
        // adiciona o atributo aria-dropeffect como move, indicando que o efeito realizado ao arrastar e soltar um elemento é movê-lo
        el.className = "dropzone drophover";
    }
}



function dragLeave(event) {
    var el = event.target;
    if (el.className == "dropzone" || el.className == "dropzone drophover") {
        // remove o atributo quando o elemento arrastado não está mais sobre este alvo
        el.className = "dropzone";
    }
}



function dropElement(event) {
    if (event.type == 'drop' || (event.type == 'keypress' && event.keyCode == '13' && !verify_dropELement)) {
        // previne a ação padrão (abre como link para alguns elementos)
        event.preventDefault();
        var el = event.target;
        // move o elemento arrastado para o alvo
        dragged.setAttribute('tabindex', 0);
        if (el.className == "dropzone" || el.className == "dropzone drophover") {
            el.appendChild(dragged);
        }
        verify_dropELement = true;
    }
}

var main = document.getElementById('maindrag');

var draggable = document.getElementById('draggable');

var dropzones = document.getElementsByClassName('dropzone');


draggable.addEventListener('keypress', dragStart, false);
main.addEventListener("dragstart", dragStart, false);

main.addEventListener("dragend", dragEnd, false);

main.addEventListener("dragover", dragOver, false);

main.addEventListener("dragenter", dragEnter, false);

main.addEventListener("dragleave", dragLeave, false);

main.addEventListener("drop", dropElement, false);

for (var i = 0; i < dropzones.length; i++) {
    dropzones[i].addEventListener('focus', dragEnter, false);
    dropzones[i].addEventListener('blur', dragLeave, false);
    dropzones[i].addEventListener('keypress', dropElement, true);
    dropzones[i].addEventListener('keypress', dragEnd, true);
}
