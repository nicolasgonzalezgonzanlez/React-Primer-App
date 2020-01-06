import React,{Component} from 'react'
import Header from './Header'
import Formulario from './Formulario'
import Resumen from './Resumen'
import Resultado from './Resultado'
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper'
class App extends Component {
    state = {
        resultado: '',
        datos: {}
    }
    cotizarSeguro = (datos) => {
        const { marca, plan, year } = datos
        let resultado  = 2000
        const diferencia = obtenerDiferenciaAnio(year)
        resultado -= ((diferencia * 3) * resultado ) / 100
        resultado = calcularMarca(marca) * resultado
        let incrementoPlan = obtenerPlan(plan)
        resultado = incrementoPlan * resultado.toFixed(2)
        this.setState({
            resultado: resultado,
            datos
        })
    }
    render() {
        return (
            <div className="contenedor">
                <Header 
                    titulo = 'Cotizador de seguros de autos'
                />
                <div className="contenedor-formulario">
                    <Formulario 
                        cotizarSeguro={this.cotizarSeguro}
                    />
                    <Resumen 
                        datos = {this.state.datos}
                    />
                    <Resultado
                        resultado  = {this.state.resultado}
                    />
                </div>
            </div>
        );
    }
}

export default App