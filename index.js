const findLongestWord = (arr) => {
  if (arr.length === 0) { return null; }

  let maxWord = [arr[0], arr[0].length];
  arr.forEach((item) => {
    const itemSize = item.length;
    if (itemSize > maxWord[1]) {
      maxWord = [item, itemSize];
    }
  });

  return maxWord[0];
};

const sumUniqueNumbers = (arr) => {
  let sum = 0;
  const newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
      sum += item;
    }
  });

  return sum;
};

const mergeArrays = (...arrs) => {
  const newArr = arrs.flat(2);
  const result = [];
  newArr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
};

const hasProperty = (obj, key) => (
  // eslint-disable-next-line no-prototype-builtins
  obj.hasOwnProperty(key)
);

const getPropertyValue = (obj, key) => (
  // eslint-disable-next-line no-prototype-builtins
  obj.hasOwnProperty(key) ? obj[key] : undefined
);

const invertObject = (obj) => {
  const result = {};
  const entries = Object.entries(obj);

  entries.forEach(([key, value]) => {
    result[value] = key;
  });

  return result;
};

export {
  findLongestWord,
  sumUniqueNumbers,
  mergeArrays,
  hasProperty,
  getPropertyValue,
  invertObject,
};
