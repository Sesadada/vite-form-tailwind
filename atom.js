import { atom } from 'recoil';

export const filmsState = atom({
  key: 'films',
  default: [],
});

export const viewAtoms = atom({
  key: 'view',
  default: 'planets',
});
