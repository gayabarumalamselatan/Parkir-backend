const memberService = require('../../Service/Member/member')

const addMemberController = async (req, res) => {
  try {
    const result = await memberService.addMember(req.body)
    if(!result.success){
      return res.status(401).json({
        message: result.message,
        error: result.error
      })
    }
    return res.status(200).json({
      message: result.message
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    })
  }
}

const getMemberController = async (req, res) => {
  try {
    const data = await memberService.getMember(req.query)
    res.json(data)
  } catch (error) {
    res.status(500).json({
      message: error
    })
  }
}

const updateMemberController = async (req, res) => {
  try {
    const result = await memberService.updateMember(req.body)
    if(!result.success){
      return res.status(401).json({
        message: result.message
      })
    }
    return res.status(200).json({
      message: "Data updated successfully"
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: error
    })
  }
} 

const deleteMember = async (req, res) => {
  const { id } = req.params
  try {
    const result = await memberService.deleteMember(parseInt(id))
    if(!result.success) {
      return res.status(500).json({
        message: result.error
      })
    }
    return res.status(200).json({
      message: result.message
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: error
    })
  }
}

module.exports = {
  addMemberController,
  getMemberController,
  updateMemberController,
  deleteMember
}