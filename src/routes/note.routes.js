import {Router} from "express"
import { createNotes , getNotes , deleteNotes , updateNotes} from "../controller/note.controller.js"
const noteRouter = Router()

noteRouter.post("/notes" , createNotes)

noteRouter.get("/notes" , getNotes)

noteRouter.delete("/notes/:id" , deleteNotes)

noteRouter.patch("/notes/:id" , updateNotes)


export default noteRouter