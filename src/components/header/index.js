import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  const [ usernameForSearch, setUsernameForSearch ] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) submitGetUser();
  };

  return (
    <S.Wrapper id="header">
      <header>GitHub Interface</header>

      <div>
        <input
          type="text"
          placeholder="Digite o usuário"
          onChange={(event) => setUsernameForSearch(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </div>
    </S.Wrapper>
  );
};

export default Header;
