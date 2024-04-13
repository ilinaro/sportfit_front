export function numberWithSpaces(x: string | null | undefined | number) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " ₽";
  }
  return ``;
}
