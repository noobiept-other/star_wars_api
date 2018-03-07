import React from 'react';

class Table extends React.Component {
    onElementClick( index, event ) {
        this.props.changeSelected( index );
    }

    render() {
        let peopleList = this.props.people.map(
            (element, index) => <li key={ index } onClick= { this.onElementClick.bind( this, index ) }>{ element.name }</li>
        );

        return (
            <div>
                <ul>{ peopleList }</ul>
            </div>
        );
    }
}

export default Table;
