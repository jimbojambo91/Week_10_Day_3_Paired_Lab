var Enumeration = function() {}

Enumeration.prototype = {

  find: function(array, callback){
    for (var item of array){
      if(callback(item)){
        return item;
      }
    }
  },

  map: function(array, callback){
    var newArray = [];
    for (var item of array){
      newArray.push(callback(item));
    }
    return newArray;
  },

  filter: function(array, callback){
    var newArray = [];
    for (var item of array){
      if(callback(item)){
        newArray.push(item);
      }
    }
    return newArray;
  },

  some: function(array, callback){
    var boolean = false;
    for (var item of array){
      if(callback(item)){
        boolean = true;
      }
    }
    return boolean;
  },

  every: function(array, callback){
    var boolean = false;
    for (var item of array){
      if(callback(item)){
        boolean = true;
      } else {
        boolean = false;
        break;
      }
    }
    return boolean;
  },

  reduce: function(array, callback){
    var total = 0;
    for (var item of array){
      total = callback(total, item);
    }
    return total;
  },
  
  ForEach: function(array, callback){
    for(var item of array){
      callback(item);
    }
  }




}


module.exports = Enumeration;