const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username,
    password,
  });

  res.json({ msg: "user created successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  //   User.find({}).then((courses) => {
  //     res.json({

  //     })
  //   })
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  try {
    await User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
  res.json({
    msg: `purchased courses`,
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });
  console.log(user.purchasedCourses);
  const course = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    course,
  });
});

module.exports = router;
