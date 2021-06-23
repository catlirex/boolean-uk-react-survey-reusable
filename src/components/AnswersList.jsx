import AnswersItem from "./AnswersItem";

export default function AnswersList({
  answersList,
  setEditingFormIndex,
  setResultList,
}) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          setResultList={setResultList}
          answersList={answersList}
          answerItem={answerItem}
          key={i}
          index={i}
          setEditingFormIndex={setEditingFormIndex}
        />
      ))}
    </ul>
  );
}
