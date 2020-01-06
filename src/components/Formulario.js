import React,{Component} from 'react'

class Formulario extends Component {
    marcaRef = React.createRef()
    yearRef = React.createRef()
    planBasicoRef = React.createRef()
    planCompletoRef = React.createRef()
    handle = (e) => {
        e.preventDefault()
        // ckequea si el plan basico o el plan completo esta elegido
        const plan = this.planBasicoRef.current.cheched ? 'basico': 'completo'
        // crea un objeto y se le asigna los valores
        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }
        // comunico la informacion con el padre
        this.props.cotizarSeguro(infoAuto)
    }
    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.handle}>
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.marcaRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Año</label>
                    <select  name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input ref={this.planBasicoRef} type="radio" name="plan" value="basico"/> Básico
                    <input ref={this.planCompletoRef} type="radio" name="plan" value="completo"/> Completo
                </div>
                <button type="submit" className="boton">Cotizar</button>
            </form>
        )
    }
}

export default Formulario
