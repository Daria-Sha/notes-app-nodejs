import { Request, Response } from "express";
import NotesService from "./services/NotesService.js";

class NotesController {
    async create(request: Request, response: Response) {
        try {
            const note = await NotesService.create(request.body);
            response.json(note);
        } catch(err) {
            response.status(500).json(err);
        }
    }
    async remove(request: Request, response: Response) {
        try {
            const note = await NotesService.remove(request.params.id);
            response.json(note);
        } catch(err) {
            response.status(500).json(err);
        }
    }
    async edit(request: Request, response: Response) {
        try {
            const editedNote = await NotesService.edit(request.params.id, request.body);
            response.json(editedNote);
        } catch(err) {
            response.status(500).json(err);
        }
    }
    async retrieve(request: Request, response: Response) {
        try {
            const note = await NotesService.retrieve(request.params.id);
            response.json(note);
        } catch(err) {
            response.status(500).json(err);
        }
    }
    async getAll(request: Request, response: Response) {
        try {
            const notes = await NotesService.getAll();
            response.json(notes);
        } catch(err) {
            response.status(500).json(err);
        }
    }
    async getStats(request: Request, response: Response) {
        try {
            const calculatedStats = await NotesService.getStats();
            response.json(calculatedStats);
        } catch(err) {
            response.status(500).json(err);
        }
    }
}

export default new NotesController();