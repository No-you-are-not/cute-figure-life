import { FC } from 'react';

import classes from './style.module.css';
import { FiguresTypes } from '../../constants/figures.tsx';
import { classNames } from '../../utils/classNames.ts';

interface IFigure {
  height: number;
  type: FiguresTypes;
  isSingle?: boolean;
}

export const Figure: FC<IFigure> = ({  height, type, isSingle= false }) => {
  return (
    <div className={classes.container} style={{height: `${height}px`}}>
      <div className={classes.figure}>
        <div className={ classNames(classes[type], {[classes.single]: isSingle})}></div>
      </div>
    </div>
  );
};