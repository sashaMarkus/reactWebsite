import React from "react";
import ReactModal from "react-modal";
import Form from "./NotesList";

ReactModal.setAppElement('#root');

class Note extends React.Component {
  // props = {note: {id: ..., text: ..., date: ..., title: ...}}
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOnUpdateNote(updatedNote) {
    this.props.onUpdateNote(updatedNote);
    this.setState({ showModal: false });
  }

  render() {
    const { note } = this.props;
    const { text, date, title } = note;
    const { showModal } = this.state;
    const spanStyle = {
      fontSize: ".8em",
    };
    const fixedDate = new Date(date);
    return (
      <>
        <div onClick={() => this.setState({showModal: true})} className="noteCard d-flex flex-column mt-5 mr-3 shadow-sm p-3 mb-5 bg-white rounded">
          <h5 className="align-self-center">
            <u>{title}</u>
          </h5>
          <p>{text}</p>
          <footer style={spanStyle}>{fixedDate.toString().slice(0, 24)}</footer>
          <br />
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={this.props.onDelete}
          >
            Delete
          </button>
        </div>
        <ReactModal
          isOpen = {showModal}
          onRequestClose = {() => this.setState({showModal: false})}
        >
          <Form
            note = {this.props.note}
            onUpdateNote = {updatedNote => this.handleOnUpdateNote(updatedNote)}
          />
        </ReactModal>
      </>
    );
  }
}

export default Note;
