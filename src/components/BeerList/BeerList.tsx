import * as React from 'react';
import Beer from '../Beer/Beer';
import { BeerItem } from '../../types';

export interface IBeerListProps {
  beers: BeerItem[];
}

export const BeerList = ({ beers }: IBeerListProps) => {
  return (
      <div className="BeerList">
         {beers && beers.map((item) => <Beer key={item.id} beer={item} />)}
      </div>
  );
};

export default BeerList;
