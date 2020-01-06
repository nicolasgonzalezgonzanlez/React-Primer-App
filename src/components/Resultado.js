import React,{Component} from 'react'
import {Transition, CSSTransition} from 'react-transition-group'
class Resultado extends Component {
    mensaje = () => {
        const resultado = this.props.resultado
        if (!resultado) return null
        return 'El total es de: $'
    }
    render() {
        const resultado = this.props.resultado
        return (
            <div className="gran-total">
                { this.mensaje() }
                <Transition component="span" className="resultado">
                    <CSSTransition
                        className="resultado"
                        key={resultado}
                        timeout={{ enter: 500, exit: 500 }}
                    >
                        <span>{resultado}</span>
                    </CSSTransition>
                </Transition>
            </div>
        )
    }
}

export default Resultado