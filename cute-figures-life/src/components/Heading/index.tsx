import classes from './style.module.css';
import { FC } from 'react';

export const Heading: FC<{text: string, subHeading?: string}> = ({text, subHeading}) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {text}
      </div>
      {subHeading && <div className={classes.subtitle}>
        {subHeading}
      </div>}
    </div>
  )
}