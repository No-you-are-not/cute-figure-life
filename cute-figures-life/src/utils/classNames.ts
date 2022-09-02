/**
 * classNames function for concatenate strings, can take multiple strings or object,
 * all keys in object will be included to final string, if value is true
 * @params {String | Object} string: single or separated by commas, object: key = string, valid = boolean
 * @params {Object} key = string, valie = boolean
 * @return {String} result of concatenate strings
 */

export function classNames(...arg: any[]): string {
  if (arg.length === 0) return '';
  return arg
    .reduce((acc, item) => {
      if (typeof item === 'string') return acc.concat(item);

      if (typeof item === 'object' && item !== null) {
        const fromObject = Object.entries(item)
          .reduce((a, e) => {
            if (typeof e[1] === 'boolean' && e[1] === true) {
              return a.concat(e[0] as any);
            }

            return a;
          }, [])
          .join(' ');

        return acc.concat(fromObject);
      }

      return acc;
    }, [])
    .join(' ');
}
