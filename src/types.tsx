type Volume = {
  value: number;
  unit: string;
};

type MashTemp = {
  temp: Volume;
  duration: number;
};
type Fermentation = {
  temp: Volume;
};
type Method = {
  mash_temp: [MashTemp];
  fermentation: Fermentation;
  twist: null;
};

type Ingredients = {
  malt: [Malt];
  hops: [Hop];
  yeast: string;
};
type Malt = {
  name: string;
  amount: Volume;
};
type Hop = {
  name: string;
  amount: Volume;
  add: string;
  attribute: string;
};
export type BeerItem = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: [string];
  brewers_tips: string;
  contributed_by: string;
};
