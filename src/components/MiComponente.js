import React, {Component} from 'react'

class MiComponente extends Component {

    render(){
        let lenguajes = {
            nombre: 'Frameworks y librerias Javascript',
            frameworks: ['Angular','Vue.js','Ember.js','Meteor.js'],
            librerias: ['React.js','Backbone','Jquery'],
            id: 1 
        };

        return (
            <React.Fragment>
                <h1>{'id:' + lenguajes.id}</h1>
                <h2>{lenguajes.nombre}</h2>
                <h3>Frameworks</h3>
                {
                    lenguajes.frameworks.map((framework,i)=> {
                        return (
                            <li key={i}>
                                {framework}
                            </li>
                        )
                    })
                }
                <h3>librerias</h3>
                {
                    lenguajes.librerias.map((libreria,i)=> {
                        return (
                            <li key={i}>
                                {libreria}
                            </li>
                        )
                    })
                }
            </React.Fragment>
        );
    }
}

export default MiComponente;