import { NavLink } from "react-router-dom";
type EmptyProps = {
  caption?: string;
  href?: string;
  btn?: string;
};
export default function Empty({ caption, href, btn }: EmptyProps) {
  return (
    <div className="bg-buy-empty bg-no-repeat bg-center flex-center flex-col text-xs border px-8 border-gray-400 rounded-lg py-24 md:py-48">
      {/* empty caption */}
      <p className="text-gray-700 md:text-2xl">{caption}</p>
      {/* menu btn */}
      {btn ? (
        <NavLink
          to={href as string}
          className="text-primary rounded border border-primary p-2 h-8 w-40 mt-4 md:font-estedadMedium md:text-base md:px-4 flex-center md:mt-8"
        >
          {btn}
        </NavLink>
      ) : null}
    </div>
  );
}
