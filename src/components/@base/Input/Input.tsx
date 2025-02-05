import { useState } from 'react';

type propsType = {
  type: string;
  placeholder: string;
  labelContent?: string;
  emptyError?: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  fieldName: string;
};
export default function Input(props: propsType) {
  const { type, placeholder, labelContent, emptyError, inputValue, setInputValue, fieldName } = props;

  // stats
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsEmpty(e.target.value === '');
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-bold text-slate-900">{labelContent}</label>
      <input
        name={fieldName}
        type={type}
        placeholder={placeholder}
        className="shadow-primary focus:shadow-primaryFocus mx-2 outline-none py-1 px-2 rounded-[4px]"
        value={inputValue}
        onChange={handleChange}
      />
      <small className={`${isEmpty ? 'visible' : 'invisible'} -mt-1 mr-2 text-red-500 text-xs font-bold h-4`}>
        {emptyError}
      </small>
    </div>
  );
}
