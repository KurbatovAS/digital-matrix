import createArrByN from "./createArrByN";

function createArrByM(m, n) {
  const arr = [];

  for (let i = 0; i < m; i++) {
    arr.push(createArrByN(n));
  }
  return arr;
}

export default createArrByM;
