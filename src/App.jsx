import './App.css'
import SlowComponent from './SlowComp'
import React, { memo, useCallback, useMemo, useState } from 'react'
import Moadal from './Modal';

const MemoizedSlowComp = memo(function MemoizedSlowComp({ time, fun, x }) {
  return(<>
    <SlowComponent time={time} fun={fun} x={x} />
  </>)
})
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [x, setX] = useState(0);
  
  const someFun = useCallback(() => {
    console.log("Callback function executed!");
  }, []);

  const timeArray = useMemo(() => {
    return [1000];
  },[])

  return (
      <>
        <button onClick={() => setIsOpen(true)} >open Modal</button>
        {isOpen && <Moadal close={() => setIsOpen(false)} />}

          <button onClick={() => setX(x + 1)} >inc + 1</button>
        <div>
          something...
        </div>

        <div>
          something...
        </div>

        <MemoizedSlowComp time={timeArray} fun={someFun} x={x} />
      </>
  )
}

export default App
