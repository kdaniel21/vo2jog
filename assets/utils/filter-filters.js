export default function (filters, availableSubcategories) {
  const availableItems = new Map(
    availableSubcategories.map(subcategory => [
      subcategory.name,
      subcategory.categoryItems,
    ])
  );

  const filteredQuery = {};

  Object.keys(filters).forEach(subcategory => {
    const items = filters[subcategory];

    const isMain = subcategory === 'main';
    const isCategoryIncluded = availableItems.has(subcategory);
    if (isMain) return (filteredQuery[subcategory] = items);
    if (!isCategoryIncluded) return;

    const isArray = Array.isArray(items);
    const isItemIncluded =
      availableItems.get(subcategory).includes(items) || false;

    if (!isArray && isItemIncluded) return (filteredQuery[subcategory] = items);

    if (!isArray) return;

    const filteredItems = items.filter(item =>
      availableItems.get(subcategory).includes(item)
    );
    if (!filteredItems.length) return;

    filteredQuery[subcategory] = filteredItems;
  });

  return filteredQuery;
}
