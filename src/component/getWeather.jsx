import React from 'react';
import axios from 'axios';
import "./getWeather.css";


class GetWeather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [] // store data here after fetching
        }
    }

    componentDidMount() {
        // fetch the api by using axios
    }

    render() {

        return(
            <div className="getWeathersettings"> Checking </div>
        )
    }
}
export default GetWeather;