import { useState } from 'react';
import Button from '../@base/Button/Button';
import Heading2 from '../@base/Heading2/Heading2';
import Input from '../@base/Input/Input';
import SelectBox from '../@base/SelectBox/SelectBox';

export default function Form() {
  // * DECLARE STATS *
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  // * DECLARE FUNCTIONS *
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    fetch('/some-api', { method: form.method, body: formData });
    const formJson = Object.fromEntries(formData.entries());
    console.log({
      firstName: firstNameValue,
      lastName: lastNameValue,
      phoneNumber: phoneNumberValue,
      email: emailValue,
    });
  };

  return (
    <div className="col-start-1 col-end-2 row-start-2 row-end-3">
      <Heading2 content="اضافه / ویرایش کاربران" />
      <form
        method="POST"
        className="shadow-md shadow-black min-h-[calc(90%-36px)] rounded-md px-4 py-2 flex flex-col gap-2 items-center"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          fieldName="firstName"
          type="text"
          placeholder="نام ..."
          labelContent="نام:"
          emptyError="لطفا نام خود را وارد کنید"
          inputValue={firstNameValue}
          setInputValue={setFirstNameValue}
        />
        <Input
          fieldName="lastName"
          type="text"
          placeholder="نام خانوادگی ..."
          labelContent="نام خانوادگی:"
          emptyError="لطفا نام خانوادگی خود را وارد کنید"
          inputValue={lastNameValue}
          setInputValue={setLastNameValue}
        />
        <Input
          fieldName="phoneNumber"
          type="text"
          placeholder="شماره موبایل ..."
          labelContent="شماره موبایل:"
          emptyError="لطفا شماره موبایل خود را وارد کنید"
          inputValue={phoneNumberValue}
          setInputValue={setPhoneNumberValue}
        />
        <SelectBox labelContent="نسبت:" emptyError="لطفا نسبت خود را انتخاب نمایید " />
        <Input
          fieldName="Email"
          type="email"
          placeholder="ایمیل ..."
          labelContent="ایمیل:"
          emptyError="لطفا ایمیل خود را وارد کنید"
          inputValue={emailValue}
          setInputValue={setEmailValue}
        />
        <Button type="submit" bgColor="gray" textColor="white" buttonContent="اضافه کردن" />
      </form>
    </div>
  );
}
