import { Request, Response } from "express";
const allAccess = (req: Request, res: Response) => {
  res.status(200).send("Public Content.");
};

export default {
  allAccess,
};
