const express = require('express')
const memberController = require('../Controller/Member/memberController')
const strukController = require('../Controller/Member/strukController')

const router = express.Router()

// Member router
router.post('/member', memberController.addMemberController)
router.get('/member', memberController.getMemberController),
router.put('/member', memberController.updateMemberController)
router.delete('/member/:id', memberController.deleteMember)

// Struk router
router.post('/struk', strukController.addStrukController);
router.get('/struk',  strukController.getStrukController);
router.put('/struk',  strukController.updateStrukController);

module.exports = router