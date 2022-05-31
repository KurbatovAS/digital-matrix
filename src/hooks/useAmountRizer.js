import { useSelector, useDispatch } from "react-redux";
import { set, cleanMatrix } from "../redux/matrixArray/slice";

export function useAmountRizer(id) {
  const matrixArr = useSelector((state) => state.matrixArray);

  const dispatch = useDispatch();
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
