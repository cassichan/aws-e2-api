import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4040;

app.get("/", (req, res) => {
    res.send("my api")
})


app.listen(PORT, () => {
  console.log(`Listening on http://localhost: ${PORT}`);
});
