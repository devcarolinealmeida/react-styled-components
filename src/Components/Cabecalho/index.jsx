import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { firstColor } from "../UI/Variaveis";

const StyledHeader = styled.nav`
  background-color: ${firstColor};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`



const Cabecalho = () => {
  return (
    <StyledHeader>
      <img className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Sair
        </a>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
