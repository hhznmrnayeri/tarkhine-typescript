import { FoodTypes } from "./Food.types";
export type FoodType = {
  id: string;
  title: string;
  value?: string;
  btn?: boolean;
  foods: FoodTypes[];
};
