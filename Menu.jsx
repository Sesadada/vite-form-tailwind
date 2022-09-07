import React from 'react';
import { useRecoilState } from 'recoil';
import { viewAtoms } from './atom';

const Menu = () => {
  const viewOptions = ['director', 'opening_crawl', 'producer'];

  const [view, setView] = useRecoilState(viewAtoms);
  return (
    <nav>
      {viewOptions.map((v) => (
        <button type="button" key={v} onClick={() => setView(v)}>
          {v}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
