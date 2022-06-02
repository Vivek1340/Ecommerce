import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
//   //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
//   // const data = location.state.stripeData;
// console.log(location)
  const cart = location.state;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
 
//   useEffect(() => {
//     const createOrder = async () => {
//       try {
//         const res = await userRequest.post("/orders", {
//           userId: currentUser._id,
//           products: cart.products.map((item) => ({
//             productId: item._id,
//             quantity: item._quantity,
//           })),
//           amount: cart.total,
// //           // address: data.billing_details.address,
//         });
//         setOrderId(currentUser._id);
// // console.log(res)
//       } catch {}
//     };
//      createOrder();
//   }, [cart, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
        Order has been created successfully.
        <Link to="/">
      <button style={{ padding: 10, marginTop: 20, background:"teal", color: "white", cursor:"pointer" }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;