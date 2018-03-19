import React, { Component } from 'react'
import CreateHabitModal from '../CreateHabitModal/CreateHabitModal'

class CreateHabit extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
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
        />
      </div>
    )
  }
}

export default CreateHabit
