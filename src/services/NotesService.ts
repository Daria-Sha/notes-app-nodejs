import Note, { INote } from "../Note.js";
import { countStatistics } from "../helpers/helpers.js";

class NotesService {
    async create(note: INote) {
        const createdNote = await Note.create(note);
        return createdNote;
    }
    async remove(id: string) {
        const note = await Note.findByIdAndDelete(id);
        return note;
    }
    async edit(id: string, note: INote) {
        const editedNote = await Note.findByIdAndUpdate(id, note, {new: true});
        return editedNote;
    }
    async retrieve(id: string) {
        const note = await Note.findById(id);
        return note;
    }
    async getAll() {
        const notes = await Note.find();
        return notes;
    }
    async getStats() {
        const notes = await Note.find();
        return countStatistics(notes);        
    }
}

export default new NotesService();