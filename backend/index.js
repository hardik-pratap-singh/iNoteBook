require("dotenv").config() 
const express = require("express")
const app = express()
const db = require('./db')
db();
const cors = require("cors") ; 
app.use(cors());
// app.use(express.urlencoded({extended: true}));
// app.use(express.json())
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

const authRouter = require("./routers/auth.js")
app.use("/auth" , authRouter);
const noteRouter = require("./routers/note.js")
app.use("/note" , noteRouter) ; 
const PORT = process.env.PORT || 5000  ;


app.listen(PORT , () => {
    console.log("server running on PORT 5000");
})

