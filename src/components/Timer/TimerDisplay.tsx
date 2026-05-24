import { formatTime } from "../../utils/formatTime";

type TimerDisplayProps = {
    remainingTime: number
}

const TimerDisplay = ({ remainingTime }: TimerDisplayProps) => {
    const { hours, minutes, seconds, centiseconds } = formatTime(remainingTime);
    const isUrgent = remainingTime > 0 && remainingTime <= 10000;

    return (
        <div className="flex flex-col items-start justify-center py-4 w-full">
            <div className={`px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase mb-6 border transition-colors ${isUrgent ? 'bg-red-500/20 text-red-400 border-red-500/30 animate-pulse' : 'bg-neutral-800 text-neutral-400 border-neutral-700'}`}>
                Countdown Module
            </div>

            <div
                className={`
                    font-mono font-black text-6xl sm:text-7xl tracking-tighter tabular-nums w-full border-b-2 pb-6 transition-colors
                    ${isUrgent ? 'text-red-400 border-red-500/30' : 'text-white border-neutral-800'}
                `}
            >
                <div className="flex items-baseline">
                    <span>{hours}:{minutes}:{seconds}</span>
                    <span className={`text-2xl sm:text-3xl ml-2 mb-2 font-bold ${isUrgent ? 'text-red-500' : 'text-neutral-600'}`}>
                        .{centiseconds}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TimerDisplay