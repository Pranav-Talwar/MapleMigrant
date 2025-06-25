import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import { getPrisma } from './prismaClient'

type Env = {
  DATABASE_URL: string
  JWT_SECRET:   string
}

const app = new Hono<{ Bindings: Env }>()

app.get('/', c => c.text('Hono ✓  Prisma ✓'))

/* ----------  SIGN-UP  ---------- */
app.post('/api/v1/signup', async c => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  const body   = await c.req.json()

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
app.post('/api/v1/signin', async c => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  const body   = await c.req.json()

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

export default app
