import React from "react";
import './Buscacep.css'
import {FiSearch} from "react-icons/fi"
function Buscacep() {
    return (
        <div className="Container">
            <h1 className="title"> Buscador CEP</h1>

            <div className="containerInput">
                <input type="text" 
                placeholder="Digite seu cep..."/>
            <button type="button" className="buttonsearch">
                <FiSearch size={25} color="#fff"/>
            </button>
            </div>
            <main className="main">
                <h2>CEP: 79003014</h2>
                
                <span> Rua teste algum</span>
                <span> complemento: algum complemento</span>
                <span> bairro Serra Verde </span>
                <span>Minas Gerais - MG</span>
            </main>
        </div>
    );
}

export default Buscacep;