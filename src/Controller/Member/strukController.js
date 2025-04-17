const strukService = require('../../Service/Member/strukService');

const addStrukController = async (req, res) => {
  /**
   #swagger.tags = ['Struk']
    */
  try {
    if(!req.body){
      return res.status(400).json({
        message: "Data is required",
      })
    }
    const result = await strukService.addStruk(req.body);
    if(!result.success){
      return res.status(401).json({
        message: result.message,
        error: result.error,
      })
    }
    return res.status(200).json({
      message: result.message,
      data: result.data
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    })
  }
}

const getStrukController = async (req, res) => {
  /**
   #swagger.tags = ['Struk']
    */
  try {
    const result = await strukService.getStruk(req.body)
    if(!result.success){
      return res.status(401).json({
        message: result.message,
      })
    }
    return res.status(200).json({
      message: result.message,
      data: result.data
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    })
  }
}

const updateStrukController = async (req, res) => {
  /**
   #swagger.tags = ['Struk']
    */
  try {
    const result = await strukService.updateStruk(req.body);
    if(!result.success){
      return res.status(401).json({
        message: result.message,
        data: result.data
      })
    }
    return res.status(200).json({
      message: result.message,
      data: result.data
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    })
  }
}

module.exports = {
  addStrukController,
  getStrukController,
  updateStrukController
}