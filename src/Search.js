import React from 'react';

class Search extends React.Component {
    constructor( props ) {
        super( props );

        this.onKeyPress = this.onKeyPress.bind( this );
        this.onClick = this.onClick.bind( this );
    }

    onKeyPress( event ) {
        if ( event.key === 'Enter' ) {
            this.searchUserInput();
        }
    }

    onClick( event ) {
        this.searchUserInput();
    }

    searchUserInput() {
        this.props.search( this.textInput.value );
    }

    render() {
        return (
            <div id="Search">
                <input
                    type="text"
                    ref={ (input) => { this.textInput = input; } }
                    placeholder="Search by name..."
                    onKeyPress={ this.onKeyPress }
                />
                <button onClick= { this.onClick }>Search</button>
            </div>
        );
    }
}

export default Search;
