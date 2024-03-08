export function convertMonthNumberToName(number: number): string {
  const date = new Date();
  date.setMonth(number - 1);
  const name = date.toLocaleString('uk', { month: 'short' });
  return name;
}
