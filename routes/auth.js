const { signUp, signIn } = require("../controllers/auth")

const router = require("express").Router()

router.post("/auth/signup", signUp);

router.post("/auth/signin", signIn)


module.exports = router