import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const temps = cityData.list.map((weather) => weather.main.temp);

		return (
			<tr>
				<td><Chart color="green" data={temps} units="K"/></td>
			</tr>
		);
	}

	render() {
		console.log(this.props.weather)
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Antioch</th>
						<th>Temperature (K)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {
	return { weather }
}

export default connect(mapStateToProps)(WeatherList);
