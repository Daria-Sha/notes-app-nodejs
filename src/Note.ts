import mongoose from 'mongoose';

enum CategoriesNames {
    TASK = 'Task',
    RANDOM_THOUGHT = 'Random Thought',
    IDEA = 'Idea'
}

export interface INote {
    name: string;
    created: string;
    category: CategoriesNames;
    content: string;
    dates?: Date[];
    active: boolean;
}

const Note = new mongoose.Schema<INote>({
    name: {type: String, maxLength: 30, required: true},
    created: {type: String, required: true},
    category: {type: String, enum: CategoriesNames, required: true},
    content: {type: String, minLength: 2, required: true},
    dates: [{type: Date}],
    active: {type: Boolean, required: true}
});

export default mongoose.model('Note', Note);