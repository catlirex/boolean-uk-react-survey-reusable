import CheckBoxGp from "../components/CheckBoxGp";
import RadioGp_OneToFour from "./RadioGp_OneToFour";
import { useEffect, useState } from "react";
import TextInput from "./TextInput";

function ReviewForm({
  setResultList,
  resultList,
  editingFormIndex,
  setEditingFormIndex,
}) {
  const initialForm = {
    bestFeatures: [],
    worstFeatures: [],
    consistency: null,
    colour: null,
    logo: null,
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  };
  const [reviewForm, setReviewFrom] = useState(initialForm);

  useEffect(() => {
    if (editingFormIndex !== null) setReviewFrom(resultList[editingFormIndex]);
  }, [editingFormIndex]);

  function handleChange(e) {
    setReviewFrom({
      ...reviewForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editingFormIndex === null) {
      fetch(`http://localhost:4000/answers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewForm),
      })
        .then((response) => response.json())
        .then((data) => {
          setResultList([...resultList, data]);
        });
    } else {
      fetch(`http://localhost:4000/answers/${reviewForm.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewForm),
      })
        .then((response) => response.json())
        .then((data) => {
          setResultList(
            resultList.map((review, index) => {
              if (index === editingFormIndex) return data;
              else return review;
            })
          );
          setEditingFormIndex(null);
        });
    }
    setReviewFrom(initialForm);
  }

  const answersSet = {
    colour: "It's yellow!",
    sound: "It squeaks!",
    logo: "It has a logo!",
    size: "Its big!",
  };

  const answersSetTwo = {
    swimming: "Swimming",
    bathing: "Bathing",
    chatting: "Chatting",
    noTime: "I don't like to spend time with it",
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Tell us what you think about your rubber duck!</h2>

      <CheckBoxGp
        formValue={reviewForm.bestFeatures}
        reviewForm={reviewForm}
        setReviewFrom={setReviewFrom}
        inputName="bestFeatures"
        answersSet={answersSet}
        questionString="What would you say that are the best features of your rubber duck?"
      />

      <CheckBoxGp
        formValue={reviewForm.worstFeatures}
        reviewForm={reviewForm}
        setReviewFrom={setReviewFrom}
        inputName="worstFeatures"
        answersSet={answersSet}
        questionString="What would you say that are the worst bits of your rubber duck?"
      />
      <RadioGp_OneToFour
        formValue={reviewForm.consistency}
        reviewForm={reviewForm}
        setReviewFrom={setReviewFrom}
        inputName="consistency"
        questionString="How do you rate your rubber duck consistency?"
      />
      <RadioGp_OneToFour
        formValue={reviewForm.colour}
        reviewForm={reviewForm}
        setReviewFrom={setReviewFrom}
        inputName="colour"
        questionString="How do you rate your rubber duck colour?"
      />
      <RadioGp_OneToFour
        formValue={reviewForm.logo}
        reviewForm={reviewForm}
        setReviewFrom={setReviewFrom}
        inputName="logo"
        questionString="How do you rate your rubber duck logo?"
      />

      <CheckBoxGp
        formValue={reviewForm.timeSpent}
        reviewForm={reviewForm}
        setReviewFrom={setReviewFrom}
        inputName="timeSpent"
        answersSet={answersSetTwo}
        questionString="How do you like to spend time with your rubber duck"
      />

      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={reviewForm.review}
          onChange={(e) => {
            handleChange(e);
          }}
        ></textarea>
      </label>

      <TextInput
        questionString="Put your name here (if you feel like it):"
        type="text"
        name="username"
        value={reviewForm.username}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        questionString="Leave us your email pretty please??"
        value={reviewForm.email}
        type="email"
        name="email"
        onChange={(e) => handleChange(e)}
      />

      <TextInput
        className="form__submit"
        type="submit"
        value="Submit Survey!"
      />
    </form>
  );
}

export default ReviewForm;
