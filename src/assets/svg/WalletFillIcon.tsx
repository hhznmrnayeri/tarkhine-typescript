import { Icon } from "../../types/Icons.types";
export default function WalletFillIcon({ size }: Icon): React.ReactNode {
  return (
    <svg className={`${size}`} fill="none" viewBox="0 0 20 20">
      <path
        fill="#417F56"
        d="M18.333 9.142v1.716a.856.856 0 01-.833.85h-1.634c-.9 0-1.725-.658-1.8-1.558-.05-.525.15-1.017.5-1.358a1.66 1.66 0 011.2-.5H17.5a.856.856 0 01.833.85z"
      ></path>
      <path
        fill="#417F56"
        d="M17.06 12.958h-1.192c-1.583 0-2.917-1.191-3.05-2.708a2.931 2.931 0 01.875-2.35 2.869 2.869 0 012.075-.858h1.292c.241 0 .441-.2.416-.442-.183-2.025-1.525-3.408-3.516-3.642a3.81 3.81 0 00-.625-.041h-7.5c-.234 0-.459.016-.675.05-2.125.266-3.492 1.85-3.492 4.116v5.834c0 2.3 1.867 4.166 4.167 4.166h7.5c2.333 0 3.941-1.458 4.141-3.683.025-.242-.175-.442-.416-.442zm-6.225-4.833h-5A.63.63 0 015.21 7.5a.63.63 0 01.625-.625h5a.63.63 0 01.625.625.63.63 0 01-.625.625z"
      ></path>
    </svg>
  );
}
