const CTASection = () => {
    return (
        <section className="py-28 px-6 relative overflow-hidden">

            {/* background glow */}
            <div className="cta-apple-bg" />

            <div className="glass apple-card max-w-5xl mx-auto p-14 text-center relative z-10">

                {/* judul */}
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                    Rasakan cara yang lebih lembut untuk <br />
                    <span className="text-pink-300">tampil percaya diri</span>
                </h2>

                {/* deskripsi */}
                <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
                    Produk makeup yang ringan, mudah dibaurkan, dan nyaman digunakan sepanjang hari tanpa terasa berat di wajah.
                </p>

                {/* tombol CTA */}
                <a
                    href="https://wa.me/6285711019996"
                    target="_blank"
                    className="apple-btn inline-block mt-10 px-10 py-4 rounded-full text-white font-medium"
                >
                    Hubungi via WhatsApp
                </a>

                {/* catatan kecil */}
                <p className="text-gray-500 text-sm mt-6">
                    Tampilan natural, ringan, dan tetap nyaman untuk aktivitas harian
                </p>

            </div>
        </section>
    );
};

export default CTASection;