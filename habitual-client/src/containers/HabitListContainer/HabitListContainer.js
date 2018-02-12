import { connect } from 'react-redux'
import HabitList from '../../components/HabitList/HabitList'

const mapStateToProps = state => {
  return {
    habits: state.habits
  }
}

// no mapDispatchToProps as no actions available from UI yet
const HabitListContainer = connect(mapStateToProps)(HabitList)

export default HabitListContainer
