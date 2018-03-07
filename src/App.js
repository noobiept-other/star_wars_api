import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    constructor( props ) {
        super( props );

        this.nextPage = this.nextPage.bind( this );
        this.previousPage = this.previousPage.bind( this );
        this.state = {
            data: {}
        };
    }

    async componentDidMount() {
        let data = await this.getPeople( this.state.page );

        this.setState({
            data: data
        })
    }

    async getPeople( page= 1 ) {
        const url = `https://swapi.co/api/people/?page=${ page }`;
        let response = await fetch( url );
        let data = await response.json();

        return data;
    }

    async getData( url ) {
        let response = await fetch( url );
        let data = await response.json();

        return data;
    }

    async nextPage() {
        let url = this.state.data.next;

        if ( url ) {
            let data = await this.getData( url );
            this.setState({
                data: data
            });
        }
    }

    async previousPage() {
        let url = this.state.data.previous;

        if ( url ) {
            let data = await this.getData( url );
            this.setState({
                data: data
            });
        }
    }

    render() {
        let results = this.state.data.results || [];

        return (
            <div>
                <Table people= { results } />
                <button onClick= { this.previousPage }>Previous</button>
                <button onClick= { this.nextPage }>Next</button>
            </div>
        );
    }
}

export default App;
