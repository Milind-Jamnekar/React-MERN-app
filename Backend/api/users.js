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

// GET /user/<user_id>
router.route("/:_id").get((req, res) => {
  Users.findById(req.params._id, (err, user) =>
    err ? res.status(400).json({ err }) : res.status(200).json({ user })
  );
});

// PUT /user/<user_id>
router.route("/:_id").put((req, res) => {
  Users.updateOne(req.params._id, req.body, (err, user) =>
    err ? res.status(400).json({ err }) : res.status(200).json({ user })
  );
});

// DELETE /user/<user_id>
router.route("/:_id").delete((req, res) => {
  Users.deleteOne(req.params, (err, user) =>
    err ? res.status(400).json({ err }) : res.status(200).json({ user })
  );
});

export default router;
