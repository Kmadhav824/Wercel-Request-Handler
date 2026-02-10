import express from "express";

const app = express();  

app.get('/:anything', async (req, res) => {
  res.send("Hello User!");
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});