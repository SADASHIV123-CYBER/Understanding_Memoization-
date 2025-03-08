import './App.css'
import SlowComponent from './component/SlowComp'
import React, { memo, useMemo, useState, useCallback } from 'react'
import Moadal from './component/Modal';
import SlowComponentTwo from './component/AnotherSlowComp';

const MemoizedSlowComp = memo(function MemoizedSlowComp({ time, fun, x }) {
  return(<>
    <SlowComponent time={time} fun={fun} x={x} />
  </>)
})

const MemoizedSlowCompTwo = memo(SlowComponentTwo);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [x, setX] = useState(0);
  
  const someFun = useCallback(() => {console.log("Callback function executed!");}, []);

  const timeArray = useMemo(() => {return [1000];},[]);



  const MemoChild = useMemo(() => {
    return (
      <>
        <h2> i im a child</h2>
      </>
    )
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
        <MemoizedSlowCompTwo>
          { MemoChild }
        </MemoizedSlowCompTwo>
      </>
  )
}

export default App
