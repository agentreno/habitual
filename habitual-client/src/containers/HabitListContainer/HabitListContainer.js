import { connect } from 'react-redux'
import { increaseProgress } from '../../actions'
import HabitList from '../../components/HabitList/HabitList'

const mapStateToProps = state => ({
  habits: state.habits
})

const mapDispatchToProps = dispatch => ({
  onProgress: id => {
    dispatch(increaseProgress(id))
  }
})

// no mapDispatchToProps as no actions available from UI yet
const HabitListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList)

export default HabitListContainer
