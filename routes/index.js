var express = require('express');
var router = express.Router();

const User = require("../model/userSchema");
const passport = require("passport");
const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(User.authenticate()))

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.render('index', {user:req.user });
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register',async function(req, res, next) {
  try {
    const {username, profileImage, password } = req.body;
    await User.register({username, profileImage}, password);

  res.send("user registered")
  } catch (error) {
    res.send(error)
  }
});



router.get('/login', function(req, res, next) {
  res.render('login');
});


router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login"
}),
function (req, res, next) {}
);




router.get('/logout-user', function(req, res, next) {
  req.logOut(() => {
    res.redirect('/login')
  });
});


function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    next();
  }else{
    res.redirect('/login')
  }
}



module.exports = router;
