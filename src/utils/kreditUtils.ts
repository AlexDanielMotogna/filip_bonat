
export const parseATNumber = (input: string): number => {
  const normalized = input.replace(/\./g, "").replace(",", ".");
  return parseFloat(normalized);
};

export const formatCurrency = (value: number) =>
  value.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

export const calculateMonthlyPayment = (
  principal: number,
  months: number,
  interestRate: number
): number => {
  const monthlyRate = interestRate / 100 / 12;
  if (monthlyRate === 0) return principal / months;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
};
