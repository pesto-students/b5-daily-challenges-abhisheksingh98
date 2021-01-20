const deepCopyObject = objToCopy => {

    if (typeof objToCopy !== 'object' || objToCopy === null) return objToCopy;
    
    const resultantObject = Array.isArray(objToCopy) ? [] : {};
    
    for (const name of Object.getOwnPropertyNames(objToCopy)) {
        resultantObject[name] = deepCopyObject(objToCopy[name]);
    }
    
    for (const symbol of Object.getOwnPropertySymbols(objToCopy)) {
        resultantObject[symbol] = deepCopyObject(objToCopy[symbol]);
    }
    
    return resultantObject;
};
  
export { deepCopyObject };
