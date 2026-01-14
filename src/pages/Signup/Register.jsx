import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ 
    username: "", 
    email: "", 
    password: "" 
  });
  
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user_creds", JSON.stringify(formData));
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen bg-[#FFFBF0] flex items-center justify-center p-4 font-mono overflow-hidden">
      
      <div className="absolute top-0 right-0 text-[30vw] font-[1000] text-black opacity-[0.02] select-none pointer-events-none leading-none">
        02
      </div>
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="absolute bottom-20 left-10 hidden lg:block">
        <div className="border-l-8 border-black pl-4">
          <p className="text-4xl font-black italic opacity-10 uppercase leading-none">Protocol_Init</p>
          <p className="text-xs font-black uppercase tracking-widest opacity-20 mt-2">Registration_Phase_Active</p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white border-[8px] border-black p-8 sm:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:shadow-[20px_20px_0px_0px_rgba(255,69,0,1)] transition-all duration-500">
        
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF4500] flex items-center justify-center font-black text-white text-xl border-4 border-black">
          +
        </div>

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-5xl font-[1000] uppercase italic tracking-tighter leading-none">
            JOIN THE <br /> <span className="bg-black text-[#B8FF59] px-3">CREW.</span>
          </h2>
          <div className="flex items-center gap-2 mt-4">
             <div className="h-1.5 flex-1 bg-black/10">
                <div className="h-full w-2/3 bg-[#FF4500]"></div>
             </div>
             <span className="text-[10px] font-black uppercase opacity-40 italic">Tier_01_Access</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="group relative">
            <label className="block font-black uppercase text-[10px] mb-1 italic">01. Call_Sign</label>
            <input
              type="text"
              required
              placeholder="GRIND_MASTER_99"
              className="w-full border-4 border-black p-4 font-black uppercase outline-none focus:bg-[#B8FF59] focus:translate-x-1 focus:translate-y-1 transition-all placeholder:opacity-30 text-lg"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>

          <div className="group relative">
            <label className="block font-black uppercase text-[10px] mb-1 italic">02. Comms_Channel</label>
            <input
              type="email"
              required
              placeholder="WARRIOR@EMAIL.COM"
              className="w-full border-4 border-black p-4 font-black uppercase outline-none focus:bg-[#B8FF59] focus:translate-x-1 focus:translate-y-1 transition-all placeholder:opacity-30 text-lg"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="group relative">
            <label className="block font-black uppercase text-[10px] mb-1 italic">03. Encryption_Key</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full border-4 border-black p-4 font-black uppercase outline-none focus:bg-[#B8FF59] focus:translate-x-1 focus:translate-y-1 transition-all placeholder:opacity-30 text-lg"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="group relative w-full bg-black text-white py-5 text-2xl font-[1000] uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,69,0,1)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Enlist Now</span>
            <div className="absolute inset-0 bg-[#FF4500] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </form>

        <div className="mt-10 pt-8 border-t-4 border-black border-dashed flex flex-col items-center gap-4">
          <p className="font-black uppercase text-[10px] tracking-widest opacity-60">
            Already in the database?
          </p>
          <Link 
            to="/login" 
            className="w-full text-center border-4 border-black py-3 font-black uppercase text-sm hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none active:translate-y-1"
          >
            Authenticate Login
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 text-right hidden sm:block">
         <p className="text-6xl font-[1000] opacity-5 leading-none">DO IT.</p>
         <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-10">System_Enlistment_v2.6</p>
      </div>
    </div>
  );
}