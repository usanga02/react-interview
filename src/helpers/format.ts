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
