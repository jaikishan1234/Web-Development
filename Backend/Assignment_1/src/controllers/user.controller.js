const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")

// SEND FOLLOW REQUEST
async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if (followeeUsername === followerUsername) {
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username: followeeUsername
    })

    if (!isFolloweeExists) {
        return res.status(404).json({
            message: "User you are trying to follow does not exist"
        })
    }

    const existingFollow = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if (existingFollow) {

        if (existingFollow.status === "pending") {
            return res.status(200).json({
                message: "Follow request already sent",
                follow: existingFollow
            })
        }

        if (existingFollow.status === "accepted") {
            return res.status(200).json({
                message: `You are already following ${followeeUsername}`,
                follow: existingFollow
            })
        }

        if (existingFollow.status === "rejected") {
            existingFollow.status = "pending"
            await existingFollow.save()

            return res.status(200).json({
                message: "Follow request sent again",
                follow: existingFollow
            })
        }
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername,
        status: "pending"
    })

    res.status(201).json({
        message: `Follow request sent to ${followeeUsername}`,
        follow: followRecord
    })
}

// ACCEPT FOLLOW REQUEST
async function acceptFollowRequest(req, res) {
    const followeeUsername = req.user.username
    const followerUsername = req.params.username

    const request = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if (!request) {
        return res.status(404).json({
            message: "Follow request not found"
        })
    }

    if (request.status === "accepted") {
        return res.status(200).json({
            message: "Already accepted"
        })
    }

    request.status = "accepted"
    await request.save()

    res.status(200).json({
        message: `${followerUsername} is now following you`,
        follow: request
    })
}

// REJECT FOLLOW REQUEST
async function rejectFollowRequest(req, res) {
    const followeeUsername = req.user.username
    const followerUsername = req.params.username

    const request = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if (!request) {
        return res.status(404).json({
            message: "Follow request not found"
        })
    }

    request.status = "rejected"
    await request.save()

    res.status(200).json({
        message: "Follow request rejected",
        follow: request
    })
}

// UNFOLLOW (only if accepted)
async function unfollowUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if (!isUserFollowing || isUserFollowing.status !== "accepted") {
        return res.status(400).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}

// GET PENDING REQUESTS (for logged-in user)
async function getPendingRequests(req, res) {
    const username = req.user.username

    const requests = await followModel.find({
        followee: username,
        status: "pending"
    })

    res.status(200).json({
        requests
    })
}

module.exports = {
    followUserController,
    acceptFollowRequest,
    rejectFollowRequest,
    unfollowUserController,
    getPendingRequests
}