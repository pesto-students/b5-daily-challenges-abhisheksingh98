const alphabeticShift = (input) => {
  const answer = [];
  for (const character of input) answer.push(String.fromCharCode(character.charCodeAt(0) + 1));
  return answer.join('');
};

export { alphabeticShift };
