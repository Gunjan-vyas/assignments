const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    username: username,
    password: password,
  })
    .then((user) => {
      res.json({
        message: "Admin created successfully",
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.image;
  const price = req.body.price;
  //zod for input validation
  Course.create({
    title,
    description,
    imageLink,
    price,
  }).then((response) => {
    console.log(response);
    res.json({
      msg: "Course created successfully",
      courseId: response._id,
    });
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find({})
  .then((response) => {
    res.json({
      courses: response,
    });
  });
});

module.exports = router;
