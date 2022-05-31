import { nanoid } from "nanoid";

function createArrByN(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.round(Math.random() * (1000 - 1) + 1);
    const object = {
      id: nanoid(),
      amount: randomNumber,
    };
    arr.push(object);
  }
  return arr;
}

export default createArrByN;
