var Singleton = (function () {
    var myObject = function(){

    };

    myObject.prototype.message = function(){
        return "Hello, I'm an object"
    };

    var instance;
 
    function createInstance() {
        return new myObject();
    }
 
    return {
        build: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();