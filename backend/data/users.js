import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('45683968', 10),
    isAdmin: true,
  },
  {
    name: 'user',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
