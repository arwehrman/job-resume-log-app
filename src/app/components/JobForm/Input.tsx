type InputProps = {
  label: string;
  inputName: string;
  inputType: string;
};

export default function Input({ label, inputName, inputType }: InputProps) {
  return (
    <p>
      <label>
        {label}
        <input name={inputName} type={inputType} />
      </label>
    </p>
  );
}
