import React from "react";
import './Buscacep.css'
function Buscacep() {
    return (
        <div className="Container">
            <h1 className="title"> Buscador de Cep</h1>

            <div className="containerInput">
                <input type="text" 
                placeholder="Digite seu cep..."/>
                
            </div>
        </div>
    );
}

export default Buscacep;