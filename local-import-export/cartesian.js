export const cartesianProduct = (...sets) => {
    const flatten = (arr) => [].concat.apply([], arr)
  
    const product = (...sets) =>
      sets.filter(el => el.length)
        .reduce((acc, set) =>
          flatten(acc.map(x => set.map(y => [...x, y]))),
        [[]]).filter(el => el.length)
  
    return product(...sets)
  }