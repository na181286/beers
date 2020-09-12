import * as React from 'react';
import { BeerItem } from '../../types';

export interface  IBeerProps {
  beer: BeerItem;
}

const Beer = ({ beer }: IBeerProps) => {
  const [opened, setState] = React.useState<boolean>(false);

  const onClickHandler = () => {
    setState(!opened);
    if (!opened) {
      document.body.setAttribute('style', 'overflow: hidden');
    } else {
      document.body.removeAttribute('style');
    }
  };
  const themeOption = beer.ibu ? beer.ibu.toString().split('')[0] : '0';
  const classname = 'bg' + themeOption;
  const description = opened ? (
  <p className="Beer-Description">{beer.description}</p>
  ) : null;
  const close =  opened ? (<span className="Beer-Close"/>) : null;

  return (
    <div className={!opened ? classname + ' Beer' : classname + ' Beer Opened'} onClick={onClickHandler}>
      {close}
      <div className="image-container">
        <img src={beer.image_url} alt="" />
      </div>
      <div className="Beer-information">
      <p className="Beer-IBU">IBU: {beer.ibu}</p>
      <p className="Beer-Title">{beer.name}</p>
      {description}
      </div>
    </div>
  );
};

export default Beer;
