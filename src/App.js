import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    constructor( props ) {
        super( props );

        this.nextPage = this.nextPage.bind( this );
        this.previousPage = this.previousPage.bind( this );
        this.state = {
            data: {},
            page: 1,
            loading: false
        };
    }

    async componentDidMount() {
        let page = 1;
        let data = await this.getData( `https://swapi.co/api/people/?page=${ page }` );

        this.setState({
            data: data,
            page: page
        });
    }

    async getData( url ) {
        this.setState({
            loading: true
        });

        let response = await fetch( url );
        let data = await response.json();

        this.setState({
            loading: false
        });

        return data;
    }

    async nextPage() {
        let url = this.state.data.next;

        if ( url ) {
            let data = await this.getData( url );
            this.setState({
                data: data,
                page: this.state.page + 1
            });
        }
    }

    async previousPage() {
        let url = this.state.data.previous;

        if ( url ) {
            let data = await this.getData( url );
            this.setState({
                data: data,
                page: this.state.page - 1
            });
        }
    }

    render() {
        let results = this.state.data.results || [];
        let totalElements = this.state.data.count;

            // calculate the total number of pages available
        let totalPages = 1;
        if ( results.length > 0 ) {
            totalPages = Math.ceil( totalElements / results.length );
        }

        return (
            <div>
                <h1>Results</h1>

                <div>Page { this.state.page } of { totalPages }</div>
                <button onClick= { this.previousPage }>Previous</button>
                <button onClick= { this.nextPage }>Next</button>
                {
                    this.state.loading ?
                    <div>Loading...</div> :
                    <Table people= { results } />
                }
            </div>
        );
    }
}

export default App;
