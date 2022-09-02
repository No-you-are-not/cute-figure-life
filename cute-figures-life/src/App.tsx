import './App.css';
import { Heading } from './components/Heading/index.tsx';
import { Picker } from './components/Picker/index.tsx';
import { useEffect, useState } from 'react';
import { FiguresTypes } from './constants/figures';

const subHeadingText = {
  circle: 'Be careful, he is fragile',
  square: 'Be careful, he is sharp',
  triangle: 'Be careful, he is slippery',
}

interface ICoordinates {
  x: string;
  y: string;
}

function App() {
  const initialHeading = 'Choose cute figure';
  const [heading, setHeading] = useState<string>(initialHeading);
  const [type, setType] = useState<FiguresTypes | null>(null);
  const [subHeading, setSubHeading] = useState<string | undefined>(undefined);
  const [coordinates, setCoordinates] = useState<ICoordinates>({x: '', y: ''});
  const [mode, setMode] = useState('top');

  const backHandler = () => {
    setType(null);
    setSubHeading(undefined);
    setHeading(initialHeading);
  }

  const onMouseMove = (e) => {
    setCoordinates({x: e.clientX, y: e.clientY});
  }

  const modeSwitch = (mode: string) => {
    if (mode === 'hard') {
      setMode('bottom');
    }
    else setMode('top');
  };

  useEffect(() => {
    if (type) {
      setSubHeading(subHeadingText[type]);
    }
  }, [type, subHeading])
  return (
    <div className="wrapper" onMouseMove={onMouseMove}>
      <div className='heading'>
        <Heading text={heading} subHeading={subHeading} />
      </div>
      {
        type && <div className={'switch'}>
          <div className={mode === 'bottom' ? 'black' : 'white'} onClick={() => modeSwitch('hard')}>hard</div>
          <div className={mode === 'top' ? 'black' : 'white'} onClick={() => modeSwitch('light')}>light</div>
        </div>
      }
      {type &&
        <button onClick={backHandler}>
          <div className={'button'}>
            <div className={'arrow'}>
              ➬
            </div>
            <div>
              Back
            </div>
          </div>
        </button>
      }
      <div className='body'>
        <Picker mode={mode} x={coordinates.x} y={coordinates.y} type={type} setType={setType} setHeading={setHeading} />
      </div>
    </div>
  );
}

export default App;
