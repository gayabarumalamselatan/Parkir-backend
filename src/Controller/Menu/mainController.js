const Service = require('../../Service/Menu/mainService')

const moduleWithMenu = async (req, res) => {
  try {
    const data = await Service.moduleWithMenu(req.query)
    console.log(data)
    res.json(data)
  } catch (error) {
    res.status(500).json({
      message: 'server error',
    })
  }
}

const allModuleMenu = async(req, res) => {
  try {
    const data = await Service.getAllModuleMenu()
    res.json(data)
  } catch (error) {
    res.status(500).json({
      message: 'server error',
    })
  }
}

module.exports = {
  moduleWithMenu,
  allModuleMenu
}