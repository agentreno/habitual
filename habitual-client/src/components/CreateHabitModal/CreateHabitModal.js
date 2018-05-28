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
    event.preventDefault()
    this.props.submit({
      name: this.name.value,
      description: this.description.value,
      frequency: this.frequency.value,
    })
    this.props.close()
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
            <input type="text" name="name" ref={name => this.name = name} />
          </label>

          <label>
            Description:
            <input type="text" name="description" ref={desc => this.description = desc} />
          </label>

          <label>
            Frequency:
            <input type="text" name="frequency" ref={freq => this.frequency = freq} />
          </label>

          <input type="submit" value="Submit" />

        </form>
      </Modal>
    )
  }
}

export default CreateHabitModal
