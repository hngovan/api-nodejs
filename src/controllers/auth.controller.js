import * as authService from '../services'

export const register = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password)
      return res.status(400).json({
        success: false,
        message: 'Missing Payload !'
      })

    const response = await authService.registerService(req.body)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}
