import { motion } from "framer-motion";
import heroImg from "../assets/image/lipbalm.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 pt-28 md:pt-32 overflow-hidden">

            {/* ================= BACKGROUND GLOW ================= */}
            <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full top-20 left-20" />
            <div className="absolute w-[400px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full bottom-0 right-0" />

            {/* garis futuristik */}
            <div className="absolute top-32 left-0 w-full flex justify-center">
                <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div className="absolute bottom-32 left-0 w-full flex justify-center">
                <div className="w-[60%] h-[1px] bg-gradient-to-r from-transparent via-pink-400/20 to-transparent" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT */}
                <div>
                    {/* TYPEWRITER (FIXED + NO JUMP) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-7xl font-bold leading-tight"
                    >
                        <div className="w-full md:w-[600px] min-h-[140px] flex items-center">

                            <span className="block w-full">
                                <Typewriter
                                    words={[
                                        "Tampil lebih percaya diri",
                                        "Makeup ringan untuk sehari-hari",
                                        "Glow natural setiap hari"
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={40}
                                    delaySpeed={1500}
                                />
                            </span>

                        </div>
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 mt-8 text-lg leading-relaxed max-w-xl"
                    >
                        Produk makeup yang ringan, nyaman dipakai, dan cocok untuk aktivitas harian kamu
                        tanpa terlihat berlebihan.
                    </motion.p>

                    {/* RATING */}
                    <div className="flex items-center gap-5 mt-8">
                        <div className="flex text-yellow-400 text-xl">
                            ★★★★★
                        </div>
                        <p className="text-gray-400">
                            1.2K+ pelanggan puas
                        </p>
                    </div>

                    {/* BUTTON */}
                    <div className="mt-10 flex gap-4 flex-wrap">

                        <a
                            href="#products"
                            className="bg-pink-500 hover:bg-pink-400 px-8 py-4 rounded-full glow transition font-medium"
                        >
                            Lihat Produk
                        </a>

                        <a
                            href="https://wa.me/6285711019996"
                            target="_blank"
                            className="glass px-8 py-4 rounded-full hover:scale-105 transition"
                        >
                            Hubungi Kami
                        </a>

                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative"
                >

                    <div className="absolute inset-0 bg-pink-500/20 blur-[100px] rounded-full" />

                    <img
                        src={heroImg}
                        alt="BlushBerry Product"
                        className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_0_40px_rgba(255,0,120,0.5)]"
                    />

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;