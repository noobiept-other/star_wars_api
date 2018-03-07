import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
    }

    async componentDidMount() {
        let data = await this.getPeople();
        let names = data.results.map( (element) => element.name );

        this.setState({
            people: names
        })
    }

    async getPeople( page= 1 ) {
        const url = `https://swapi.co/api/people/?page=${ page }`;
        let response = await fetch( url );
        let data = await response.json();

        return data;
    }

    render() {
        return (
            <div>
                <Table people= { this.state.people } />
            </div>
        );
    }
}

export default App;
