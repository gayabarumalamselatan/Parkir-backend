const tokenHandler = require('../../Service/JWT/tokenHandler')

const refreshAccessToken = async (req, res) => {
  /**
   #swagger.tags = ['Token']
    */
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.sendStatus(401); // Unauthorized if no refresh token is provided
  }

  try {
    const newAccessToken = await tokenHandler.refreshAccessToken(refreshToken);
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(403).json({ message: error }); // Forbidden if refresh token is invalid
  }
}

const generateRefreshTokenController = async (req, res) => {
  /**
   #swagger.tags = ['Token']
    */
  const { refreshToken } = req.body;

  try {
    const newRefreshToken = await tokenHandler.generateRefreshToken(refreshToken);
    res.json({refreshToken: newRefreshToken});
  } catch (error) {
    res.status(403).json({message: error})
  }
}

module.exports = {
  refreshAccessToken,
  generateRefreshTokenController
}