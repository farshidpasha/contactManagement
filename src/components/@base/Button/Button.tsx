type propsType = {
  buttonContent: string;
  textColor: string;
  bgColor: 'red' | 'blue' | 'green-500' | 'gray';
  //   hoverBgColor?: string;
  type: 'submit' | 'button' | 'reset';
};

export default function Button(props: propsType) {
  const { buttonContent, bgColor, textColor, type } = props;
  return (
    <button
      type={type}
      style={{ backgroundColor: bgColor, color: textColor }}
      className="rounded-md shadow-primary py-2 px-4 font-bold text-lg"
    >
      {buttonContent}
    </button>
  );
}
