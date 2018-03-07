import React from 'react';

class Table extends React.Component {
    onElementClick( index, event ) {
        this.props.changeSelected( index );
    }

    render() {
        let peopleList = this.props.people.map(
            (element, index) => {
                let className = null;
                if ( index === this.props.selectedPosition ) {
                    className = 'selected';
                }

                return <li key={ index } onClick= { this.onElementClick.bind( this, index ) } className= { className }>{ element.name }</li>
            }
        );

        return (
            <div>
                <ul id="PeopleList">{ peopleList }</ul>
            </div>
        );
    }
}

export default Table;
