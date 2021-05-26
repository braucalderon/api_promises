import React from 'react';
import axios from 'axios';
import "./getWeather.css";
import { Link } from 'react-router-dom';


class GetWeather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [], // store data here after fetching
            state: 'new york'
        }
    }

    componentDidMount() {
        const key = '8d1bc4cfcdb224fd1a0ad07a0f806b08';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.state}&appid=${key}`;
        // fetch the api by using axios
        axios.get(url)
        .then(response => {
            const res = response.data;
            this.setState({data: res});
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })

    }
   
    render() {

        console.log(this.state.data);

        return(

            <div className="getWeathersettings"> 
                <div>
                    Weather Checking
                </div> 
                <div>
                <Link to= 'state'>State</Link>    
                </div>
                <div>
                <Link to='stateWeather'>Weather</Link>
                </div>
                
            </div>
        )
    }
}
export default GetWeather;