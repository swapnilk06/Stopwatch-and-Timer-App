import { useTimer } from "../../hooks/useTimer";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";
import TimerInput from "./TimerInput";

const Timer = () => {
    const { isRunning, start, pause, reset, remainingTime, handleTimeChange, initialTime } = useTimer();
    return (
        <div>
            <TimerDisplay remainingTime={remainingTime} />
            <TimerControls startTimer={start} stopTimer={pause} resetTimer={reset} isRunning={isRunning} />
            <TimerInput value={initialTime} onChange={handleTimeChange} />
        </div>
    )
}

export default Timer