import React, { Component } from 'react';
import List from './List';
import Search from './Search';
import Person from './Person';

class App extends Component {
    constructor( props ) {
        super( props );

        this.nextPage = this.nextPage.bind( this );
        this.previousPage = this.previousPage.bind( this );
        this.searchByName = this.searchByName.bind( this );
        this.changeSelectedElement = this.changeSelectedElement.bind( this );
        this.state = {
            data: {},
            page: 1,
            loading: false,
            selectedPosition: 0
        };
    }

    async componentDidMount() {
            // when searching with an empty string, it gives a list with all the characters
        await this.searchByName( '' );
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
                page: this.state.page + 1,
                selectedPosition: 0
            });
        }
    }

    async previousPage() {
        let url = this.state.data.previous;

        if ( url ) {
            let data = await this.getData( url );
            this.setState({
                data: data,
                page: this.state.page - 1,
                selectedPosition: 0
            });
        }
    }

    async searchByName( query ) {
        let data = await this.getData( `https://swapi.co/api/people/?search=${ query }`);

        this.setState({
            data: data,
            page: 1,
            selectedPosition: 0
        });
    }

    changeSelectedElement( position ) {
        this.setState({
            selectedPosition: position
        });
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

                <Search search= { this.searchByName } />

                <div>Page { this.state.page } of { totalPages }</div>
                <button onClick= { this.previousPage }>Previous</button>
                <button onClick= { this.nextPage }>Next</button>
                {
                    this.state.loading ?
                    <div>Loading...</div> :
                    <div id="Content">
                        <List
                            people= { results }
                            changeSelected= { this.changeSelectedElement }
                            selectedPosition= { this.state.selectedPosition }
                        />
                        <Person info= { results[ this.state.selectedPosition ] } />
                    </div>
                }
            </div>
        );
    }
}

export default App;
