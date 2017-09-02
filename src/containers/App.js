import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VacancyList from '../components/VacancyList';
import * as UserActions from '../actions/UserActions';
import * as PageActions from '../actions/PageActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeVacancy = this.changeVacancy.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.state = {
      clicked: false
    };
  }

  changeVacancy(vacancy){
    vacancy = this.vacancy.value
    this.props.UserActions.changeVacancy(vacancy);
  }

  changeCity(city){
    city = this.city.value
    this.props.UserActions.changeCity(city);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.UserActions.changeVacancy(this.vacancy.value);
    this.props.UserActions.changeCity(this.city.value);
    this.props.UserActions.handleSubmit(this.vacancy.value, this.city.value);
    this.props.PageActions.preload_action(this.city.value);
    this.setState({clicked: true});
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.page.preload_city && this.state.clicked) {
        this.setState({clicked: false});
        this.props.PageActions.getList(this.vacancy.value, nextProps.page.preload_city);
      }
  }

  render() {
    const { page/*, user */} = this.props
    return (
      <div>
        <form>
          <input
              className='vacancy'
              type='text'
              placeholder='Введите вакансию...'
              ref={(e) => this.vacancy = e}
              defaultValue='программист'
              onChange={this.changeVacancy}
            />
          <input
              className='city'
              type='text'
              placeholder='Введите город...'
              ref={(e) => this.city = e}
              defaultValue='екатеринбург'
              onChange={this.changeCity}
            />
          <button className='btn' onClick={this.handleSubmit}>НАЙТИ
          </button>
        </form>
        <VacancyList 
        list={page.list}
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