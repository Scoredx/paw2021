export class Note{

    saveToNote(noteId: number, noteTitle: string, noteText: string, noteBgColor: string, isNotePinned: boolean){
        let newDate = new Date();
        let note: INote = {
            id: noteId,
            title: noteTitle,
            text: noteText,
            bgColor: noteBgColor,
            isPinned: isNotePinned,
            date: newDate.toISOString().split('T')[0]
        }
        return note;
    }
}

export default Note;


