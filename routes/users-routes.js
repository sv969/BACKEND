const express = require("express");

const router = express.Router();

router.get("/:userId", (req, res, next) => {
  const userId = req.params.userId;
  const user = DUMMY_USERS.find((u) => {
    return u.id === userId;
  });
  res.json({ user });
});

module.exports = router;
