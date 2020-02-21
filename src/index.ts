


//  E X P O R T S

export const order = (maybeObject?: any) => {
  if (!maybeObject)
    return null;

  if (maybeObject instanceof Array || typeof maybeObject !== "object")
    return maybeObject;

  // https://stackoverflow.com/a/56833507
  const definitelyObject: { [index: string]: any } = maybeObject;
  const sortedKeys = Object.keys(definitelyObject).sort();

  // https://gist.github.com/aleph-naught2tog/938dd20dfc53e91da952569fd5655e2d
  return sortedKeys.reduce((objectSoFar, currentKey) => {
    const currentValue: any = definitelyObject[currentKey];
    const maybeSortedValue: any = order(currentValue);

    return Object.setPrototypeOf({
      ...objectSoFar,
      [currentKey]: maybeSortedValue === null ? 0 : maybeSortedValue
    }, Object.getPrototypeOf(definitelyObject));
  }, {});
};

export default (maybeObject?: any) => order(maybeObject);
