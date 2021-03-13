import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    if (this.props.note) {
      const updatedNote = {
        ...this.props.note,
        text: this.state.text,
      };
      this.props.onUpdateNote(updatedNote);
    } else {
      const note = {
        id: Date.now(),
        text: this.state.text,
        date: Date.now(),
        title: this.state.title,
      };
      this.props.onAddNote(note);
      this.setState({ text: "", title: "" });
    }
  }

  handleTextChange(txtValue) {
    this.setState({
      text: txtValue,
    });
  }

  handleTitleChange(titleValue) {
    this.setState({
      title: titleValue,
    });
  }

  render() {
    return (
      <form
        className="d-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded"
        id="txtForm"
        onSubmit={(event) => this.handleFormSubmit(event)}
      >
        <div className="d-flex flex-column">
          <h1 className="d-flex align-self-center">Notes App</h1>
          <input
            className="form-control mb-1"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={(event) => this.handleTitleChange(event.target.value)}
          />
          <textarea
            className="form-control"
            rows="10"
            cols="50"
            value={this.state.text}
            placeholder="Enter you're note...."
            onChange={(event) => this.handleTextChange(event.target.value)}
          ></textarea>
          <br />
          <button
            type="submit"
            className="todo-button btn btn-primary align-self-center"
          >
            {this.props.note ? "update note" : "Add"}
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
