import { useEffect, useState } from "react";
import multiPayments from "./multiPayments";

export default () => {
  const [url, setUrl] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    if(amount){
      const payments = [
        {
          address: "2QVJOY3BRRGWP7IOYL64O5BU3WLUJ4TZ",
          amount: Math.trunc(amount * 1e9 / 2),
          asset: "base"
        },
        {
          address: "EJC4A7WQGHEZEKW6RLO7F26SAR4LAQBU",
          amount: Math.trunc(amount * 1e9 / 2),
          asset: "base"
        }
      ];
      
      const paymentJsonBase64 = multiPayments.generatePayment({ payments });
      const message = `Send \n[send](payment:${paymentJsonBase64})`;
      const url = multiPayments.getLink(message);
      setUrl(url);
    }
    
  }, [amount]);

  return <div>
    <input placeholder="amount" onChange={(ev) => setAmount(ev.target.value)} />
    <br/>
    <a href={url}>Send</a>
  </div>;
};
