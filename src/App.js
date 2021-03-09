import React, { Component } from 'react' 
import MapaBR from './MapaBR'
import { LoadingOutlined } from '@ant-design/icons';

class Brasil extends Component {
  constructor(props){
    super(props)
    this.state = {
      estados: '',
      estadoSelecionado: []
    }
  }

  scriptLoaded() {
    let estadosInfo = window.dados.features
    this.setState({estados: estadosInfo, estadoSelecionado: estadosInfo[27].properties})
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://sigageomarketing.com.br/coronavirus/coronavirus.js";
    script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);
  
  }

  handleState (c) {
    let estados = this.state.estados
    let estado = estados.filter((estado) => estado.properties.estado_geo === c)
    console.log(estado[0])
    this.setState({estadoSelecionado: estado[0].properties})
  }

  render() {
    return this.state.estados !== '' ? <MapaBR estadoClicado={(c) => console.log(c) } /> : <LoadingOutlined />
  }
}

export default Brasil