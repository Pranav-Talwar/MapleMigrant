import { Hono } from 'hono'
import { sign , verify } from 'hono/jwt'
import { getPrisma } from '../prismaClient'
import { signinInput, signupInput } from 'maplemigrant-common'

type Env = {
  DATABASE_URL: string
  JWT_SECRET:   string
}

export const userRouter = new Hono<{ Bindings: Env }>()

/* ----------  SIGN-UP  ---------- */
userRouter.post('/signup', async c => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  const body   = await c.req.json()
    const {success} = signupInput.safeParse(body)   
    if (!success) {
      return c.json({ error: 'invalid input' }, 400, {message: 'Invalid input data'})}
  try {
    const user = await prisma.user.create({
      data: {
        email:    body.email,
        name:     body.name,
        password: body.password   // 🔒 hash in prod
      }
    })
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({ jwt })
  } catch (err) {
    return c.json(
      { error: 'signup failed', details: (err as Error).message },
      500
    )
  }
})

/* ----------  SIGN-IN  ---------- */
userRouter.post('/signin', async c => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  const body   = await c.req.json()
   const {success} = signinInput.safeParse(body)   
    if (!success) {
      return c.json({ error: 'invalid input' }, 400, {message: 'Invalid input data'})}
  try {
    const user = await prisma.user.findUnique({ where: { email: body.email } })

    if (!user || user.password !== body.password) {
      return c.json({ error: 'invalid email or password' }, 401)
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({ jwt })
  } catch (err) {
    return c.json(
      { error: 'signin failed', details: (err as Error).message },
      500
    )
  }
})