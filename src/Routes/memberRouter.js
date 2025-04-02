const express = require('express')
const memberController = require('../Controller/Member/memberController')

const router = express.Router()

// Member router
router.post('/member', memberController.addMemberController)
router.get('/member', memberController.getMemberController),
router.put('/member', memberController.updateMemberController)
router.delete('/member/:id', memberController.deleteMember)

module.exports = router