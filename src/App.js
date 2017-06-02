import React, { Component } from 'react';
import './App.css';
// library to make HTTP requests to API
import axios from 'axios'
// import methods to integrate redux into app for handling state
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// importing action creator to make network requests to API
import { fetchWeather } from './actions';
import WeatherList from './containers/WeatherList';

// Token for API and configuration to set TOKEN in HEADER whenever request is made
const AUTH_TOKEN = 'eImfjtJxjXkeSGYVwZSvqDxnikJpVpRK'
// axios.defaults.baseURL = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00040232&startdate=2017-03-01&enddate=2017-05-29';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
var config = {
  headers: {Authorization: AUTH_TOKEN, withCredentials: true}
};

const url = 'https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=GHCND:USC00040232&startdate=2017-03-01&enddate=2017-05-29'

class App extends Component {
  // initializing state by calling App constructor and inheriting from props
  constructor(props) {
    super(props);

    // set initial state to null (before network request to API)
    this.state = { initialData: null }
  }

  fetchInitialData() {

      return axios.get(url, { headers: { Authorization: AUTH_TOKEN } })
        .then(function(response) {
          return response.data.results[0]
      });
    } 

  // Before component starts to render, make network request for API data
  // set state of 'initialData' to the returned data
  componentWillMount() {
    this.props.fetchWeather();
  }


  render() {
    console.log(this.props);
    return (
      <div>
        Hello World
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}


function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
