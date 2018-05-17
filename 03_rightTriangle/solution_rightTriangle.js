let rightTriangle = num => {
  let str = '';

  for (let row = num; row > 0; row--) {
    createColumn(row);
    if (row !== 1) str += '\n';
  }

  function createColumn(num) {
    while (num > 0) {
      str += '*';
      num--;
    }
  }

  return str;
}