import express from "express"
import noteRouter from "./routes/note.routes.js"
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api" , noteRouter)

export default app