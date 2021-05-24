import React from 'react';
import axios from 'axios';

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
            <div> Checking </div>
        )
    }
}
export default GetWeather;