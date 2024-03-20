function getTotal() {
    var args = Array.prototype.slice.call(arguments);
    
    if (args.length === 2) {
      return args[0] + args[1];
    }
    else if (args.length === 1) {
      return function(num2) {
        return args[0] + num2;
      };
    }
  }
   
  console.log(getTotal(10, 20));
  console.log(getTotal(5, 40));
  console.log(getTotal(3)(30));
  console.log(getTotal(8)(12));