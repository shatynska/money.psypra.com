export const convertMonthNumberToName = (number: number): string => {
  const date = new Date();
  date.setMonth(number);
  const name = date.toLocaleString('uk', { month: "short" });
  return name;
}