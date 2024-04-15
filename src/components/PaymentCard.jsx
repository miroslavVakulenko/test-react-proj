

export default function PaymentCard({
  payment: {
    amount,
    description,
    date,
    cardOwner,
    cardType,
    cardNumber,
    isPaid,
  },
}) {

  return (
    <div>
      <p>Anmount: {amount}</p>
      <p>{isPaid ? "Status Paid" : "Status: pending"}</p>
      <p>Description: {description}</p>
      <p>Card number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <p>Payment Date:{date}</p>
    </div>
  );
}
// ==================