type SectionTitleProps = {
  center?: boolean;
  color?: string;
  title: string;
};
export default function SectionTitle(props: SectionTitleProps) {
  return (
    <h2
      className={`font-estedadBold md:text-2xl ${
        props.center ? "mx-auto text-center" : ""
      } ${props.color}`}
    >
      {props.title}
    </h2>
  );
}
