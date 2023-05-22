/**
 * expects: const returnValue = {
 * 	A: A, ➞ returnValue.A === A
 * 	B: B, ➞ returnValue.B === B
 * 	Merge: {
 *    a: 8,
 *    b: 2,
 *    c: {
 *    	d: 3,
 *    	e: 10,
 *    	g: 9
 *    },
 *    f: [11, 12, 13, 14, 15],
 *    h: [16, 17, 18]
 * 	}
 * }
 */

const A = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: [5, 6, 7],
};

const B = {
  a: 8,
  c: {
    e: 10,
    g: 9,
  },
  f: [11, 12, 13, 14, 15],
  h: [16, 17, 18],
};

function merge(a, b) {
  let secondLevel = {};
  if (!(typeof a === "object" && typeof b === "object")) return false;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  const merged = {};
  for (let key of aKeys) {
    if (typeof key === "object") {
      secondLevel = merge(a[key], b[key]);
      merged[key] = secondLevel;
    }
    if (bKeys.includes(key)) {
      merged[key] = b[key];
    } else {
      merged[key] = a[key];
    }
  }
  for (let key of bKeys) {
    if (!aKeys.includes(key)) {
      merged[key] = b[key];
    }
  }
  return merged;
}

console.log(merge(A, B));
