const express = require('express')

const menuController = require('../Controller/Menu/menuController')
const moduleController = require('../Controller/Menu/moduleController')
const mainController = require('../Controller/Menu/mainController')
const permissionController = require('../Controller/Menu/permissionController')

const router = express.Router()

// Module routes
router.delete('/module/:id', moduleController.deleteModule)
router.get('/module', moduleController.getModule)
router.put('/module', moduleController.updateModule)
router.post('/module', moduleController.addNewModule)

// Main service route
router.get('/module-with-menu', mainController.moduleWithMenu)
router.get('/all-module-menu', mainController.allModuleMenu)

// Menu routes
router.get('/menu', menuController.getMenu)
router.post('/menu', menuController.addMenu)
router.put('/menu', menuController.updateMenu)
router.delete('/menu/:id', menuController.deleteMenu)

// Permission
router.get('/permission', permissionController.getPermissionListController)
router.post('/permission', permissionController.createPermissionController)
router.put('/permission', permissionController.updatePermissionController)
router.delete('/permission/:id', permissionController.deletePermissionController)


module.exports = router