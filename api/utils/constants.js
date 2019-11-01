exports.URL =
  process.env.MONGODB_URI ||
  "mongodb+srv://corey:v2BQZiqK4DZMHN7@cluster0-4rbou.mongodb.net/test?retryWrites=true&w=majority";
exports.PORT = process.env.PORT || 4000;
exports.SECRET = process.env.SECRET || "alimoandwatereddownshots";
