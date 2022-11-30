import express from 'express';
import morgan from 'morgan';
import router from './routes/index.js';
const app = express();
const PORT = process.env.port || 3000;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use("/api/", router);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
