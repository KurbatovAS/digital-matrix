import createArrByN from "./createArrByN";

function createArrByM(m, n) {
  let arr = [];

  for (let i = 0; i < m; i++) {
    arr.push(createArrByN(n));
    // arr = [...arr, ...createArrByN(n)];
  }
  return arr;
}

export default createArrByM;
