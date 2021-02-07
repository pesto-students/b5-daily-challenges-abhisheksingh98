const allPromises = (args) => {
    const resultantArray = [];

  for (const promises of args) {
    Promise.resolve(promises)
      .then(response => resultantArray.add(response));
      return Promise.resolve(resultantArray);
  }
};

export { allPromises };
