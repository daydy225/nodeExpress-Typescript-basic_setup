import crypto from 'crypto'
import { SECRET } from '../utils/config'

export const random = () => crypto.randomBytes(128).toString('base64')
export const passwordHash = (salt: string, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
}
