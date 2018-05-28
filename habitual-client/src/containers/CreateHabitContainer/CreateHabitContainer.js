import { connect } from 'react-redux'
import { createHabit } from '../../actions'
import CreateHabit from '../../components/CreateHabit/CreateHabit'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  createHabit: habit => {
    dispatch(createHabit(habit))
  }
})

const CreateHabitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateHabit)

export default CreateHabitContainer
