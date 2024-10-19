type HeaderProps = {
  background: string;
  title: string;
};
export default function Header({ background, title }: HeaderProps) {
  return (
    <div
      className={`${background} h-44 md:h-80 bg-cover bg-center pt-14 md:pt-32 px-6 relative`}
    >
      <div className="flex-center text-center">
        <h1 className="text-tint-100 font-estedadBold md:text-4xl">{title}</h1>
      </div>
    </div>
  );
}
