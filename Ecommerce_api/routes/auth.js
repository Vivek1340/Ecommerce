const User = require("../models/User");
const router = require("express").Router();
const cryptoJS = require("crypto-js");
const jwt  = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try {
        const SavedUser = await newUser.save();
        res.status(201).json(SavedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        // !user && res.status(401).json("Wrong credentials!")
        if(!user){
            res.status(401).json(err)
            return;
        }
    
    

        const hashedPassword = cryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const Originalpassword = hashedPassword.toString(cryptoJS.enc.Utf8);

        Originalpassword !== req.body.password &&
        res.status(401).json(err)

        const accessToken = jwt.sign(
        {
            id:user.id, isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SEC,
        {expiresIn: "3d"}
        )
        //_doc : MongoDbB stores document under _doc

        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;