import React from "react";
import Form from "./components/Form";
import NotesList from "./components/NotesList";
import "./App.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  addNewNote(note) {
    console.log(note);
    this.setState((prevState) => {
      return { notes: [...prevState.notes, note] };
    });
  }

  deleteNote(index) {
    let deleteCheck = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (deleteCheck) {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes.slice(0, index),
            ...prevState.notes.slice(index + 1),
          ],
        };
      });
    }
  }

  handleUpdateNote(updatedNote) {
    this.setState((prevState) => {
      const newNotes = prevState.notes.map(note => {
        if(note.id === updatedNote.id) {
          return updatedNote;
        }
        return note;
      })
      return {notes: newNotes};
    })
  }

  render() {
    return (
      <div className="container p-3">
        <Form onAddNote={(note) => this.addNewNote(note)} />
        <NotesList
          notes={this.state.notes}
          onDeleteNote={(index) => this.deleteNote(index)}
          onUpdateNote = {updatedNote => this.handleUpdateNote(updatedNote)}
        />
      </div>
    );
  }
}

export default App;
