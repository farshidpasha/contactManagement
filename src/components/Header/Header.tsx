import { useState } from 'react';
import { MdLightMode } from 'react-icons/md';

export default function Header() {
  const [lightDark, setLightDark] = useState(false); //if value set FALSE mode is DARK else if value set TRUE mode is LIGHT
  return (
    <header className="w-full h-16 rounded-b-[48px] rounded-bl-[48px] bg-[url('/assets/images/header-bg.jpg')] bg-cover bg-center">
      <div className="relative flex justify-center items-center w-full h-16 py-4 px-8 rounded-b-[48px] rounded-bl-[48px] bg-[rgba(0,0,0,0.4)]">
        <h1 className="text-center text-white font-bold text-2xl h-12 leading-[48px]">وب اپلیکیشن مدیریت مخاطبین</h1>
        <div className="absolute left-12 flex justify-center items-center w-12 h-12 bg-white rounded-full">
          <MdLightMode size={'32px'} />
        </div>
      </div>
    </header>
  );
}
