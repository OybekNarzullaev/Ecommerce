import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51JpdBZHrYEDqyPzZKxrgGxl5rrlPUPJjvfTa6luwEZ7VCl3nTcAkeuTUA6vZ7VuPNgGQYbZwict2kQU2vNaa8QiO00hu2tysn8";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Iltimos kuting...</span>
      ) : (
        <StripeCheckout
          name="E-commerce"
          image="https://img.favpng.com/8/20/24/computer-icons-online-shopping-png-favpng-QuiWDXbsc69EE92m3bZ2i0ybS.jpg"
          billingAddress
          shippingAddress
          description="$ 20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              padding: "10px 30px",
              border: "none",
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Buy
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
