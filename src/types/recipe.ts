export interface RecipeVariant {
  rarity: 'normal' | 'common' | 'uncommon' | 'rare' | 'legendary' | 'mythical' | 'divine' | 'prismatic';
  ingredients: string;
}

export interface Recipe {
  id: string;
  name: string;
  emoji: string;
  cookTime: string;
  maxRarity: 'normal' | 'common' | 'uncommon' | 'rare' | 'legendary' | 'mythical' | 'divine' | 'prismatic';
  isMeta?: boolean;
  variants: RecipeVariant[];
  rewards: string;
  exclusiveRewards?: string;
}

export type RecipeRarity = 'normal' | 'common' | 'uncommon' | 'rare' | 'legendary' | 'mythical' | 'divine' | 'prismatic';
