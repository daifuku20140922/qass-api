export const ProductCategory = {
  Laptop: 'laptop',
  MobilePhone: 'mobilePhone',
  MobileRouter: 'mobileRouter',
} as const;

export type ProductCategory =
  typeof ProductCategory[keyof typeof ProductCategory];

export const ProductCategories: ProductCategory[] = [
  ProductCategory.Laptop,
  ProductCategory.MobilePhone,
  ProductCategory.MobileRouter,
];

export const isProductCategory = (
  category: string,
): category is ProductCategory => {
  return ProductCategories.some((c) => c === category);
};
