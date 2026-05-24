import { useRef, useState } from "react";

export const useStopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef<null | number>(null);
    const startTimeRef = useRef<number | null>(null);

    const start = () => {
        //          1. Set isRunning = true
        //          2. Start interval
        //          3. On every interval tick:
        //          update elapsedTime
        if (isRunning) return;
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

        intervalRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current!);
        }, 10);
    }
    const pause = () => {
        //          stopwatch should stop ticking
        //          interval should be cleared
        //          running state should update
        setIsRunning(false);
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }
    const reset = () => {
        //          stopwatch should stop ticking
        //          interval should be cleared
        //          running state should update
        //          elapsed time should reset to 0
        setIsRunning(false);
        startTimeRef.current = null;
        setElapsedTime(0);
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }
    return {
        isRunning,
        elapsedTime,
        start,
        pause,
        reset
    }
}