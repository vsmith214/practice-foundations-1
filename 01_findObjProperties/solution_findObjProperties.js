let findObjPropsHasOwn = obj => {
  let result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) result.push(key);
  }
  return result.join(', ');
}

let findObjKeys = obj => {
  return Object.keys(obj).join(', ');
}

