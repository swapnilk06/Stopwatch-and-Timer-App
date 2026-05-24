type TimerControlsProps = {
    startTimer: () => void,
    stopTimer: () => void,
    resetTimer: () => void,
    isRunning: boolean
}

const TimerControls = ({ startTimer, stopTimer, resetTimer, isRunning }: TimerControlsProps) => {
    return (
        <div className="flex flex-wrap items-center justify-start gap-3 mt-6">
            <button
                onClick={isRunning ? stopTimer : startTimer}
                className={`
                    flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase rounded-xl transition-all active:translate-y-1 active:shadow-none border-2 border-black
                    ${isRunning
                        ? 'text-neutral-900 bg-amber-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]'
                        : 'text-white bg-violet-600 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]'
                    }
                `}
            >
                {isRunning ? '⏸ Pause' : '▶ Start'}
            </button>

            <button
                onClick={resetTimer}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase text-neutral-300 bg-neutral-800 border-2 border-neutral-700 rounded-xl transition-all hover:bg-neutral-700 active:translate-y-1 active:shadow-none"
            >
                ↺ Reset
            </button>
        </div>
    )
}

export default TimerControls