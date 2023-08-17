import db from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8))

export const registerService = async ({ email, password }) => {
  try {
    const response = await db.User.findOrCreate({
      where: { email },
      defaults: {
        email,
        password: hashPassword(password)
      }
    })

    const token =
      response[1] &&
      jwt.sign({ email: response[0].email, password: response[0].password }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '2d'
      })
    return {
      success: response[1] ? true : false,
      message: response[1] ? 'Register is successful' : 'Email is used',
      token: token || null
    }
  } catch (error) {
    return error
  }
}
