import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

/* 
  Feel free to reuse any code from your previous version of this exercise.

  You should mainly focus on creating the reusable components for this version.

  In case you'd like to start fresh from scratch, you can use this object as a guide for your
  form state:

  const initialForm = {
  review: "",
  email: "",
  username: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  bestFeatures: [],
  worstFeatures: [],
  timeSpent: []
};

*/

export default function App() {
  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Main />
    </>
  );
}
