import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = formData.email.split('@')[0];
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    window.dispatchEvent(new Event("storage"));
    console.log("Welcome back,", username);
    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-[#FFFBF0] flex items-center justify-center p-4 font-mono overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="absolute top-10 left-10 text-[10px] font-black opacity-20 hidden md:block uppercase tracking-widest">
        LAT: 40.7128° N <br /> LONG: 74.0060° W <br /> STATUS: ENCRYPTED
      </div>
      
      <div className="absolute bottom-10 right-10 text-[10px] font-black opacity-20 hidden md:block uppercase tracking-[0.5em] rotate-90 origin-right">
        AUTH_REQUIRED_BYPASS_IMPOSSIBLE
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <span className="text-[25vw] font-[1000] italic uppercase leading-none">LOGIN</span>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white border-[8px] border-black p-8 sm:p-12 shadow-[20px_20px_0px_0px_rgba(255,69,0,1)] hover:shadow-[30px_30px_0px_0px_rgba(0,0,0,1)] transition-all duration-500">
        
        <div className="relative mb-10">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-8 border-l-8 border-[#FF4500]"></div>
          <h2 className="text-5xl font-[1000] uppercase italic tracking-tighter leading-none mb-2">
            IDENTIFY <br /> <span className="text-[#FF4500]">YOURSELF.</span>
          </h2>
          <div className="h-1.5 w-full bg-black mt-4 flex">
            <div className="h-full w-1/3 bg-[#B8FF59]"></div>
          </div>
          <p className="mt-4 font-black uppercase text-[10px] tracking-widest opacity-60">
            Biometric Link: <span className="text-black">PENDING...</span>
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-2 relative group">
            <label className="block font-black uppercase text-xs italic tracking-tighter">
              [ 01. User_Identity ]
            </label>
            <input
              type="email"
              required
              placeholder="YOU@EXAMPLE.COM"
              className="w-full border-4 border-black p-5 font-black uppercase outline-none focus:bg-[#B8FF59] focus:text-black transition-all placeholder:opacity-20 text-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2 relative group">
            <label className="block font-black uppercase text-xs italic tracking-tighter">
              [ 02. Secure_Key ]
            </label>
            <input
              type="password"
              required
              placeholder="********"
              className="w-full border-4 border-black p-5 font-black uppercase outline-none focus:bg-[#B8FF59] focus:text-black transition-all placeholder:opacity-20 text-lg"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="group relative w-full bg-[#FF4500] text-white py-6 text-3xl font-[1000] uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Access Base</span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform skew-x-12"></div>
          </button>
        </form>

        <div className="mt-12 pt-8 border-t-4 border-black flex flex-col gap-4">
          <p className="font-black uppercase text-[10px] text-center tracking-widest">
            New to the crew?{" "}
            <Link to="/signup" className="bg-[#B8FF59] text-black px-2 py-1 hover:bg-black hover:text-white transition-colors">
              Join here
            </Link>
          </p>
          <Link to="/" className="text-center font-black uppercase text-[10px] opacity-40 hover:opacity-100 transition-opacity hover:tracking-[0.2em]">
            &lt;&lt; Emergency Abort
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 bg-black text-white p-2 text-[8px] font-bold uppercase hidden sm:block">
        System_v2.0_Logged_at_2026
      </div>
    </div>
  );
}