export default function (filters, availableSubcategories) {
  const availableItems = new Map(
    availableSubcategories.map(filter => [filter.name, filter.categoryItems])
  );

  const filteredQuery = {};

  // These fields are not getting filtered
  const excludedFilters = ['main', 'start', 'end', 'lat', 'lng', 'radius'];

  Object.keys(filters).forEach(filter => {
    const items = filters[filter];

    const isExcluded = excludedFilters.includes(filter);
    const isCategoryIncluded = availableItems.has(filter);
    if (isExcluded) return (filteredQuery[filter] = items);
    if (!isCategoryIncluded) return;

    const isArray = Array.isArray(items);
    const isItemIncluded = availableItems.get(filter).includes(items) || false;

    if (!isArray && isItemIncluded) return (filteredQuery[filter] = items);

    if (!isArray) return;

    const filteredItems = items.filter(item =>
      availableItems.get(filter).includes(item)
    );
    if (!filteredItems.length) return;

    filteredQuery[filter] = filteredItems;
  });

  return filteredQuery;
}
