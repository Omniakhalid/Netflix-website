const app = require("express").Router();
var multer = require("multer");
/********************************************************************************************************* */
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
//fileFilter
function fileFilter(req, file, cb) {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}
/********************************************************************************************************* */
var upload = multer({ dest: "uploads", storage, fileFilter });
const {
  getMovieById,
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controller/movies.controller");

app.get("/Netflix-API/getMovieById/:id", getMovieById);
app.get("/Netflix-API/allMovies", getAllMovies);
app.post("/Netflix-API/addMovie", upload.single("image"), addMovie);
app.put("/Netflix-API/updateMovie/:id", upload.single("image"), updateMovie);
app.delete("/Netflix-API/deleteMovie/:id", deleteMovie);

module.exports = app;
