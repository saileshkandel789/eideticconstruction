
const isAuth = {};


isAuth.isAuthenticated = (req, res, next) => {
    console.log(req.body.isAuth,'yy');
  if(req.body.isAuth === 'true' || req.body.isAuth === true) {
    next();
  }else {
      res.json("please login first");
  }
  
};

module.exports = isAuth;
