import { connect } from 'react-redux'
import { updateHabit } from '../../actions'
import HabitList from '../../components/HabitList/HabitList'

const mapStateToProps = state => ({
  habits: state.habits
})

const mapDispatchToProps = dispatch => ({
  onProgress: habit => {
    dispatch(updateHabit(
      Object.assign({}, habit, { progress: habit.progress + 1})
    ))
  }
})

// no mapDispatchToProps as no actions available from UI yet
const HabitListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList)

export default HabitListContainer
