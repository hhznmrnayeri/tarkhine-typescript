import { Icon } from "../../types/Icons.types";
export default function HeartIcon({ size }: Icon): React.ReactNode {
  return (
    <svg className={`${size}`} fill="none" viewBox="0 0 16 16">
      <path
        fill="#353535"
        d="M8 14.433c-.207 0-.407-.027-.574-.087C4.88 13.473.833 10.373.833 5.793c0-2.333 1.887-4.227 4.207-4.227 1.126 0 2.18.44 2.96 1.227a4.143 4.143 0 012.96-1.227c2.32 0 4.206 1.9 4.206 4.227 0 4.587-4.046 7.68-6.593 8.553-.167.06-.367.087-.573.087zM5.04 2.566c-1.767 0-3.207 1.447-3.207 3.227 0 4.553 4.38 7.087 5.92 7.613.12.04.38.04.5 0 1.533-.526 5.92-3.053 5.92-7.613 0-1.78-1.44-3.227-3.207-3.227a3.168 3.168 0 00-2.56 1.294c-.186.253-.613.253-.8 0A3.18 3.18 0 005.04 2.566z"
      ></path>
    </svg>
  );
}