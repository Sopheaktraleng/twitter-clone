const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const userRouter = require("./routes/user.js");
const tweetRouter = require("./routes/tweet.js");
const dbConnect = require("./config/db.js");
const authRouter = require("./routes/auth.js");
const passport = require("passport");
const jwtStrategy = require("./utils/strategies/jwt-strategy.js");
const { setupSwagger } = require("./utils/swagger/index.js");
require("dotenv").config();

// Allow all origins
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Connect to MongoDB
dbConnect().catch((err) => {
    console.log(err);
});

// Set up Swagger
setupSwagger(app);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.use(express.json());
// Routes
app.use(
    "/api/v1/user",
    passport.authenticate("jwt", { session: false }),
    userRouter
);
app.use("/api/v1/tweet", tweetRouter);
app.use("/api/v1/auth", authRouter);

app.use(passport.initialize());
passport.use(jwtStrategy);
