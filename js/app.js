function capturarConteudoExemplo() {
    var texto = document.getElementById('aria-text').innerHTML;
    armazenarDado(texto);
}

function armazenarDado(texto) {
    // desenvolva aqui seu código para trabalhar com os dados inseridos da forma como for necessária
    alert(texto);
}

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

function modalDialogoAlerta() {
    var modal = document.getElementById('modal-area');
    modal.style.display = "block";
}

function closeModalDialogoAlerta() {
    var modal = document.getElementById('modal-area');
    modal.style.display = "none";
}

function acaoBotao() {
  // ação realizada pelo botão
  alert('Botão Pressionado com sucesso!');
}

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
