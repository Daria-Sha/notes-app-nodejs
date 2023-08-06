import { INote } from "../Note";

interface ICalculatedStats {
    [index: string]: {
        activeNumber: number,
        archivedNumber: number
    }
}

export function countStatistics(notes: INote[]) {
    const calculatedStats: ICalculatedStats = {};
    notes.forEach(note => {
        if(!calculatedStats[note.category]) {
            calculatedStats[note.category] = {
                activeNumber: 0,
                archivedNumber: 0
            };
        }
        if(note.active) {
            calculatedStats[note.category]['activeNumber']++;
        } else {
            calculatedStats[note.category]['archivedNumber']++;
        }
    });
    return calculatedStats;
}