import classes from './style.module.css';
import { FC, useEffect, useState } from 'react';
import { figuresData, FiguresTypes } from '../../constants/figures.tsx';
import { Figure } from '../Figure/index.tsx';

interface IPicker {
  setHeading: any;
  type: FiguresTypes | null;
  setType: any;
  x: string;
  y: string;
  mode: string;
}

export const Picker: FC<IPicker> = ({setHeading, type, setType,x, y,mode = 'top' }) => {

  const [side, setSide] = useState<'left' | 'right'>('left');

  const chooseFigure = (type: FiguresTypes) => {
    setType(type);
    setHeading(`Now care after your cute ${type} figure`);
  }

  const handleClick = () => {
    if (mode === 'bottom') {
      setSide((p) => p === 'left' ? 'right' : 'left') ;
    }
  }

  useEffect(() => {
    if (mode === 'top') {
      setSide('left');
    }
  }, [mode])


  return (
    <div>
      {
        type ? (
          <div onClick={handleClick} className={classes.single}>
            <span style={{[mode]: `${+y - 90}px`, [side]: `${+x - 20}px`}} className={classes.span}>
              <Figure height={120} type={type} isSingle />
            </span>
          </div>
        ) : (
          <div className={classes.row}>
            {figuresData.map((el) => (
              <div onClick={() => chooseFigure(el.type)} className={classes.element}>
                <Figure key={el.id} height={el.height} type={el.type} />
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
};