import React, { useEffect, useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser, scrollEvent } = useGithub();
  const [ usernameForSearch, setUsernameForSearch ] = useState();
  const [ width, setWidth ] = useState('600px');
  const [ height, setHeight ] = useState('auto');

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) submitGetUser();
  };

  useEffect(() => {
    if (scrollEvent) {
      setWidth('100%');
      setHeight('200px');
    } else {
      setWidth('600px');
      setHeight('auto');
    }
  }, [scrollEvent])

  return (
    <S.Wrapper style={{maxWidth: width, height: height}} id="inputHeader">
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
