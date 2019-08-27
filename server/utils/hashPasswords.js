import bcrypt from 'bcrypt'
export const hashPasswords = password => {
  const saltRounds = 10
  return bcrypt.hashSync(password, saltRounds )
}
