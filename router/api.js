const express = require('express')
const router = express.Router()




//@Endpoint  http://localhost:3000/api/register
//@Method    POST
//@Access    Publish
router.post("/register", register);

//@Endpoint  http://localhost:3000/api/login
//@Method    POST
//@Access    Publish
router.post("/login", login);
