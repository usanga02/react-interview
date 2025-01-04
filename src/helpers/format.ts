export function formatMoney(amount: string): string {
  return parseFloat(amount)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const calculateTotal = (
  items: {
    name: string;
    id: string;
    variant: string;
    quantity: number;
    unit: string;
    price: number;
    amount: number;
    deliveryDate: string;
  }[]
) => items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);

export function formatDate(inputDate: string) {
  if (!inputDate.includes("/")) return inputDate;
  // Split the input date (MM/DD/YYYY)
  const [month, day, year] = inputDate?.split("/");

  // Return the formatted date in YYYY-MM-DD format
  return `${year}-${month?.padStart(2, "0")}-${day?.padStart(2, "0")}`;
}
