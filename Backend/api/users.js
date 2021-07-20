import { Router } from "express";
import Users from "../modals/user.model.js";

const router = Router();

// GET /user
router.route("/").get((req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

// POST /user {name:string, email:string, phone:Int}
router.route("/").post((req, res) => {
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  user
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error" + err));
});

export default router;
