type ProduceFunc = <T>(base: T, receipe: (draft: T) => any) => void
type CompareFunc = <T>(base: T, pro: T) => boolean;
const compare: CompareFunc  = (base, produced) => {
  if(typeof base !== typeof produced) {
    return false;
  }
  if(typeof base !== 'object') {
    return base === produced;
  }
  let equal = true;
  for(const key in produced) {
    if(key in base) {
      if(compare(base[key], produced[key])) {
        produced[key] = base[key];
      } else {
        equal = false;
      }
    } else {
      equal = false;
    }
  }
  for(const key in base) {
    if(!(key in produced)) {
      equal = false;
    }
  }
  return equal;
}

const produce: ProduceFunc = (base, recipe) => {
  // your code here
  let pro = JSON.parse(JSON.stringify(base));
  recipe(pro);
  if (compare(base, pro)){
    pro = base
  }
  return pro;
}