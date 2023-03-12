const dotenv = require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const sendEmail = require("./utils/sendEmail");
const cors = require("cors");
// import { register } from "./controllers/auth.js";

const { typeDefs, resolvers } = require("./schemas");
//const { authMiddleware } = require('./utils/auth');
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  //  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//auth
// app.post("/auth/register", register);

// Entregar activos estáticos
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//EndPoint de correo
app.post("/api/sendemail", async (req, res) => {
  var postParams = req.body;
  console.log("  postParams:", postParams);

  console.log("bodySendMail:", req.body);
  const { email, sub, msg } = req.body;

  try {
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const subject = sub;
    const message = msg;

    await sendEmail(subject, message, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});
//endPoint de correo

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
