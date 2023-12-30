const express = require("express");
const port = 5000;

const app = express();

//middleWare qui permet de traiter les données du "Request"
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//lancer le serveur
app.listen(port, () =>
  console.log("le server a démarrer a demarrer au port " + port)
);
