import { useState } from "react";
import { useDispatch } from "react-redux";
import { set } from "../../redux/inputData/slice";

function Form() {
  const [formData, setFormData] = useState(() => ({ m: 0, n: 0, x: 0 }));
  const dispatch = useDispatch();

  function inputHandlet(e) {
    switch (e.target.name) {
      case "m":
        setFormData({ ...formData, ...{ m: e.target.value } });
        break;
      case "n":
        setFormData({ ...formData, ...{ n: e.target.value } });
        break;
      case "x":
        setFormData({ ...formData, ...{ x: e.target.value } });
        break;
      default:
        return;
    }
  }

  function maxX() {
    return formData.m * formData.n;
  }

  function submitHandler(e) {
    e.preventDefault();

    dispatch(set(formData));

    setFormData({ m: 0, n: 0, x: 0 });
  }

  return (
    <form name="inputData" onSubmit={submitHandler}>
      <label>
        m
        <input
          onChange={inputHandlet}
          value={formData.m}
          type="number"
          name="m"
          min="0"
          max="100"
          title="May input nubbers from 0 to 100"
          required
          placeholder="5"
        />
      </label>
      <label>
        n
        <input
          onChange={inputHandlet}
          value={formData.n}
          type="number"
          name="n"
          min="0"
          max="100"
          title="May input nubbers from 0 to 100"
          required
          placeholder="3"
        />
      </label>
      <label>
        x
        <input
          onChange={inputHandlet}
          value={formData.x}
          type="number"
          name="x"
          min="0"
          max={maxX()}
          title="May input numbers"
          required
          placeholder="2"
        />
      </label>
      <button type="submit">Submut</button>
    </form>
  );
}

export default Form;
