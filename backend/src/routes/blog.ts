import { Hono } from 'hono'
import { getPrisma } from '../prismaClient'
import {  verify } from 'hono/jwt'
import { createPostInput, updatePostInput } from 'maplemigrant-common'

type Env = {
  DATABASE_URL: string
  JWT_SECRET: string
}

export const blogRouter = new Hono<{ 
    Bindings: Env,
    Variables: {
        userId: string  
        
    }
}>()

blogRouter.use('/*', async (c, next) => {
  const authHeader = c.req.header('Authorization') || ''
  const token      = authHeader.replace(/^Bearer\s+/i, '')

  // verify → unknown ; cast to expected shape

  try {
    const user = (await verify(token, c.env.JWT_SECRET)) as { id?: string }

    if (!user?.id) {
      return c.json({ error: 'Unauthorized' }, 401)
    }

    c.set('userId', user.id)
    await next()
  } catch (err) {
    return c.json({ error: 'Invalid token' }, 401)
  }
})

// add pagination later
blogRouter.get('/bulk', async c => {
  try {
    const prisma = getPrisma(c.env.DATABASE_URL);


    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json(posts);
  } catch (err) {
    return c.json({ error: (err as Error).message }, 500);
  }
});


blogRouter.post('/', async c => {
  try {
        const prisma = getPrisma(c.env.DATABASE_URL)
    const body = await c.req.json()
    const authorId = c.get("userId") 
       const {success} = createPostInput.safeParse(body)   
        if (!success) {
          return c.json({ error: 'invalid input' }, 400, {message: 'Invalid input data'})}


    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
      },
    })

    return c.json({ id: post.id })
  } catch (err) {
    return c.json({ error: (err as Error).message }, 500)
  }
})

blogRouter.put('/', async c => {
  try {   const prisma = getPrisma(c.env.DATABASE_URL)
    const body = await c.req.json()
    const authorId = c.get('userId') 
       const {success} = updatePostInput.safeParse(body)   
        if (!success) {
          return c.json({ error: 'invalid input' }, 400, {message: 'Invalid input data'})}
 

    const post = await prisma.post.update({
      where: { id: body.id },
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
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
