import './App.css'
import Stopwatch from './components/Stopwatch/Stopwatch';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f4f4f5] text-neutral-900 flex flex-col items-center justify-center p-4 sm:p-8 font-sans selection:bg-black selection:text-white">
      
      {/* Minimalist Header */}
      <div className="z-10 text-center mb-10 w-full max-w-5xl flex justify-between items-end border-b-2 border-neutral-200 pb-4">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 uppercase">
          Time<span className="text-neutral-400">System</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">System Online</span>
        </div>
      </div>

      {/* Bento Box Grid */}
      <div className="z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white border-2 border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-[8px_8px_0px_0px_rgba(163,163,163,0.2)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(163,163,163,0.2)] flex flex-col justify-between">
          <Stopwatch />
        </section>

        <section className="bg-neutral-950 text-white border-2 border-neutral-900 rounded-3xl p-8 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
          <Timer />
        </section>
      </div>
    </div>
  )
}

export default App