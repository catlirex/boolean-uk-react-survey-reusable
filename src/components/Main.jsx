import { useState, useEffect } from "react";
import ReviewForm from "../components/ReviewForm";
import AnswersList from "../components/AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [resultList, setResultList] = useState([]);
  const [editingFormIndex, setEditingFormIndex] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/answers`)
      .then((resp) => resp.json())
      .then((data) => setResultList(data));
  }, []);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {resultList.length > 0 ? (
          <AnswersList
            setEditingFormIndex={setEditingFormIndex}
            answersList={resultList}
            setResultList={setResultList}
          />
        ) : null}
      </section>
      <section className="main__form">
        <ReviewForm
          setEditingFormIndex={setEditingFormIndex}
          editingFormIndex={editingFormIndex}
          setResultList={setResultList}
          resultList={resultList}
        />
      </section>
    </main>
  );
}

export default Main;
