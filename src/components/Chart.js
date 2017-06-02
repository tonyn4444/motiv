import React from 'react';
// utility library to calculate average on temperatures
import _ from 'lodash';
// JS library to graph data retrieved from API
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// inheriting props from parent component 'WeatherList'
export default (props) => {
	// Taking average of data
	function average(data) {
		return _.round(_.sum(data)/data.length)
	}

	return (
		<div>
			<Sparklines width={180} height={120} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	)
}