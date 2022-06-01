const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY_MY);
// const Order = require("../models/Order");


router.post("/payment" , async (req,res)=>{

    // try{
    //     const session = await stripe.checkout.sessions.create({
    //         paymet_method_types:['card'],
    //         mode:'payment',
    //         success_url: `http://localhost:3000/success` ,
    //         cancel_url: ``
    //     })
    //     res.json({url:session.url})
    // }catch(e){
    //     res.status(500).json({error: e.message});
    // }
    // stripe.charges.create({
    //     source: req.body.tokenId,
    //     amount: req.body.amount,
    //     currency:"usd",
    // },(stripeErr , stripeRes)=>{
    //     if(stripeErr){
    //         res.status(500).json(stripeErr);
    //     }else{
    //         res.status(200).json(stripeRes);
    //     }
    // });
   
        // const newOrder = new Order(req.body)

        // try {
        //     const savedOrder = await newOrder.save();
        //     res.status(200).json(savedOrder);
        // }
        // catch (err) {
        //     res.status(500).json(err);
        // }
    
        res.status(200)
});

module.exports = router;

// router.post("/payment" , (req,res)=>{
//     stripe.charges.create({
//         source: req.body.tokenId,
//         amount: req.body.amount,
//         currency:"usd",
//     },(stripeErr , stripeRes)=>{
//         if(stripeErr){
//             res.status(500).json(stripeErr);
//         }else{
//             res.status(200).json(stripeRes);
//         }
//     });
// })
