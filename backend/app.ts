import express from "express";
import { Response, Request } from "express";
const port = 3200;
const app = express();
app.get("/test", (req: Request, res: Response) => {
  res.json({ status: 200, message: "welcome from monorepo server" });
});
app.listen(port, () => {
  console.log(`Server  running  on ${port}`);
});
