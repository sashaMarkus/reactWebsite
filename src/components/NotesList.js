import Note from './Note';

function NotesList (props) {
    return (
        <ul className='d-flex flex-wrap'>
            {props.notes.map((note, index) => 
                <Note 
                key={note.id}
                note={note}
                onDelete = {() => props.onDeleteNote(index)}
                onUpdateNote = {updateNote => props.onUpdateNote(updateNote)}
                />
            )}
        </ul>
    )
}

export default NotesList;