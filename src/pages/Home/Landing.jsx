import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-[#FFFBF0] text-black font-sans selection:bg-[#FF4500] selection:text-white overflow-x-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="absolute top-1/4 -left-20 text-[20vw] font-[1000] text-black opacity-[0.02] select-none pointer-events-none -rotate-90 origin-top-left">
        EXECUTION_01
      </div>

      <div className="absolute top-20 right-[10%] w-32 h-32 border-[20px] border-[#FF4500] opacity-10 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-40 left-[5%] w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[80px] border-b-black opacity-5 rotate-12 pointer-events-none"></div>

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 md:pt-30 md:pb-32">
        <div className="relative w-full max-w-7xl mx-auto">
          <h1 className="flex flex-col items-center text-[18vw] sm:text-[15vw] lg:text-[11rem] font-[1000] italic uppercase tracking-tighter leading-[0.8] md:leading-[0.8]">
            <span className="block translate-x-[-2%] md:translate-x-[-5%] hover:translate-x-0 transition-transform duration-700 ease-out">
              STOP
            </span> 
            <span className="relative bg-[#FF4500] text-white px-3 py-1 sm:px-6 sm:py-2 mt-1 md:mt-4 transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              TALKING.
              <div className="absolute z-20 top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 text-[20px] border-2 border-white rotate-12 font-black shadow-lg md:px-5 md:py-3 md:text-[50px] md:border-4 md:shadow-2xl md:translate-x-15 md:-translate-y-13 whitespace-nowrap">
                DO IT.
              </div>
            </span> 
          </h1>
        </div>
        
        <p className="max-w-[90%] md:max-w-xl text-sm sm:text-lg md:text-2xl font-black uppercase mt-10 md:mt-16 mb-8 md:mb-12 leading-tight tracking-tight px-2">
          The ultimate execution tool for high-performers. <br className="hidden sm:block"/>
          <span className="opacity-40 italic font-medium block mt-2">No plans. No excuses. Just results.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[320px] sm:max-w-lg px-4">
          <Link 
            to="/todo" 
            className="group relative flex-1 bg-black text-white text-base md:text-xl font-black uppercase py-4 md:py-6 border-4 border-black overflow-hidden text-center shadow-[6px_6px_0px_0px_rgba(255,69,0,1)] hover:shadow-none transition-all"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Start Grind</span>
            <div className="absolute inset-0 bg-[#FF4500] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>
          <Link 
            to="/signup" 
            className="flex-1 bg-white text-black text-base md:text-xl font-black uppercase py-4 md:py-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center"
          >
            Join Crew
          </Link>
        </div>
      </main>

      <div className="relative z-10 bg-black py-3 md:py-6 border-y-4 md:border-y-8 border-black -rotate-1 scale-105 mb-16 md:mb-32 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-fast gap-6 md:gap-12 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white font-black uppercase text-xl sm:text-3xl md:text-6xl italic tracking-tighter opacity-90">
              EXECUTE <span className="text-[#FF4500]">NOW</span> —
            </span>
          ))}
        </div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-24 md:mb-40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <h2 className="text-5xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">
            THE <br/> <span className="text-[#FF4500]">SYSTEM.</span>
          </h2>
          <p className="max-w-xs font-bold uppercase text-[10px] sm:text-xs md:text-sm border-l-4 border-black pl-4">
            We stripped away the garbage. No distractions. Just the raw cycle of productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-1 shadow-none md:shadow-[20px_20px_0px_0px_rgba(255,69,0,1)] border-4 border-black divide-y-4 md:divide-y-0 md:divide-x-4 divide-black relative bg-black">
          {[
            { id: "01", title: "IDENTIFY", body: "Dump the noise. Capture every task instantly." },
            { id: "02", title: "FOCUS", body: "Select one target. Kill the distractions." },
            { id: "03", title: "DESTROY", body: "Complete. Delete. Repeat until finished." }
          ].map((item) => (
            <div key={item.id} className="bg-white p-8 md:p-12 group hover:bg-[#000] hover:text-white transition-colors duration-500 cursor-crosshair">
              <span className="text-3xl md:text-5xl font-black italic opacity-20 group-hover:opacity-100 group-hover:text-[#FF4500] transition-all">
                {item.id}
              </span>
              <h3 className="text-xl md:text-3xl font-black mt-2 md:mt-4 mb-1 md:mb-2 group-hover:tracking-widest transition-all uppercase">{item.title}</h3>
              <p className="font-bold uppercase text-[10px] md:text-xs opacity-60 group-hover:opacity-100">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEATURE SECTION --- */}
      <section className="relative z-10 bg-black text-white py-16 md:py-32 px-6 overflow-hidden">
        {/* Decorative scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[2px] animate-scanline"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic mb-8 leading-none">
              BUILT FOR <br/> <span className="text-[#FF4500]">WARRIORS.</span>
            </h2>
            <div className="space-y-6 md:space-y-8">
              <div className="border-b-4 border-[#FF4500] pb-4">
                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight">Ultra-Low Latency</h4>
                <p className="text-[10px] md:text-sm uppercase opacity-60 italic mt-1">Zero lag state management with Redux Toolkit.</p>
              </div>
              <div className="border-b-4 border-white pb-4">
                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight">Local Persistence</h4>
                <p className="text-[10px] md:text-sm uppercase opacity-60 italic mt-1">Your data never leaves your device. Secure by default.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square max-w-[300px] md:max-w-none mx-auto lg:mx-0 w-full bg-[#FFFBF0] border-[10px] md:border-[20px] border-[#FF4500] flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-700 shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)]">
             <span className="text-black text-8xl md:text-[12rem] font-black italic select-none">!</span>
             <div className="absolute -bottom-6 -left-6 bg-black text-white px-4 py-2 font-black text-xs">VER_2.0</div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-24 md:py-40 flex flex-col items-center text-center px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-[0.02] pointer-events-none italic">
          READY?
        </div>
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 md:mb-12 relative">
          READY?
        </h2>
        <Link 
          to="/signup" 
          className="bg-[#FF4500] text-white text-xl sm:text-3xl md:text-5xl font-black uppercase px-8 py-5 md:px-16 md:py-8 border-4 md:border-8 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:bg-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          GET ACCESS
        </Link>
        <div className="mt-12 md:mt-20 flex flex-col items-center gap-2">
            <div className="flex gap-4 opacity-20">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <p className="font-black opacity-20 tracking-[0.5em] md:tracking-[1em] uppercase text-[8px] md:text-xs">Stay Dangerous • 2026</p>
        </div>
      </footer>
    </div>
  );
}