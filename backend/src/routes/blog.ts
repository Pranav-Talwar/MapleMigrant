import { Hono } from 'hono'
import { getPrisma } from '../prismaClient'

type Env = {
  DATABASE_URL: string
  JWT_SECRET: string
}

export const blogRouter = new Hono<{ Bindings: Env }>()

blogRouter.use('/*', async (c, next) => {
  await next()
})

blogRouter.post('/', async c => {
  try {
    const prisma = getPrisma(c.env.DATABASE_URL)
    const body = await c.req.json()

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: '1',
      },
    })

    return c.json({ id: post.id })
  } catch (err) {
    return c.json({ error: (err as Error).message }, 500)
  }
})

blogRouter.put('/', async c => {
  try {
    const prisma = getPrisma(c.env.DATABASE_URL)
    const body = await c.req.json()

    const post = await prisma.post.update({
      where: { id: body.id },
      data: {
        title: body.title,
        content: body.content,
        authorId: '1',
      },
    })

    return c.json({ id: post.id })
  } catch (err) {
    return c.json({ error: (err as Error).message }, 500)
  }
})

blogRouter.get('/:id', async c => {
  try {
    const prisma = getPrisma(c.env.DATABASE_URL)
    const { id } = c.req.param()

    const post = await prisma.post.findUnique({
      where: { id },
    })

    return c.json(post)
  } catch (err) {
    return c.json({ error: (err as Error).message }, 500)
  }
})
// add pagination later
blogRouter.get('/bulk', async c => {
  try {
    const prisma = getPrisma(c.env.DATABASE_URL)

    const post = await prisma.post.findMany()

    return c.json(post)
  } catch (err) {
    return c.json({ error: (err as Error).message }, 500)
  }
})