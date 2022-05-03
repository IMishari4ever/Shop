export const formatAmount = (amount) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  return formatter.format(amount);
};
