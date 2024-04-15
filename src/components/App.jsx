// src/App.jsx

// import { Product } from './Product';
// import Toggler from "./Toggler" 
import Reader from "./Reader"
import articles from "./articles.json"

import PaymentCard from "./PaymentCard"
export default function App() {
  return (
    <>
      {/* <PaymentCard />
      <Toggler/>
      <Toggler/>
      <Toggler /> */}     
      <Reader items={articles} />
    </>
  )
}
