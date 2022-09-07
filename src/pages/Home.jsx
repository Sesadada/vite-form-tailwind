import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filmsState, viewAtoms } from '../../atom';
import Menu from '../../Menu';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div className="bg-blue-200 h-screen">
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;

/*
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filmsState, viewAtoms } from '../../atom';
import Menu from '../../Menu';
import NavBar from '../components/NavBar';

const Home = () => {
  const [films, setFilms] = useRecoilState(filmsState);
  const w = useRecoilValue(viewAtoms);

  useEffect(() => {
    const getInfo = async () => {
      const url = 'https://swapi.dev/api/films/';
      const res = await fetch(url);
      const body = await res.json();
      setFilms(body.results);
    };
    getInfo();
  }, [setFilms]);

  return (
    <div className="bg-blue-200 h-screen">
      <NavBar />
      <h1 className="uppercase">Hello Star Wars!!</h1>
      <Menu />
      <div>
        {films &&
          films.map((film) => (
            <div key={film.episode_id}>
              <h2>{film.title}</h2>

              <p>{film[w]}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;

*/
