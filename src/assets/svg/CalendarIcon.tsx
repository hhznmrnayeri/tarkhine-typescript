import { Icon } from "../../types/Icons.types";
export default function CalendarIcon({ size }: Icon): React.ReactNode {
  return (
    <svg className={`${size}`} fill="none" viewBox="0 0 12 12">
      <path
        fill="#717171"
        d="M4 2.875a.378.378 0 01-.375-.375V1c0-.205.17-.375.375-.375s.375.17.375.375v1.5c0 .205-.17.375-.375.375zM8 2.875a.378.378 0 01-.375-.375V1c0-.205.17-.375.375-.375s.375.17.375.375v1.5c0 .205-.17.375-.375.375zM4.25 7.25a.498.498 0 01-.19-.04.516.516 0 01-.165-.105.498.498 0 01-.105-.545.577.577 0 01.105-.165.516.516 0 01.71 0 .526.526 0 01.135.455.318.318 0 01-.03.09.379.379 0 01-.045.09c-.015.025-.04.05-.06.075a.526.526 0 01-.355.145zM6 7.25a.498.498 0 01-.19-.04.516.516 0 01-.165-.105.498.498 0 01-.105-.545.577.577 0 01.105-.165c.05-.045.1-.08.165-.105a.501.501 0 01.545.105.526.526 0 01.135.455.318.318 0 01-.03.09.379.379 0 01-.045.09c-.015.025-.04.05-.06.075A.526.526 0 016 7.25zM7.75 7.25a.498.498 0 01-.19-.04.516.516 0 01-.165-.105l-.06-.075a.379.379 0 01-.045-.09.318.318 0 01-.03-.09c-.005-.035-.01-.07-.01-.1 0-.13.055-.26.145-.355.05-.045.1-.08.165-.105a.5.5 0 01.545.105c.09.095.145.225.145.355 0 .03-.005.065-.01.1a.318.318 0 01-.03.09.379.379 0 01-.045.09c-.015.025-.04.05-.06.075a.526.526 0 01-.355.145zM4.25 9a.498.498 0 01-.19-.04.577.577 0 01-.165-.105.526.526 0 01-.145-.355c0-.065.015-.13.04-.19a.467.467 0 01.105-.165.524.524 0 01.71 0c.09.095.145.225.145.355 0 .13-.055.26-.145.355A.526.526 0 014.25 9zM6 9a.526.526 0 01-.355-.145A.526.526 0 015.5 8.5c0-.065.015-.13.04-.19a.467.467 0 01.105-.165.524.524 0 01.71 0c.045.045.08.1.105.165.025.06.04.125.04.19 0 .13-.055.26-.145.355A.526.526 0 016 9zM7.75 9a.526.526 0 01-.355-.145.467.467 0 01-.105-.165.498.498 0 01-.04-.19c0-.065.015-.13.04-.19a.467.467 0 01.105-.165.5.5 0 01.545-.105c.03.01.06.025.09.045.025.015.05.04.075.06.09.095.145.225.145.355 0 .13-.055.26-.145.355A.526.526 0 017.75 9zM10.25 4.92h-8.5a.378.378 0 01-.375-.375c0-.205.17-.375.375-.375h8.5c.205 0 .375.17.375.375s-.17.375-.375.375z"
      ></path>
      <path
        fill="#717171"
        d="M8 11.375H4c-1.825 0-2.875-1.05-2.875-2.875V4.25c0-1.825 1.05-2.875 2.875-2.875h4c1.825 0 2.875 1.05 2.875 2.875V8.5c0 1.825-1.05 2.875-2.875 2.875zm-4-9.25c-1.43 0-2.125.695-2.125 2.125V8.5c0 1.43.695 2.125 2.125 2.125h4c1.43 0 2.125-.695 2.125-2.125V4.25c0-1.43-.695-2.125-2.125-2.125H4z"
      ></path>
    </svg>
  );
}