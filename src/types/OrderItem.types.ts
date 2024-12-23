export type OrderItemType = {
  id: string;
  topicId?: string;
  typeId?: string;
  foodId?: string;
  isFavorite?: boolean;
  isSpecial?: boolean;
  isPopular?: boolean;
  isForeign?: boolean;
  img: string[];
  title: string;
  resepi?: string;
  offerWrapper?: string;
  offerPrice?: string;
  offerCount?: string;
  priceValue?: string;
  comment?: string;
  star: number;
  count: number;
};
