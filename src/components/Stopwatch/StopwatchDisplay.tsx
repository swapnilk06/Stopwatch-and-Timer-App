import { formatTime } from '../../utils/formatTime'

type StopwatchDisplayProps = {
    elapsed: number,
}

const StopwatchDisplay = ({ elapsed }: StopwatchDisplayProps) => {
    const { hours, minutes, seconds, centiseconds } = formatTime(elapsed);

    return (
        <div className="flex flex-col items-start justify-center py-4 w-full">
            <div className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase mb-6 border border-neutral-200">
                Stopwatch Module
            </div>

            <div
                aria-live="polite"
                className="font-mono font-black text-6xl sm:text-7xl tracking-tighter tabular-nums text-neutral-950 w-full border-b-2 border-neutral-100 pb-6"
            >
                <div className="flex items-baseline">
                    <span>{hours}:{minutes}:{seconds}</span>
                    <span className="text-neutral-400 text-2xl sm:text-3xl ml-2 mb-2 font-bold">
                        .{centiseconds}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StopwatchDisplay