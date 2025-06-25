import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

type Env = {
  DATABASE_URL: string
}


const app = new Hono<{ Bindings: Env }>()

const createPrisma = (databaseUrl: string) =>
  new PrismaClient({
    datasourceUrl: databaseUrl,
  }).$extends(withAccelerate())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', async (c) => {
  const prisma = createPrisma(c.env.DATABASE_URL)

  // 🔑 Use prisma or remove the assignment
  // Example: await prisma.user.create(...)
  // For now just a placeholder:
  // await prisma.$disconnect()

  return c.json({ message: 'User signed up successfully!' })
})

app.post('/api/v1/signin', (c) => {
  return c.json({ message: 'User logged in successfully!' })
})

app.post('/api/v1/blog', (c) => {
  return c.json({ message: 'Blog post created successfully!' })
})

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ message: `Details of blog post with ID: ${id}` })
})

app.put('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id')
  return c.json({ message: `Blog post with ID: ${id} updated successfully!` })
})

export default app
