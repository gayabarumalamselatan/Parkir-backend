const PermissionService = require('../../Service/Menu/permissionService')

const getPermissionListController = async (req, res) => {
  try {
    const data = await PermissionService.getPermissionList(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

const createPermissionController = async (req, res) => {
  try {
    const data = await PermissionService.createPermission(req.body);
    if(!data.success){
      return res.status(500).json({
        message: data.message
      })
    } else if (data.success === true) {
      return res.status(200).json({
        message: data.message
      })
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error
    })    
  }
}

const updatePermissionController = async (req, res) => {
  try {
    const result = await PermissionService.updatePermission(req.body);
    if(!result.success){
      return res.status(500).json({
        message: result.message
      })
    } else if (result.success === true){
      return res.status(200).json({message: result.message});
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: error
    })
  }
}

const deletePermissionController = async (req, res) => {

  const {id} = req.params
  try {
    const result = await PermissionService.deletePermission(parseInt(id));
    if(!result.success) {
      return res.status(500).json({
        message: result.message
      })
    }else if(result.success === true) {
      return res.status(200).json({
        message: result.message
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: error
    })
  }
}

module.exports = {
  getPermissionListController,
  createPermissionController,
  updatePermissionController,
  deletePermissionController
}