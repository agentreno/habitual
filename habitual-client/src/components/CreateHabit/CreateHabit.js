import React, { Component } from 'react'
import CreateHabitModal from '../CreateHabitModal/CreateHabitModal'

class CreateHabit extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="CreateHabit">
        <button onClick={this.toggleModal.bind(this)}>Add Habit</button>
        <CreateHabitModal
          show={this.state.isOpen}
          close={this.toggleModal}
          submit={this.props.createHabit}
        />
      </div>
    )
  }
}

export default CreateHabit
