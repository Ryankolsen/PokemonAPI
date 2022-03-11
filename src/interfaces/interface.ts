export interface IPokemon {
  abilities: Abilities[];
  base_experience?: number;
  forms?: Forms[];
  game_indices?: GameIndices;
  height?: number;
  held_items?: string[];
  id?: number;
  is_default?: boolean;
  location_area_encounters?: any;
  moves: Moves[];
  name: string;
  order?: number;
  past_types?: string[];
  species?: Species;
  sprites?: Sprites;
  stats?: Stats[];
  types?: Types[];
  weight?: number;
}
// interface AbilityOne {
//   ability: Ability;
//   is_hidden: boolean;
//   slot: number;
// }
// interface AbilityTwo {
//   ability: Ability;
//   is_hidden: boolean;
//   slot: number;
// }

// interface Ability {
//   name: string;
//   url: string;
// }

export interface Abilities {
  [index: number]: [ability: string];
}

export interface Types {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: any;
}

export interface Stat {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
export interface Moves {
  move: Move;
  version_group_details: any;
}

export interface Species {
  name: string;
  url: string;
}

export interface Move {
  name: string;
  url: string;
}

export interface GameIndices {
  game_index: number;
  version: Version;
}

export interface Version {
  name: string;
  url: string;
}

export interface Forms {
  name: string;
  url: string;
}
