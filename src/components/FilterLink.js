import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from './Link'

const mapStateToLinkProps = (
  state,
  ownProps
) => ({
  active:
    ownProps.filter ===
    state.visibilityFilter
})

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link)
export default FilterLink
