import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
  const { githubState, scrollEvent } = useGithub();
  const [ image, setImage ] = useState('200px');
  const [ info, setInfo ] = useState(true);

  useEffect(() => {
    if (scrollEvent) {
      setImage('100px');
      setInfo(false);
    } else {
      setImage('200px');
      setInfo(true);
    }
  }, [scrollEvent])

  return (
    <S.Wrapper>
      <S.WrapperImage style={{width: image}} src={githubState.user.avatar} alt="Avatar of user" />
      {info ?
      <S.WrapperInfoUser id="infoUser">
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUserGeneric>

          <S.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </S.WrapperUserGeneric>

          <S.WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </S.WrapperUserGeneric>
          
          <S.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
      : null}
    </S.Wrapper>
  );
};

export default Profile;
