const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })



/**
 * POST /api/posts [protected]
 * - req.body = { caption,image-file }
 */
postRouter.post("/", upload.single("image"), postController.createPostController) // here "image" it can be any name


module.exports = postRouter