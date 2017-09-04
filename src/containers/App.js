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
    this.props.PageActions.preload_action();
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { user, page } = this.props;
    let pageComponent;
    let list = this.props.page.list;

    if (list !== null && list !== undefined) {
      pageComponent = <Page page={page} list={(list)}/>
    }
    else pageComponent = <div className='undefined'>Список не загружен!</div>;

    return (
      <div>
        <User 
          user={user}
          roles={roles}
        />
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

let roles = 
[{
  "id": 1,
  "name": "Рядовой"
}, {
  "id": 2,
  "name": "Сержант"
}, {
  "id": 3,
  "name": "Капитан"
}, {
  "id": 4,
  "name": "Полковник"
}]