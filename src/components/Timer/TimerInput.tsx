type TimerInputProps = {
    value: number | '',
    onChange: (time: number) => void
}

const TimerInput = ({ value, onChange }: TimerInputProps) => {
    return (
        <div className="flex flex-col items-start mt-6 w-full">
            <label className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 mb-2">
                Set Duration (Seconds)
            </label>
            <input
                id="timer-input"
                type="number"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                min={0}
                placeholder="0"
                className="
                    w-full px-4 py-3
                    bg-neutral-900 border-2 border-neutral-700 rounded-xl
                    font-mono text-xl text-white placeholder-neutral-700
                    transition-all duration-200
                    focus:outline-none focus:border-violet-500 focus:bg-neutral-950
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                "
            />
        </div>
    )
}

export default TimerInput