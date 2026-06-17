const Navbar = () => {
    return (
        <nav className="fixed top-5 left-0 w-full z-50 px-6">

            <div className="glass max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between">

                {/* LEFT - BRAND */}
                <h1 className="font-bold text-xl tracking-wide">
                    BlushBerry
                </h1>

                {/* CENTER - MENU */}
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                    <a href="#products" className="hover:text-pink-400 transition">
                        Produk
                    </a>

                    <a
                        href="https://blushberry8.blogspot.com/"
                        target="_blank"
                        className="hover:text-pink-400 transition"
                    >
                        Blog
                    </a>
                </div>

                {/* RIGHT - CTA */}
                <a
                    href="https://wa.me/6285711019996"
                    target="_blank"
                    className="bg-pink-500 hover:bg-pink-400 transition px-5 py-2 rounded-full font-medium text-sm"
                >
                    WhatsApp
                </a>

            </div>
        </nav>
    );
};

export default Navbar;