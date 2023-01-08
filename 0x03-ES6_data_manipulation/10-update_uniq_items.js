export default function updateUniqueItems(myMap) {
  if (Object.getPrototypeOf(myMap) !== Map.prototype) throw new TypeError('Cannot process');
  myMap.forEach((quantity, name) => {
    if (quantity === 1) {
      myMap.set(name, 100);
    }
  });
  return myMap;
}
