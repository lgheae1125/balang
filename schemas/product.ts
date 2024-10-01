type brandType = {
  id: number;
  nameEn: string;
  nameKr: string;
};

export type productType = {
  brand: brandType;
  brandId: number;
  deliveryType: string;
  id: number;
  imgSrc: string;
  name: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
};
