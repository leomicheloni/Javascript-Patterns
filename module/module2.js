var consoleWritter = (function(){
    return {
        write: function(s){
            console.log(s);
        }
    };
})();

var prueba = (function(writter){

    var variablePrivada1 = "hola ";
    var funcionPrivada = function(nombre){
        writter.write(variablePrivada1 + nombre);
    };

    // declaramos que esta función retorn un objeto con un único miembro
    // llamado "saludar" que apunta a la función privada "funcionPrivada"
    return {
        saludar: funcionPrivada
    };

})(consoleWritter);


prueba.saludar("Leonardo");