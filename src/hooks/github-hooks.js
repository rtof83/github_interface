import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred, scrollEvent } = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserRepos, getUserStarred, scrollEvent };
};

export default useGithub;
