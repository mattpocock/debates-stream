// Gives you all enums, reaming keys and such. and the predictably of a normal object ( none of th weird enum behaviors )

export const MyCoolEnum = {
    A: 'A',
    B: 'B',
} as const;

export type MyCoolEnum = typeof MyCoolEnum[keyof typeof MyCoolEnum];
