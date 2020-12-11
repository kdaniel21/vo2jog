export default function (filters, availableSubcategories) {
  const availableItems = new Map(
    availableSubcategories.map(subcategory => [
      subcategory.name,
      subcategory.categoryItems,
    ])
  );

  const filteredQuery = {};

  // These fields are not getting filtered
  const excludedSubcategories = ['main', 'start', 'end'];

  Object.keys(filters).forEach(subcategory => {
    const items = filters[subcategory];

    const isExcluded = excludedSubcategories.includes(subcategory);
    const isCategoryIncluded = availableItems.has(subcategory);
    if (isExcluded) return (filteredQuery[subcategory] = items);
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
