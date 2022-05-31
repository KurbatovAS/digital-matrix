import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { set, cleanMatrix } from "../../redux/matrixArray/slice";
import createArrByM from "../../scripts/createArrByM";
// import { useAmountRizer } from "../../hooks";
import { useEffect } from "react";

//  const { m, n, x } = useSelector((state) => state.inputData);

function Matrix() {
  const dispatch = useDispatch();

  const { m, n } = useSelector((state) => state.inputData);

  useEffect(() => {
    dispatch(cleanMatrix());
    dispatch(set(createArrByM(m, n)));

    // dispatch(cleanMatrix());
    // dispatch(set(rowSum()));
  }, [dispatch, m, n]);

  const matrixArr = useSelector((state) => state.matrixArray);

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

  //   dispatch(cleanMatrix());
  //   dispatch(set(rowSum()));

  //   // dispatch(cleanMatrix());
  //   // dispatch(set(rowSum()));
  // }, [dispatch, matrixArr]);

  function rowSum() {
    const stringArr = JSON.stringify(matrixArr);
    const matrixArrCopy = JSON.parse(stringArr);
    const newArr = [];

    matrixArrCopy.forEach((el) => {
      const rowSum = el.reduce((totalAmount, el) => totalAmount + el.amount, 0);
      el.push({ id: nanoid(), amount: rowSum });
      newArr.push(el);
    });

    return newArr;
  }

  rowSum();

  function rowSum() {
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
  rowSum();

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
