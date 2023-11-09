export function curry(func: Function) {
    return function f(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } 
        return function(...args2) {
          return f.apply(this, args.concat(args2));
        }
      
    };
  }  