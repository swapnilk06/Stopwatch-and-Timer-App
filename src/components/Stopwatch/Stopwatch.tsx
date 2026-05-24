import { useStopwatch } from '../../hooks/useStopwatch';
import StopwatchControls from './StopwatchControls';
import StopwatchDisplay from './StopwatchDisplay';

const Stopwatch = () => {
    const {isRunning, elapsedTime, start, pause, reset} = useStopwatch();
  return (
    <div>
      <StopwatchDisplay elapsed={elapsedTime} />
      <StopwatchControls start={start} pause={pause} reset={reset} isRunning={isRunning} elapsed={elapsedTime}/>
    </div>
  )
}

export default Stopwatch