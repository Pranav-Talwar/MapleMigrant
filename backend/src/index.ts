import { Hono } from 'hono'
import { sign , verify } from 'hono/jwt'
import { getPrisma } from './prismaClient'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

type Env = {
  DATABASE_URL: string
  JWT_SECRET:   string
}

const app = new Hono<{ Bindings: Env }>()
app.use('/api/*', cors())

app.route("api/v1/user", userRouter)
app.route("api/v1/blog", blogRouter)

app.get('/', c => c.text('Hono ✓  Prisma ✓'))

// app.use('/api/v1/*', async (c, next) => {
//   const header = c.req.header('Authorization') || '';

//   const response = await verify(header, c.env.JWT_SECRET)
//   if (response.id){



// })   


export default app
