import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/:uid", async (req, res) => {
     const uid = req.params.uid;
     const url = `https://enka.network/api/uid/${uid}`

     try {
          // Fetch data from the Enka API
          const response = await axios.get(url);
          const data = response.data;
          // Send the data back to the client
          res.send(data);
     } catch (error) {
          res.status(500).send({ error: "Something went wrong" });
     }
});

app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});