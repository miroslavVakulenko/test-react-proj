const payment ={
  id: "1",
  cardNumber: "1928 4893 9384 7385",
    cardType: "Mastercard",
    cardOwner: "Jane Smith",
    date: "2024-02-04",
    amount: 529,
    description: "q48z!aT6&z72",
    isPaid: false
}
export default function PaymentCard() {
  return (
    <>
      <div>
        <p>Anmount: {payment.amount}</p>
        <p>Status: Paid Pending</p>
        <p>Description: {payment.description}</p>
        <p>Card number: {payment.cardNumber}</p>
        <p>Card Type: {payment.cardType}</p>
        <p>Card Holder Name: {payment.cardOwner}</p>
        <p>Payment Date: {payment.date}</p>
    </div>
    </>
  )
}
