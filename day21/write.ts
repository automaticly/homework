// 正如String.prototype.trim()，请实现Trim<T>。
// type A = Trim<'    BFE.dev'> // 'BFE'
// type B = Trim<' BFE. dev  '> // 'BFE. dev'
// type C = Trim<'  BFE .   dev  '> // 'BFE .   dev'

type Trim<T extends string> =  T extends ` ${infer right}` ? Trim<right> : T extends `${infer left} ` ? Trim<left> : T