import React from 'react';

class Search extends React.Component {
    constructor( props ) {
        super( props );

        this.onKeyPress = this.onKeyPress.bind( this );
    }

    onKeyPress( event ) {
        if ( event.key === 'Enter' ) {
            this.props.search( event.target.value );
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search by name..." onKeyPress= { this.onKeyPress } />
            </div>
        );
    }
}

export default Search;
