export type FiguresTypes = 'circle' | 'square' | 'triangle';

interface IFigureData {
  id: number;
  height: number;
  type: FiguresTypes;
}

export const figuresData: IFigureData[] = [
  {
    id: 1,
    height: 80,
    type: "circle"
  },
  {
    id: 2,
    height: 120,
    type: 'triangle'
  },
  {
    id: 3,
    height: 80,
    type: 'square'
  },
]

export const figuresData1 = [
  {
    id: 1,
    img: '1.png',
    height: 80
  },
  {
    id: 2,
    img: '2.png',
    height: 60
  },
  {
    id: 3,
    img: '3.png',
    height: 120
  },
  {
    id: 4,
    img: '4.png',
    height: 95
  },
  {
    id: 5,
    img: '5.png',
    height: 55
  },
  {
    id: 6,
    img: '6.png',
    height: 70
  },
  {
    id: 7,
    img: '7.png',
    height: 95
  },
  {
    id: 8,
    img: '8.png',
    height: 110
  },
  {
    id: 9,
    img: '9.png',
    height: 85
  },
  {
    id: 10,
    img: '10.png',
    height: 50
  },
  {
    id: 11,
    img: '11.png',
    height: 100
  },
  {
    id: 12,
    img: '12.png',
    height: 80
  }
]