var prueba = (function(){
    // esta variable no es visible fuera de este módulo
    var variablePrivada1 = "hola ";
    // esta función tampoco es visible fuera de este módulo
    var funcionPrivata = function(nombre){
        return variablePrivada1 + nombre;
    };

    // declaramos que esta función retorn un objeto con un único miembro
    // llamado "saludar" que apunta a la función privada "funcionPrivada"
    return {
        saludar: funcionPrivata
    };
})();
