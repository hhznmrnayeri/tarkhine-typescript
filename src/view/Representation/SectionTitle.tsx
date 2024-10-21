type SectionTitleProps = {
  title: string;
};
export default function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="text-sm md:text-2xl font-estedadBold">{title}</h2>;
}
