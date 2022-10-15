import 'dotenv/config';

import express from "express";
import cors from "cors";
import routes from "./users/routes.js"; 

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/user",  routes);  

app.get('/', (req, res) => {
    res.send('StudyNizer')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));