import React from "react";
import styled from "@emotion/styled";
import "animate.css";

import up from "../img/arrow-up.png";
import down from "../img/arrow-down.png";
import curve from "../img/curve.png";
import actual from "../img/actual.png";

const Resultado = styled.div`
  color: #fff;
  font-family: "Helvetica";
`;

const Info = styled.p`
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }

`;

const Img = styled.img`
  margin: auto 5px;
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  console.log(resultado);
  return (
    <Resultado className="animate__animated animate__fadeIn">
      <Precio>
        El precio es:  <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        <Img src={up} width={20} alt={up} />
        El precio más alto del día:  <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        <Img src={down} width={20} alt={down} />
        El precio más bajo del día:  <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        <Img src={curve} width={20} alt={curve} />
        Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        <Img src={actual} width={20} alt={actual} />Última Actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </Resultado>
  );
};

export default Cotizacion;
