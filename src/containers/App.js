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

  componentDidMount() {
    this.props.PageActions.preload_List();
    this.props.PageActions.preload_Roles();
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { user, page, UserActions, PageActions } = this.props;
    let pageComponent,
        userComponent;

    let list = this.props.page.list;
    let roles = this.props.page.roles;
    let selectedItem = this.props.user.selectedItem;

    if (selectedItem !== null && selectedItem !== undefined && roles !== null && roles !== undefined) {
      userComponent = <User 
                        user={user} 
                        roles={roles} 
                        UserActions={UserActions}
                        PageActions={PageActions} 
                        selectedItem={selectedItem}
                      />
    }

    if (list !== null && list !== undefined && roles !== null && roles !== undefined) {
      pageComponent = <Page 
                        page={page} 
                        list={(list)} 
                        roles={roles} 
                        UserActions={UserActions} 
                        PageActions={PageActions}
                        selectedItem={selectedItem}
                      />
    } else pageComponent = <div className='undefined'>Список не загружен!</div>;

    return (
      <div>
        {userComponent}
        {pageComponent}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user, 
    page: state.page
  }}

const mapDispatchToProps = (dispatch) => {
 return {
    UserActions: bindActionCreators(UserActions, dispatch),
    PageActions: bindActionCreators(PageActions, dispatch)
 }}

export default connect(mapStateToProps, mapDispatchToProps)(App)