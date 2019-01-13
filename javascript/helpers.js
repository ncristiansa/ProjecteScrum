/**
 * Desactiva un boton
 * @param {class} name Le pasamos la clase del boton para localizarlo y lo desactiva
 */
function disableButton(name) {
    name.classList.add("disabled");
}

/**
 * Activa un boton desactivado
 * @param {class} name Le pasamos la clase del boton para localizarlo y lo activa
 */
function enableButton(name) {
    name.classList.remove("disabled");
}

/**
 * Crea un elemento hijo y se lo añade al padre que se le pasa. Se le puede añadir texto y atributos
 * @param {HTMLCollection} parent Padre en el cual se creará el elemento
 * @param {HTMLCollection} child Tipo de elemento que queremos crear
 * @param {Text} text Texto que se le añadirá al elemento creado
 * @param {attributes} attributes Atributos que se añadirán a nuestro elemento
 */
function addElement(parent, child, text, attributes) {
    var childElement = document.createElement(child);
    if (text != undefined) {
        var contenido = document.createTextNode(text);
        childElement.appendChild(contenido);
    }

    if (attributes != undefined && attributes instanceof Array) {
        for (var i = 0; i < attributes.length; i++) {
            var attrName = attributes[i].split("=")[0];
            var attrValue = attributes[i].split("=")[1];
            childElement.setAttribute(attrName, attrValue);
        }
    }
    parent.appendChild(childElement);
    return childElement;
}

/**
 * Se pasa un nombre de clase en concreto y busca dicho elemento para eliminarlo
 * @param {class} className nombre de la clase para borrar el elemento 
 */
function elementRemover(className) {
    element = document.querySelector("." + className);
    element.remove();
}

function createButton(tag, text, attributes) {
    var tagElement = document.createElement(tag);
    if (text != undefined) {
        var contenido = document.createTextNode(text);
        tagElement.appendChild(contenido);
    }

    if (attributes != undefined && attributes instanceof Array) {
        for (var i = 0; i < attributes.length; i++) {
            var attrName = attributes[i].split("=")[0];
            var attrValue = attributes[i].split("=")[1];
            tagElement.setAttribute(attrName, attrValue);
        }
    }
    return tagElement;
}