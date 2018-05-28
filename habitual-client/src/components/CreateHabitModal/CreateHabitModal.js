import React, { Component } from 'react'
import Modal from 'react-modal'
import './CreateHabitModal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
}

class CreateHabitModal extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    console.log(event)
  }

  render() {
    return (
      <Modal
        isOpen={this.props.show}
        style={customStyles}
      >
        <form onSubmit={this.handleSubmit}>

          <label>
            Name:
            <input type="text" name="name" />
          </label>

          <label>
            Description:
            <input type="text" name="description" />
          </label>

          <label>
            Frequency:
            <input type="text" name="description" />
          </label>

          <input type="submit" value="Submit" />

        </form>
      </Modal>
    )
  }
}

export default CreateHabitModal
