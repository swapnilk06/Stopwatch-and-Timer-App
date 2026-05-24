type StopwatchControlsProps = {
    start: () => void,
    pause: () => void,
    reset: () => void,
    isRunning: boolean,
    elapsed: number
}

const StopwatchControls = ({ start, pause, reset, isRunning, elapsed }: StopwatchControlsProps) => {
    return (
        <div className="flex flex-wrap items-center justify-start gap-3 mt-8">
            {isRunning ? (
                <button
                    onClick={pause}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase text-neutral-900 bg-amber-400 border-2 border-neutral-900 rounded-xl transition-all active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(23,23,23,1)]"
                >
                    ⏸ Pause
                </button>
            ) : (
                <button
                    onClick={start}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase text-white bg-blue-600 border-2 border-neutral-900 rounded-xl transition-all active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(23,23,23,1)]"
                >
                    ▶ {elapsed > 0 ? 'Resume' : 'Start'}
                </button>
            )}

            {elapsed > 0 && (
                <button
                    onClick={reset}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase text-neutral-600 bg-white border-2 border-neutral-300 rounded-xl transition-all hover:border-neutral-900 hover:text-neutral-900 active:translate-y-1 active:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(23,23,23,1)]"
                >
                    ↺ Reset
                </button>
            )}
        </div>
    )
}

export default StopwatchControls