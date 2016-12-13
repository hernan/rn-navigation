import { connect } from 'react-redux'
import NavRoot from '../components/NavRoot'
import { push, pop } from '../store/actions'

function mapStateToProps (state) {
  return {
    navigation: state.navigation
   }
}

export default connect(
  mapStateToProps,
   {
     pushRoute: (route) => push(route),
     popRoute: () => pop()
   }
)(NavRoot)