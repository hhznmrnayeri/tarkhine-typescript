export type AddressType = {
  id: string;
  active: boolean;
  caption: string;
  name: string;
  user?: string;
  phone: number;
  onEdit(id: string): void;
  onRemove(id: string): void;
  onActive(id: string): void;
};
