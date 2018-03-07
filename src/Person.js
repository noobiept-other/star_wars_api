import React from 'react';

class Person extends React.Component {
    render() {
        let info = this.props.info;

        if ( !info ) {
            return null;
        }

        return (
            <table>
                <tbody>
                    <tr>
                        <td>height</td>
                        <td>{ info.height }</td>
                    </tr>
                    <tr>
                        <td>mass</td>
                        <td>{ info.mass }</td>
                    </tr>
                    <tr>
                        <td>hair color</td>
                        <td>{ info.hair_color }</td>
                    </tr>
                    <tr>
                        <td>skin color</td>
                        <td>{ info.skin_color }</td>
                    </tr>
                    <tr>
                        <td>eye color</td>
                        <td>{ info.eye_color }</td>
                    </tr>
                    <tr>
                        <td>birth year</td>
                        <td>{ info.birth_year }</td>
                    </tr>
                    <tr>
                        <td>gender</td>
                        <td>{ info.gender }</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Person;