import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import * as S from "./styled.jsx";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
  }, [navigate]);

  return (
    <>
    <Header/>
    <S.main>
      <h1 id= "1">Driven</h1>
      <S.especial>
        <p>Ensinamos você a Programar e te preparamos para ocupar as vagas mais concorridas do mercado de tecnologia</p>
      </S.especial>
      <h1 id= "2">Repositories</h1>
      <S.roads>
      <S.road>
      </S.road>
      </S.roads>
      <h1 id= "3">Youtube Channels</h1>
      <S.roads>

      </S.roads>

      <h1 id= "4">Pull Requests</h1>
      <S.roads>

      </S.roads>
    </S.main>
    </>

  );
}
