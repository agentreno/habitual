import { connect } from 'react-redux'
import { createActivity } from '../../actions'
import HabitList from '../../components/HabitList/HabitList'

const mapStateToProps = state => ({
  habits: state.habits
})

const mapDispatchToProps = dispatch => ({
  onProgress: habit => {
    dispatch(createActivity(habit))
  }
})

const HabitListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList)

export default HabitListContainer
