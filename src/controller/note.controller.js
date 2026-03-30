import noteModel from "../models/note.model.js"


export async function createNotes(req , res){
    const {title , description} = req.body

    const note = await noteModel.create({
        title , 
        description
    })

    res.status(201).json({
        message : "notes created successfully",
        note
    })
}

export async function getNotes(req , res){
    const notes = await noteModel.find()

    res.status(200).json({
        message : "notes fetched successfully",
        notes
    })
}

export async function deleteNotes(req , res) {
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "notes deleted successfully"
    })
}

export async function updateNotes(req , res) {
    const id = req.params.id

    const {description} = req.body

    await noteModel.findByIdAndUpdate(id , {description})

    res.status(200).json({
        message : "notes updated successfully"
    })

}

