const shapes = ['triangle', 'square'] as const;

type Shapes = typeof shapes[number]; // 'square' | 'circle'
