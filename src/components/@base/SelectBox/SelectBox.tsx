import { useState } from 'react';

type propsType = {
  labelContent: string;
  emptyError: string;
};

export default function SelectBox(props: propsType) {
  const { labelContent, emptyError } = props;
  // * DECLARE STATS *
  const [relationValue, setRelationValue] = useState('');
  const [isEmptyRelation, setIsEmptyRelation] = useState(false);

  // * DECLARE FUNCTIONS *
  const handleChange = (e: { target: { value: string } }) => {
    setRelationValue(e.target.value);
    if (e.target.value === '') {
      setIsEmptyRelation(true);
    } else {
      setIsEmptyRelation(false);
    }
  };
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="font-bold text-slate-900" htmlFor="relation">
        {labelContent}
      </label>
      <select
        id="relation"
        name="relation"
        className="shadow-primary focus:shadow-primaryFocus outline-none py-1 px-2 rounded-[4px] mx-2"
        value={relationValue}
        onChange={handleChange}
      >
        <option value="">نسبت</option>
        <option value="همکار">همکار</option>
        <option value="دوست">دوست</option>
        <option value="ناآشنا">نا آشنا</option>
      </select>
      <small className={`${isEmptyRelation ? 'visible' : 'invisible'} -mt-1 mr-2 text-red-500 text-xs font-bold h-4`}>
        {emptyError}
      </small>
    </div>
  );
}
