type Props = {
  content: string;
};
export default function Heading2({ content }: Props) {
  return <h2 className="text-center font-bold text-xl mb-2">{content}</h2>;
}
