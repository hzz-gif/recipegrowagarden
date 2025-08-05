import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: 'soup',
    name: 'Soup',
    emoji: '🍲',
    cookTime: '5 minutes',
    maxRarity: 'uncommon',
    variants: [
      { rarity: 'common', ingredients: 'Carrot x1' },
      { rarity: 'uncommon', ingredients: 'Sugar Apple x1, Watermelon x1' }
    ],
    rewards: 'Basic cooking rewards, Common ingredients'
  },
  {
    id: 'salad',
    name: 'Salad',
    emoji: '🥗',
    cookTime: '8 minutes',
    maxRarity: 'prismatic',
    variants: [
      { rarity: 'common', ingredients: 'Bamboo x1, Carrot x3' },
      { rarity: 'rare', ingredients: 'Corn x1, Tomato x1' },
      { rarity: 'legendary', ingredients: 'Blood Banana x2, Tomato x2' },
      { rarity: 'mythical', ingredients: 'Tomama x1, Pepper x2' },
      { rarity: 'divine', ingredients: 'Sugar Apple x4, Tomato x1' },
      { rarity: 'prismatic', ingredients: 'Bone Blossom x4, Tomato x1' }
    ],
    rewards: 'Health boost, Prismatic rewards'
  },
  {
    id: 'cake',
    name: 'Cake',
    emoji: '🎂',
    cookTime: '6 minutes',
    maxRarity: 'prismatic',
    variants: [
      { rarity: 'common', ingredients: 'Strawberry x1, Tomato x1, Corn x1, Apple x1' },
      { rarity: 'rare', ingredients: 'Watermelon x2, Corn x2' },
      { rarity: 'legendary', ingredients: 'Banana x2, Blood Banana x1, Moon Melon x1, Soft Sunshine x1' },
      { rarity: 'mythical', ingredients: 'Lucky Bamboo x1, Sugar Apple x3, Corn x1' },
      { rarity: 'prismatic', ingredients: 'Banana x1, Bone Blossom x3, Sugar Apple x1' }
    ],
    rewards: 'Divine celebration rewards, Prismatic items'
  },
  {
    id: 'donut',
    name: 'Donut',
    emoji: '🍩',
    cookTime: '5 minutes',
    maxRarity: 'prismatic',
    variants: [
      { rarity: 'rare', ingredients: 'Corn x2, Tomato x1, Banana x1' },
      { rarity: 'legendary', ingredients: 'Corn x1, Serenity x1, Sugar Apple x1' },
      { rarity: 'mythical', ingredients: 'Corn x1, Sugar Apple x1' },
      { rarity: 'divine', ingredients: 'Sugarglaze x1, Sugar Apple x2' },
      { rarity: 'prismatic', ingredients: 'Bone Blossom x4, Sugarglaze x1' }
    ],
    rewards: 'Sweet rewards, Prismatic items'
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    emoji: '🥪',
    cookTime: '5 minutes',
    maxRarity: 'prismatic',
    variants: [
      { rarity: 'common', ingredients: 'Tomato x2, Corn x1' },
      { rarity: 'legendary', ingredients: 'Tomato x2, Beanstalk x2, Corn x1' },
      { rarity: 'divine', ingredients: 'Bone Blossom x3, Tomato x1, Corn x1' },
      { rarity: 'prismatic', ingredients: 'Bone Blossom x3, Tomato x1, Violet Corn x1' }
    ],
    rewards: 'Divine Seeds, Prismatic rewards'
  },
  {
    id: 'pie',
    name: 'Pie',
    emoji: '🥧',
    cookTime: '8 minutes',
    maxRarity: 'prismatic',
    variants: [
      { rarity: 'rare', ingredients: 'Crown Melon x1, Jalapeno x1' },
      { rarity: 'legendary', ingredients: 'Pumpkin x1, Apple x1' },
      { rarity: 'mythical', ingredients: 'Sugar Apple x1, Pumpkin x1' },
      { rarity: 'divine', ingredients: 'Coconut x1, Beanstalk x1' },
      { rarity: 'prismatic', ingredients: 'Bone Blossom x4, Pumpkin x1' }
    ],
    rewards: 'Divine rewards, Prismatic items'
  },
  {
    id: 'burger',
    name: 'Burger',
    emoji: '🍔',
    cookTime: '7 minutes',
    maxRarity: 'prismatic',
    variants: [
      { rarity: 'rare', ingredients: 'Pepper x1, Corn x1, Tomato x1, Mint x1' },
      { rarity: 'legendary', ingredients: 'Corn x1, Tomato x2, Ember Lily x2' },
      { rarity: 'mythical', ingredients: 'Pepper x1, Corn x1, Tomato x1, Bone Blossom x1' },
      { rarity: 'divine', ingredients: 'Corn x1, Tomato x1, Bone Blossom x3' },
      { rarity: 'prismatic', ingredients: 'Bone Blossom x3, Tomato x1, Corn x1' }
    ],
    rewards: 'Divine rewards, Prismatic items'
  },
  {
    id: 'hotdog',
    name: 'Hot Dog',
    emoji: '🌭',
    cookTime: '8 minutes',
    maxRarity: 'prismatic',
    variants: [
      { rarity: 'legendary', ingredients: 'Pepper x1, Corn x1' },
      { rarity: 'mythical', ingredients: 'Pepper x2, Corn x1' },
      { rarity: 'divine', ingredients: 'Ember Lily x4, Corn x1' },
      { rarity: 'prismatic', ingredients: 'Bone Blossom x4, Corn x1' }
    ],
    rewards: 'Divine rewards, Prismatic items'
  },
  {
    id: 'waffle',
    name: 'Waffle',
    emoji: '🧇',
    cookTime: '6 minutes',
    maxRarity: 'prismatic',
    variants: [
      { rarity: 'mythical', ingredients: 'Tranquil Bloom x1, Starfruit x1, Coconut x1' },
      { rarity: 'legendary', ingredients: 'Coconut x1, Maple Apple x1, Banana x3' },
      { rarity: 'divine', ingredients: 'Sugar Apple x1, Coconut x1' },
      { rarity: 'prismatic', ingredients: 'Bone Blossom x3, Sugar Apple x1, Coconut x1' }
    ],
    rewards: 'Divine rewards, Prismatic items'
  },
  {
    id: 'icecream',
    name: 'Ice Cream',
    emoji: '🍦',
    cookTime: '6 minutes',
    maxRarity: 'prismatic',
    variants: [
      { rarity: 'rare', ingredients: 'Watermelon x1, Corn x1' },
      { rarity: 'legendary', ingredients: 'Banana x1, Watermelon x1' },
      { rarity: 'mythical', ingredients: 'Banana x1, Sugar Apple x1' },
      { rarity: 'divine', ingredients: 'Sugar Apple x1, Sugarglaze x1' },
      { rarity: 'prismatic', ingredients: 'Sugar Apple x1, Sugarglaze x1, Bone Blossom x3' }
    ],
    rewards: 'Divine rewards, Prismatic items'
  },
  {
    id: 'sushi',
    name: 'Sushi',
    emoji: '🍣',
    cookTime: '6 minutes',
    maxRarity: 'divine',
    variants: [
      { rarity: 'normal', ingredients: 'Bamboo x4, Corn x1' },
      { rarity: 'rare', ingredients: 'Bamboo x1, Corn x2, Spike Mango x1' },
      { rarity: 'legendary', ingredients: 'Bamboo x3, Corn x1, Maple Apple x1' },
      { rarity: 'mythical', ingredients: 'Bamboo x2, Corn x1, Bone Blossom x2' },
      { rarity: 'divine', ingredients: 'Bamboo x2, Corn x1, Bone Blossom x3' }
    ],
    rewards: 'Divine rewards'
  },
  {
    id: 'pizza',
    name: 'Pizza',
    emoji: '🍕',
    cookTime: '8 minutes',
    maxRarity: 'prismatic',
    isMeta: true,
    variants: [
      { rarity: 'common', ingredients: 'Strawberry x1, Pepper x1, Tomato x1, Corn x1' },
      { rarity: 'legendary', ingredients: 'Corn x1, Tomato x1, Pepper x1, Sugar Apple x1' },
      { rarity: 'mythical', ingredients: 'Pepper x1, Tomato x1, Sugar Apple x1, Corn x1' },
      { rarity: 'divine', ingredients: 'Sugar Apple x1, Corn x1, Bone Blossom x1' },
      { rarity: 'prismatic', ingredients: 'Banana x1, Sugar Apple x1, Bone Blossom x3' }
    ],
    rewards: 'All Prismatic Rewards, 50,000+ Sheckles'
  }
];
