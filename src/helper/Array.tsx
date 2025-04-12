export const MoveIndexToEnd = <T,>(arr: T[], index: number, setArray: (array: T[]) => void): void => {
  if (index < 0 || index >= arr.length) return;
  setTimeout(() => {
    const item = arr[index];
    const newArr = [...arr.slice(0, index), ...arr.slice(index + 1), item];
    setArray(newArr);
  }, 300);
};

export const MoveLastIndexToStart = <T,>(arr: T[], setArray: (array: T[]) => void): void => {
  if (arr.length === 0) return;
  setTimeout(() => {
    const lastItem = arr[arr.length - 1];
    const newArr = [lastItem, ...arr.slice(0, arr.length - 1)];
    setArray(newArr);
  }, 300);
};
