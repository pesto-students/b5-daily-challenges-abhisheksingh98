
function duplicateLetters(str) {
  const arr = str.split(``);
  let duplicateLetter = 0;

  arr.forEach((letter) => {
    const duplicate = arr.filter((char) => char === letter).length;
    if (duplicate > duplicateLetter) duplicateLetter = duplicate;
  });
  return duplicateLetter === 1 ? false : duplicateLetter;
}

export {
  duplicateLetters,
};
