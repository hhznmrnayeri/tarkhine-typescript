import { Icon } from "../../types/Icons.types";
export default function UsersIcon({ size }: Icon): React.ReactNode {
  return (
    <svg className={`${size}`} fill="none" viewBox="0 0 12 12">
      <path
        fill="#353535"
        d="M4.58 5.81h-.04a.271.271 0 00-.09 0C3 5.765 1.905 4.625 1.905 3.22A2.6 2.6 0 014.5.625 2.6 2.6 0 017.095 3.22a2.586 2.586 0 01-2.5 2.59H4.58zM4.5 1.375A1.85 1.85 0 002.655 3.22c0 1 .78 1.805 1.775 1.84a.832.832 0 01.16 0c.98-.045 1.75-.85 1.755-1.84A1.85 1.85 0 004.5 1.375zM8.27 5.875c-.015 0-.03 0-.045-.005-.205.02-.415-.125-.435-.33-.02-.205.105-.39.31-.415.06-.005.125-.005.18-.005.73-.04 1.3-.64 1.3-1.375 0-.76-.615-1.375-1.375-1.375A.37.37 0 017.83 2c0-.205.17-.375.375-.375A2.13 2.13 0 0110.33 3.75c0 1.15-.9 2.08-2.045 2.125H8.27zM4.585 11.275c-.98 0-1.965-.25-2.71-.75C1.18 10.065.8 9.435.8 8.75c0-.685.38-1.32 1.075-1.785 1.5-.995 3.93-.995 5.42 0 .69.46 1.075 1.09 1.075 1.775 0 .685-.38 1.32-1.075 1.785-.75.5-1.73.75-2.71.75zM2.29 7.595c-.48.32-.74.73-.74 1.16 0 .425.265.835.74 1.15 1.245.835 3.345.835 4.59 0 .48-.32.74-.73.74-1.16 0-.425-.265-.835-.74-1.15-1.245-.83-3.345-.83-4.59 0zM9.17 10.375a.37.37 0 01-.365-.3.38.38 0 01.29-.445c.315-.065.605-.19.83-.365.285-.215.44-.485.44-.77 0-.285-.155-.555-.435-.765-.22-.17-.495-.29-.82-.365a.378.378 0 01-.285-.45c.045-.2.245-.33.45-.285.43.095.805.265 1.11.5.465.35.73.845.73 1.365s-.27 1.015-.735 1.37c-.31.24-.7.415-1.13.5-.03.01-.055.01-.08.01z"
      ></path>
    </svg>
  );
}