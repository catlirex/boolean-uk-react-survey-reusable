export default function RadioGp_OneToFour({
  inputName,
  formValue,
  setReviewFrom,
  reviewForm,
  questionString,
}) {
  function handleOnChange(e) {
    let updateForm = { ...reviewForm };
    updateForm[inputName] = e.target.value;
    setReviewFrom(updateForm);
  }

  return (
    <div className="form__group radio">
      <h3>{questionString}</h3>
      <ul>
        <li>
          <input
            id={`${inputName}1`}
            type="radio"
            name={inputName}
            value="1"
            onChange={(e) => handleOnChange(e)}
            checked={formValue === "1" ? true : false}
          />
          <label htmlFor={`${inputName}1`}>1</label>
        </li>
        <li>
          <input
            id={`${inputName}2`}
            type="radio"
            name={inputName}
            value="2"
            onChange={(e) => handleOnChange(e)}
            checked={formValue === "2" ? true : false}
          />
          <label
            htmlFor={`${inputName}2`}
            onChange={(e) => console.log(e.target.type)}
          >
            2
          </label>
        </li>
        <li>
          <input
            id={`${inputName}3`}
            type="radio"
            name={inputName}
            value="3"
            onChange={(e) => handleOnChange(e)}
            checked={formValue === "3" ? true : false}
          />
          <label htmlFor={`${inputName}3`}>3</label>
        </li>
        <li>
          <input
            id={`${inputName}4`}
            type="radio"
            name={inputName}
            value="4"
            onChange={(e) => handleOnChange(e)}
            checked={formValue === "4" ? true : false}
          />
          <label
            htmlFor={`${inputName}4`}
            onChange={(e) => console.log(e.target.type)}
          >
            4
          </label>
        </li>
      </ul>
    </div>
  );
}
