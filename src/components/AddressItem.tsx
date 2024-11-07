import EditIcon from "../assets/svg/EditIcon";
import TrashIcon from "../assets/svg/TrashIcon";
import { AddressType } from "../types/Address.types";
export default function AddressItem(props: AddressType) {
  return (
    <div
      className={`border rounded p-4 flex flex-col gap-2 bg-gray-100 w-full xl:w-80 ${
        props.active ? "border-primary" : "border-gray-400"
      }`}
    >
      {/* top wrapper */}
      <div className="flex items-start justify-between gap-1 h-10">
        {/* address text */}
        <p className="text-2xs md:text-sm">{props.caption}</p>
        <div className="flex items-center gap-3">
          {/* edit address */}
          <button>
            <EditIcon size="w-4 md:w-6 h-4 md:h-6" />
          </button>
          {/* delete address */}
          <button>
            <TrashIcon size="w-4 md:w-6 h-4 md:h-6" />
          </button>
        </div>
      </div>
      {/* bottom wrapper */}
      <div className="flex items-center justify-between text-2xs md:text-sm text-gray-700">
        {/* name address */}
        <span>{props.name}</span>
        {/* user name */}
        <span>{props.user}</span>
        {/* phone */}
        <span className="md:text-xs">{props.phone}</span>
      </div>
    </div>
  );
}
