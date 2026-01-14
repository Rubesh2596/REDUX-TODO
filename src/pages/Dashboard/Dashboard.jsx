import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const todos = useSelector((state) => state.todo.list);
  const username = localStorage.getItem("username") || "Agent";

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;
  const progressPercent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const getStatusUpdate = () => {
    if (total === 0) return "Awaiting Orders. Start a mission.";
    if (progressPercent === 100) return "Mission Accomplished. Elite performance.";
    if (progressPercent >= 50) return "Momentum Secured. Finish the job.";
    return "Operations Stalled. Increase output.";
  };

  return (
    <div className="relative min-h-screen bg-[#FFFBF0] p-4 sm:p-8 font-mono overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-[1000] text-black opacity-[0.02] select-none pointer-events-none tracking-tighter italic">
        DATA_HUB
      </div>

      <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-black opacity-10"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-black opacity-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        <header className="mb-12 border-b-8 border-black pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h1 className="text-6xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
              DASH<span className="text-[#FF4500]">BOARD</span>
            </h1>
            <p className="text-lg font-bold uppercase mt-2">
              Welcome back, <span className="bg-black text-white px-2">{username}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-black uppercase opacity-40">System Status</p>
            <p className="text-xl font-black uppercase">{getStatusUpdate()}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          <div className="lg:col-span-2 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase mb-1">Efficiency Rating</h3>
                <div className="flex items-baseline gap-2">
                    <span className="text-7xl font-black italic">{progressPercent}%</span>
                    <span className="text-xl font-bold opacity-50">COMPLETED</span>
                </div>
                <div className="flex gap-2 mt-6">
                    {[...Array(10)].map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-12 w-full border-2 border-black transition-colors duration-500 ${
                                i < progressPercent / 10 ? 'bg-[#FF4500]' : 'bg-gray-100'
                            }`}
                        />
                    ))}
                </div>
             </div>
             <span className="absolute -bottom-4 -right-4 text-9xl font-black opacity-5 pointer-events-none">
                {progressPercent}
             </span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#B8FF59] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center">
                <span className="font-black uppercase">Active</span>
                <span className="text-3xl font-black">{pending}</span>
            </div>
            <div className="bg-black border-4 border-black p-4 text-white shadow-[4px_4px_0px_0px_rgba(255,69,0,1)] flex justify-between items-center">
                <span className="font-black uppercase text-[#FF4500]">Cleared</span>
                <span className="text-3xl font-black">{completed}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <Link 
                to="/todo" 
                className="group relative inline-block"
            >
                <div className="absolute inset-0 bg-[#FF4500] border-4 border-black translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                <div className="relative bg-white border-4 border-black p-6 text-center text-2xl font-black uppercase transition-transform group-active:translate-x-1 group-active:translate-y-1">
                    Execute Missions →
                </div>
            </Link>

            <div className="border-l-4 border-black pl-6 italic font-bold text-gray-600">
                "The difference between a leader and a follower is the ability to clear the pending list."
            </div>
        </div>

      </div>
    </div>
  );
}