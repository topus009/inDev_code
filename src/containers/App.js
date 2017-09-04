import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as UserActions from '../actions/UserActions';
import * as PageActions from '../actions/PageActions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, page } = this.props
    return (
      <div>
        <User 
          user={user}
        />
        <Page 
          page={page}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user, 
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
    UserActions: bindActionCreators(UserActions, dispatch),
    PageActions: bindActionCreators(PageActions, dispatch)
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)