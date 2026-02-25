const express = require('express');
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")

const userRouter = express.Router();


/**
 * @route POST /api/users/follow/:username
 * @access Private
 * @description Initiates a follow request from the authenticated user to the target user.
 *
 * @param {string} username - Username of the user to be followed (route param)
 *
 * @logic
 * - Prevent self-follow
 * - Verify target user exists
 * - If already requested → return existing status
 * - If previously rejected → reset to "pending"
 * - Otherwise → create new follow request with status "pending"
 *
 * @returns {201} Follow request created successfully
 * @returns {200} Request already exists or re-sent
 * @returns {400} Invalid request (e.g., self-follow)
 * @returns {404} Target user not found
 */
userRouter.post("/follow/:username", identifyUser, userController.followUserController)


/**
 * @route POST /api/users/accept/:username
 * @access Private
 * @description Accepts a pending follow request from a specific user.
 *
 * @param {string} username - Username of the follower whose request is being accepted
 *
 * @logic
 * - Only the followee (logged-in user) can accept
 * - Validate request exists
 * - Update status from "pending" → "accepted"
 *
 * @returns {200} Follow request accepted
 * @returns {404} Request not found
 */
userRouter.post("/accept/:username", identifyUser, userController.acceptFollowRequest)


/**
 * @route POST /api/users/reject/:username
 * @access Private
 * @description Rejects a pending follow request from a specific user.
 *
 * @param {string} username - Username of the follower whose request is being rejected
 *
 * @logic
 * - Only the followee (logged-in user) can reject
 * - Validate request exists
 * - Update status from "pending" → "rejected"
 *
 * @returns {200} Follow request rejected
 * @returns {404} Request not found
 */
userRouter.post("/reject/:username", identifyUser, userController.rejectFollowRequest)


/**
 * @route POST /api/users/unfollow/:username
 * @access Private
 * @description Removes an existing follow relationship between the authenticated user and target user.
 *
 * @param {string} username - Username of the user to unfollow
 *
 * @logic
 * - Check if follow relationship exists
 * - Only allow if status is "accepted"
 * - Delete follow record
 *
 * @returns {200} Successfully unfollowed
 * @returns {400} Not currently following the user
 */
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)


/**
 * @route GET /api/users/requests
 * @access Private
 * @description Retrieves all pending follow requests for the authenticated user.
 *
 * @logic
 * - Fetch all records where:
 *   followee = logged-in user
 *   status = "pending"
 *
 * @returns {200} List of pending follow requests
 */
userRouter.get("/requests", identifyUser, userController.getPendingRequests)


module.exports = userRouter;