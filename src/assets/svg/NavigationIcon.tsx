import { Icon } from "../../types/Icons.types";
export default function NavigationIcon({ size }: Icon): React.ReactNode {
  return (
    <svg fill="none" viewBox="0 0 154 35" className={`${size}`}>
      <path
        fill="#fff"
        d="M13.15 12.996C15.324 5.566 21.904 0 29.646 0h95.471c7.453 0 13.88 5.162 16.143 12.263C144.25 21.651 148.867 33 153.711 33H.414c5.662 0 10.03-10.77 12.735-20.004z"
      ></path>
    </svg>
  );
}
