const express = require("express");
const router = express.Router();
const Users = require("../db1/connection");
router.get("/", (req, res) => {
  res.end("hello From Server");
});

router.get("/users", (req, res) => {
  (async () => {
    const data = await Users.find();
    res.json(data);
  })();
});

router.get("/users/:id", (req, res) => {
  // res.send(req.params)
  (async () => {
    try {
      const data = await Users.find({ _id: req.params.id });
      res.json(data);
    } catch (e) {
      res.status(500).send(e);
    }
  })();
});

router.post("/users", (req, res) => {
  (async () => {
    console.log(req.body);
    const data = await Users.create(req.body);
    res.json(data);
  })();
});

router.patch("/users/:id", async (req, res) => {
  try {
    const result = await Users.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(result);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const result = await Users.findOneAndDelete({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
