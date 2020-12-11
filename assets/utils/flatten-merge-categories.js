export default function flattenAndMergeCategories(subcategories) {
  // Flatten
  const flatSubcategories = subcategories.flatMap(
    subcategory => subcategory.subcategories
  );

  // Merge duplicates
  const subcategoriesMap = new Map();

  flatSubcategories.forEach(subcategory => {
    const { name } = subcategory;
    let items = subcategory.categoryItems;

    if (subcategoriesMap.has(name))
      items = [...subcategoriesMap.get(name).categoryItems, ...items];

    subcategoriesMap.set(name, { categoryItems: items });
  });

  // Create object
  return Array.from(subcategoriesMap.keys()).map(key => ({
    name: key,
    ...subcategoriesMap.get(key),
  }));
}
