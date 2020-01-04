import React, { Component } from "react";
import "./CardMark.scss";

export default class CardMark extends Component {
  constructor() {
    super();
    this.state = {
      maxNota: 0,
      changeMaxNota: 0,
      nota: null,
      name: "",
      resultado: 0,
      arrNames: []
    };
    this.alumno = {
      maxNota: 0,
      changeMaxNota: 0,
      nota: 0,
      name: "",
      resultado: 0
    };
  }
  maxNota(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      maxNota: e.target.value
    });
  }
  changeMaxNota(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      changeMaxNota: e.target.value
    });
  }
  name(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      name: e.target.value
    });
  }
  nota(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      nota: e.target.value
    });
  }
  res() {
    const res =
      (this.state.changeMaxNota * this.state.nota) / this.state.maxNota;
    this.state.resultado = res;
    return res;
  }
  addName() {
    let arr2 = [...this.state.arrNames];
    arr2.push(this.alumno);
    this.setState({
      ...this.state,
      arrNames: arr2
    });
  }
  cleanForm(){
      let n = null
      this.setState({
          ...this.state,
          name: "",
          nota: 0
      })
  }
  componentDidUpdate() {
    this.res();
    this.alumno = {
      maxNota: this.state.maxNota,
      changeMaxNota: this.state.changeMaxNota,
      nota: this.state.nota,
      name: this.state.name,
      resultado: this.state.resultado
    };
  }
  render() {
    const { resultado, changeMaxNota, arrNames, name, nota } = this.state;
    console.log(arrNames);
    return (
      <div className="container">
        <div className="box cardy">
          <div className="box cardy-b">
            <input
              type="number"
              className="input m-right is-primary"
              name="maxNota"
              placeholder="Max. Nota Examen"
              onChange={e => this.maxNota(e)}
            />
            <input
              type="number"
              className="input is-primary"
              name="changeMaxNota"
              placeholder="Max. Nota Conver."
              onChange={e => this.changeMaxNota(e)}
            />
          </div>
          <div className="box cardy-b">
            <input
              type="text"
              name="name"
              className="input m-right is-primary"
              placeholder="Nombre Alumno"
              value = {name}
              onChange={e => this.name(e)}
            />
            <input
              type="number"
              name="nota"
              className="input m-right is-primary"
              placeholder="Nota Examen Alumno"
              value = {nota}
              onChange={e => this.nota(e)}
            />
            <button className="button m-right is-primary" onClick={() => this.addName()}>ADD</button>
            <button className="button is-warning" onClick={() => this.cleanForm()}>Clean</button>
          </div>
          <div>
            <h3 className="is-size-2">{name} --> {this.res()} / {changeMaxNota}</h3>
          </div>
        </div>
        <div className="box">
          {arrNames.map((alumno, idx) => (
            <div key={idx}>
              <p>
                {alumno.name} ha sacado un {alumno.resultado}/{changeMaxNota}{" "}
                nota examen: {alumno.nota}/{alumno.maxNota}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
