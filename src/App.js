import React, { Component } from 'react';

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
        let peopleList = this.state.people.map(
            (element, index) => <li key={ index }>{ element }</li>
        );

        return (
            <div>
                <div>People</div>
                <ul>{ peopleList }</ul>
            </div>
        );
    }
}

export default App;
