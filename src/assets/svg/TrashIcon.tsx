import { Icon } from "../../types/Icons.types";
export default function TrashIcon({ size }: Icon): React.ReactNode {
  return (
    <svg className={`${size}`} fill="none" viewBox="0 0 16 16">
      <path
        fill="currentColor"
        d="M14 4.487h-.053C10.42 4.133 6.9 4 3.413 4.353l-1.36.134a.503.503 0 01-.106-1l1.36-.134c3.546-.36 7.14-.22 10.74.134a.5.5 0 01.446.546.494.494 0 01-.493.454z"
      ></path>
      <path
        fill="currentColor"
        d="M5.667 3.813c-.027 0-.054 0-.087-.006a.502.502 0 01-.407-.574l.147-.873c.107-.64.253-1.527 1.807-1.527h1.746c1.56 0 1.707.92 1.807 1.534l.147.866a.495.495 0 01-.407.574.495.495 0 01-.573-.407L9.7 2.533c-.093-.58-.113-.693-.82-.693H7.133c-.706 0-.72.093-.82.687l-.153.866a.5.5 0 01-.493.42zM10.14 15.167H5.86c-2.327 0-2.42-1.287-2.493-2.327l-.434-6.713a.505.505 0 01.467-.534.505.505 0 01.533.467l.434 6.713c.073 1.014.1 1.394 1.493 1.394h4.28c1.4 0 1.427-.38 1.493-1.394l.434-6.713a.51.51 0 01.533-.467.5.5 0 01.467.534l-.434 6.713c-.073 1.04-.166 2.327-2.493 2.327z"
      ></path>
      <path
        fill="currentColor"
        d="M9.107 11.5h-2.22a.504.504 0 01-.5-.5c0-.273.226-.5.5-.5h2.22c.273 0 .5.227.5.5s-.227.5-.5.5zM9.667 8.833H6.333a.504.504 0 01-.5-.5c0-.273.227-.5.5-.5h3.334c.273 0 .5.227.5.5 0 .274-.227.5-.5.5z"
      ></path>
    </svg>
  );
}
