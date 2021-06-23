export default function TextInput({ questionString, ...props }) {
  return (
    <label>
      {questionString}
      <input {...props} />
    </label>
  );
}
