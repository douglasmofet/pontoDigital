export const HasValue = (item: any) => {
  if (typeof item == 'object'){
    return item != null && item.length > 0;
  }

  return item != null;
}