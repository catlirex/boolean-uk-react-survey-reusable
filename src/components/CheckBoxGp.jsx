export default function CheckBoxGp({
  inputName,
  formValue,
  setReviewFrom,
  reviewForm,
  answersSet,
  questionString,
}) {
  function handleOnChange(e) {
    let updateForm = { ...reviewForm };
    if (e.target.checked)
      updateForm[inputName] = [...updateForm[inputName], e.target.value];
    else
      updateForm[inputName] = updateForm[inputName].filter(
        (target) => target !== e.target.value
      );
    setReviewFrom(updateForm);
  }
  return (
    <div className="form__group">
      <h3>{questionString}</h3>
      <ul>
        <li>
          {Object.keys(answersSet).map((key) => {
            return (
              <label key={`${inputName}-${key}`}>
                <input
                  name={inputName}
                  type="checkbox"
                  value={key}
                  checked={
                    formValue.some((target) => target === key) ? true : false
                  }
                  onChange={(e) => handleOnChange(e)}
                />
                {answersSet[key]}
              </label>
            );
          })}
        </li>
      </ul>
    </div>
  );
}
