import { useEffect, useState } from "react";
import chatInstance from "./chat";

export const App = () => {
  const [url, setUrl] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    if (amount) {
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

      const paymentJsonBase64 = chatInstance.generatePaymentString({ payments });

      const message = `Send \n[send](payment:${paymentJsonBase64})`;
      const url = chatInstance.sendMessageAfterPairing(message)

      setUrl(url);
    }

  }, [amount]);

  return <div style={{ fontSize: "18px" }}>
    <input placeholder="amount" onChange={(ev) => setAmount(ev.target.value)} style={{ marginRight: 5, fontSize: "18px" }} />
    {Number(amount) > 0 ? <a href={url}>Send</a> : null}
  </div>;
};
