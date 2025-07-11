import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dutyRoutes from "./routes/dutyRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: [
      `http://${process.env.DUTY_MANAGER_FRONTEND}`
    ],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  console.log("health check");
  res.send("OK");
});
app.use("/duties", dutyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});

export default app;
