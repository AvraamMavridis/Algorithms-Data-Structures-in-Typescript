const Singleton = (function(){

  let init = function(value: number){
    this.instanceID = value;
    return this;
  }

  let instance;

  return function(value: number){
    if(instance) return instance;
    instance = init(value);
    return instance;
  }
})();