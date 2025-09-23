const uniqueInOrder = (iterable) => {
  return [...iterable].filter(
    (currentElement, i) => currentElement !== iterable[i + 1]
  );
};