import * as S from "./styled.jsx";
import gitflix from "./../../assets/images/gitflix.png";

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
      <img src={gitflix} alt="logo" />
      <h1>
        <span>Git</span>flix
      </h1>
      </S.Logo>
      <a href="#1">Driven</a>
      <a href="#2">Repositories</a>
      <a href="#3">Youtube Channels</a>
      <a href="#4">Pull Requests</a>
    </S.Header>
  );
}
