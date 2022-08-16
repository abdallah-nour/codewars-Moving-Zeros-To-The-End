function moveZeros(arr = []) {
  return [...arr.filter((v) => v !== 0), ...arr.filter((v) => v === 0)];
}

function moveZeros2(arr = []) {
  const zeros = [];
  const wihoutZeros = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === 0) zeros.push(element);
    else wihoutZeros.push(element);
  }
  return [...wihoutZeros, ...zeros];
}

module.exports = moveZeros;
