// 来简单实现下双向绑定。
// 请实现函数model(state, element)，使得state.value和HTMLInputElement element联动。

function model(state: {value: string}, element: HTMLInputElement) {
    // your code here
    element.value = state.value;
    Object.defineProperty(state, 'value', {
      get: () => element.value,
      set: (value) => element.value = value,
    })
  }