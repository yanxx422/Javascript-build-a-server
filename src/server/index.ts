import express from 'express'
import routes from '../routes/index'

const app = express()
const port = 3000

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Server is running.')
})
app.listen(port, () => {
  console.log(`server started at localhost: ${port}`)
})
app.use('/api', routes)

export default app
