import { FoodType } from "../../types/FoodType.types";
import FoodItem from "./FoodItem";
import ListSection from "./ListSection";
type ListProps = {
  foodList: FoodType[];
};
export default function List({ foodList }: ListProps) {
  return (
    <div className="mb-6 md:mb-12">
      {foodList.map((item: FoodType) => (
        <ListSection key={item.id} title={item.title} btn={item.btn}>
          {item.foods.map((food) => (
            <FoodItem key={food.id} {...food} />
          ))}
        </ListSection>
      ))}
    </div>
  );
}
