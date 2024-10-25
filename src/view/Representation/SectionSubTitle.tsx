type SectionSubTitleProps = {
  subTitle: string;
};
export default function SectionSubTitle({ subTitle }: SectionSubTitleProps) {
  return (
    <h3 className="mt-4 md:mt-12 text-xs md:text-lg text-start">{subTitle}</h3>
  );
}
