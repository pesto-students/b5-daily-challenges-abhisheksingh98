
const curry = (fnToBeCurried) => {
  const curried = (...args) => {
    if (args.length === fnToBeCurried.length){ 
    return fnToBeCurried.apply(this,args);
  }
    return (...newArgs) => curried.apply(this,args.concat(newArgs));
  };

 return curried;
};
export { curry };
