import { useRef, useState } from 'react'
export const useTimer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [initialTime, setInitialTime] = useState<number | ''>('');
    const [remainingTime, setRemainingTime] = useState(0);
    const intervalRef = useRef<null | number>(null);

    const handleTimeChange = (time: number) => {
        setInitialTime(time);

        if (time === 0) {
            setRemainingTime(0);
            return;
        }

        setRemainingTime(time * 1000);
    }

    const start = () => {
        // Set isRunning = true
        // Start interval
        // On every interval tick:
        // update remainingTime

        if (isRunning) return;
        if (remainingTime <= 0) return;

        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setRemainingTime(prev => {
                if (prev <= 1) {
                    pause();
                    return 0;
                }
                return prev - 10
            });
        }, 10)
    }
    const pause = () => {
        // timer should stop ticking
        // interval should be cleared
        // running state should update
        setIsRunning(false);
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }
    const reset = () => {
        // timer should stop ticking
        // interval should be cleared
        // running state should update
        // remaining time should reset to initial value (0 in this case)
        setIsRunning(false);
        setRemainingTime(initialTime === '' ? 0 : initialTime * 1000);
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }
    return {
        isRunning,
        remainingTime,
        initialTime,
        handleTimeChange,
        start,
        pause,
        reset
    }
}