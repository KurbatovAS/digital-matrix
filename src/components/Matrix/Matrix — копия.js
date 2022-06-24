import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { set, cleanMatrix } from "../../redux/matrixData/slice";
// import createArrByM from "../../scripts/createArrByM";
// import { useAmountRizer } from "../../hooks";
import { useEffect } from "react";

//  const { m, n, x } = useSelector((state) => state.inputData);

// const m = 2; //rows
// const n = 2; //colums

// {
//   tableData: [
//     { id: 1, row: 1, column: 1, amount: 654 },
//     { id: 2, row: 1, column: 2, amount: 159 },
//     { id: 3, row: 1, column: 3, amount: 813 },
//     { id: 4, row: 2, column: 1, amount: 576 },
//     { id: 5, row: 2, column: 2, amount: 492 },
//     { id: 6, row: 2, column: 3, amount: 1068 },
//     { id: 7, row: 3, column: 1, amount: 615 },
//     { id: 8, row: 3, column: 2, amount: 325.5 },
//   ];
// }

// {
//     r1c1: { id: 1, row: 1, column: 1, amount: 654 },
//     r1c2: { id: 2, row: 1, column: 2, amount: 159 },
//     r1c3: { id: 3, row: 1, column: 3, amount: 813 },
//     r2c1: { id: 4, row: 2, column: 1, amount: 576 },
//     r2c2: { id: 5, row: 2, column: 2, amount: 492 },
//     r2c3: { id: 6, row: 2, column: 3, amount: 668 },
//     r3c1: { id: 7, row: 3, column: 1, amount: 615 },
//     r3c2: { id: 8, row: 3, column: 2, amount: 325 },
//     r3c3: { id: 9, row: 3, column: 3, amount: 145 },   
// }

function Matrix() {
  // const amountRizer = useAmountRizer();
  const dispatch = useDispatch();
  const matrixArr = useSelector((state) => state.matrixData.data);
  console.log("matrixArr", matrixArr);

  const { m, n } = useSelector((state) => state.inputData);

  useEffect(() => {
    dispatch(cleanMatrix());
    // dispatch(set(createArrByM(m, n)));
    dispatch(set(createTD(m, n)));

    function createTD(m, n) {
      const arr = [];
      const totalTD = m * n;
      let row = 1;
      let column = 1;
      for (let i = 0; i < totalTD; i++) {
        const randomNumber = Math.round(Math.random() * (1000 - 1) + 1);

        const object = {
          id: nanoid(),
          amount: randomNumber,
          row,
          column,
        };
        arr.push(object);
        if (column === Number(n)) {
          row++;
          column = 1;
        } else {
          column++;
        }
      }
      return arr;
    }
    // dispatch(cleanMatrix());
    // dispatch(set(rowSum()));
  }, [dispatch, m, n]);

  // function createArrByM(m, n) {
  //   const tableData = {};
  //   // const arr = [];

  //   for (let i = 0; i < m; i++) {
  //     // arr.push(createArrByN(n));
  //     // {...tableData, ...createArrByN(n) };
  //   }
  //   return tableData;
  // }

  function amountRiser(id) {
    const stringArr = JSON.stringify(matrixArr);
    const matrixArrCopy = JSON.parse(stringArr);

    for (let i = 0; i < matrixArrCopy.length; i++) {
      let elementFound = false;
      let matrixRow = matrixArrCopy[i];
      for (let k = 0; k < matrixRow.length; k++) {
        if (matrixRow[k].id === id) {
          matrixRow[k].amount++;
          elementFound = true;
          break;
        }
      }
      if (elementFound) {
        break;
      }
    }

    dispatch(cleanMatrix());
    dispatch(set(matrixArrCopy));
  }

  // useEffect(() => {
  //   function rowSum() {
  //     const stringArr = JSON.stringify(matrixArr);
  //     const matrixArrCopy = JSON.parse(stringArr);
  //     const newArr = [];

  //     matrixArrCopy.forEach((el) => {
  //       const rowSum = el.reduce(
  //         (totalAmount, el) => totalAmount + el.amount,
  //         0
  //       );
  //       el.push({ id: nanoid(), amount: rowSum });
  //       newArr.push(el);
  //     });

  //     return newArr;
  //   }

  //   dispatch(cleanMatrix());
  //   dispatch(set(rowSum()));

  //   // dispatch(cleanMatrix());
  //   // dispatch(set(rowSum()));
  // }, [dispatch, matrixArr]);

  // function rowSum() {
  //   const stringArr = JSON.stringify(matrixArr);
  //   const matrixArrCopy = JSON.parse(stringArr);
  //   const newArr = [];

  //   matrixArrCopy.forEach((el) => {
  //     const rowSum = el.reduce((totalAmount, el) => totalAmount + el.amount, 0);
  //     el.push({ id: nanoid(), amount: rowSum });
  //     newArr.push(el);
  //   });
  //   console.log("newArr", newArr);
  //   return newArr;
  // }
  // rowSum();

  return (
    <table>
      <tbody>
        {for (let i = 0; i < m; i++) {
          
        }}
        {matrixArr.reduce((column, el) => {
          if (el.column === column) {
          }
          return <tr key={nanoid()}></tr>;
        }, 1)}
        {/* {matrixArr.map((el) => {
          return (
            <tr key={nanoid()}>
              {el.map((elem) => {
                return (
                  <td
                    key={elem.id}
                    onClick={() => {
                      amountRiser(elem.id);
                    }}
                  >
                    {elem.amount}
                  </td>
                );
              })}
            </tr>
          );
        })} */}
      </tbody>
    </table>
  );
}

export default Matrix;
