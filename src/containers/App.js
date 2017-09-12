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
      this.state = {
        body_width: 0
      }
    }
  
  componentDidMount() {
    this.props.PageActions.preload_List();
    this.props.PageActions.preload_Roles();

  }

  componentWillReceiveProps(nextProps) {
    // ФИКС СКРОЛЛА - чтобы если длинна списка меняется и пропадает скролл, не происходило изменение положения App по горизонтали
    let scroll_width = document.body.clientWidth - this.state.body_width;
    if (scroll_width > 0) {
      this.setState({body_width: scroll_width})
    } else this.setState({body_width: document.body.clientWidth})
  }

  render() {
    const { user, page, UserActions, PageActions } = this.props;

    let list = this.props.page.filtered_list.length > 0 ? this.props.page.filtered_list : this.props.page.list;
    let roles = this.props.page.roles;
    let selectedItem = this.props.user.selectedItem;

    let pageComponent,
        userComponent;

    // Если персонаж не выбран, верхнее окно редактирование будет скрыто
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