import React from 'react';
import axios from 'axios';

class GetWeather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [], // store data here after fetching
            state: 'new york'
        }
    }

    componentDidMount() {
        const key = '';
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
            <div>
                <div></div>
            </div>
        )
    }
}
export default GetWeather;