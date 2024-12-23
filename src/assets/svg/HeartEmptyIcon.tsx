import { Icon } from "../../types/Icons.types";
export default function HeartEmptyIcon({ size }: Icon): React.ReactNode {
  return (
    <svg className={`${size}`} fill="none" viewBox="0 0 16 16">
      <path
        fill="#353535"
        d="M8 14.433c-.206 0-.406-.026-.573-.086C4.881 13.473.834 10.373.834 5.793c0-2.333 1.887-4.226 4.207-4.226 1.126 0 2.18.44 2.96 1.226a4.143 4.143 0 012.96-1.226c2.32 0 4.206 1.9 4.206 4.226 0 4.587-4.046 7.68-6.593 8.554-.167.06-.367.086-.573.086zM5.04 2.567c-1.766 0-3.206 1.446-3.206 3.226 0 4.554 4.38 7.087 5.92 7.614.12.04.38.04.5 0 1.533-.527 5.92-3.054 5.92-7.614 0-1.78-1.44-3.226-3.207-3.226a3.168 3.168 0 00-2.56 1.293c-.186.253-.613.253-.8 0a3.18 3.18 0 00-2.566-1.293z"
      ></path>
    </svg>
  );
}
