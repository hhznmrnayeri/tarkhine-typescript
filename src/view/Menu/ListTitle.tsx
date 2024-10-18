type ListTitleProps = {
  title: string;
};
export default function ListTitle({ title }: ListTitleProps) {
  return <h2 className="font-estedadBold md:text-2xl">{title}</h2>;
}
