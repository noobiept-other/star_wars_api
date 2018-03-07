import React from 'react';

class Table extends React.Component {
    render() {
        let peopleList = this.props.people.map(
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

export default Table;
