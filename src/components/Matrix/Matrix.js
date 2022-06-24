import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { set, cleanMatrix } from "../../redux/matrixData/slice";
import createArrByM from "../../scripts/createArrByM";
import { useEffect } from "react";

function Matrix() {
  const dispatch = useDispatch();
  const { m, n, x } = useSelector((state) => state.inputData);

  console.log("m", m);
  console.log("n", n);

  const matrixArr = useSelector((state) => state.matrixData.data);
  console.log("matrixArr", matrixArr);

  useEffect(() => {
    dispatch(cleanMatrix());
    dispatch(set(createArrByM(m, n)));

    // dispatch(cleanMatrix());
    dispatch(set(rowSum()));
  }, [dispatch, m, n]);

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

  function rowSum() {
    console.log("matrixArr in rowSum function", matrixArr);
    const stringArr = JSON.stringify(matrixArr);
    const matrixArrCopy = JSON.parse(stringArr);
    const newArr = [];

    matrixArrCopy.forEach((el) => {
      const rowSum = el.reduce((totalAmount, el) => totalAmount + el.amount, 0);
      el.push({ id: nanoid(), amount: rowSum });
      newArr.push(el);
    });
    console.log("newArr", newArr);

    return newArr;
  }
  // rowSum();

  return (
    <table>
      <tbody>
        {matrixArr.map((el) => {
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
        })}
      </tbody>
    </table>
  );
}

export default Matrix;
