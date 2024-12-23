import { Icon } from "../../types/Icons.types";
export default function MenuIcon({ size }: Icon): React.ReactNode {
  return (
    <svg className={`${size}`} fill="none" viewBox="0 0 24 24">
      <path
        fill="#417F56"
        d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"
      ></path>
    </svg>
  );
}
