import StripeCheckout from 'react-stripe-checkout';
import {useState, useEffect} from "react";
import axios from "axios"


const KEY = "pk_test_51KgmC2SAGBCOFV1oODfExYq6dtoWcoXZG4IGiX4laIvE2UplzO3iaVqwNsXiyabhrOVYCva6dG8LZBCEGUVosSNz00NHx1vqht"

const Pay = () => {
const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) =>{
        setStripeToken(token);
        // console.log(token);
    };

    useEffect(()=>{
        const makeRequest = async()=>{
            try{
             const res =   await axios.post(
                   "http://localhost:5000/api/checkout/payment",
                   { 
                    //    method: 'POST',
                       headers:{
                            'Authorization':'Bearer '+process.env.STRIPE_KEY
                       },
                       tokenId : stripeToken.id,
                       amount: 5000,             
                    }
                   );
                   console.log(res.data);
            }catch(err){
                console.log(err)
            }
        };
        stripeToken && makeRequest()
    },[stripeToken]);

    return(
        <div 
        style={{
            height:"100vh",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
        }}
        >
        <StripeCheckout 
        name="Swagger" 
        image="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        billingAddress
        shippingAddress
        description='Your total is $50'
        amount={5000}
        token={onToken}
        stripeKey={KEY}
        >
            <button
            style={{
                border:"none",
                width:120,
                borderRadius:5,
                padding: "20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:"600",
                cursor:"pointer",
            }}
            >
            Pay Now

            </button>
            </StripeCheckout>
        </div>
    );
};

export default Pay;