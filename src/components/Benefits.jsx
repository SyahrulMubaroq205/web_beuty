const Benefits = () => {
    return (
        <section className="py-24 px-6">

            {/* judul section */}
            <div className="max-w-6xl mx-auto text-center mb-14">

                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Kenapa Pilih <span className="text-pink-300">BlushBerry</span>
                </h2>

                <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                    Produk makeup ringan yang nyaman dipakai sehari-hari dan tetap bikin kamu terlihat fresh.
                </p>

            </div>

            {/* grid card */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                {/* CARD 1 */}
                <div className="benefit-card glass p-8 rounded-3xl">
                    <h3 className="text-xl font-semibold">
                        ✨ Hasil Natural
                    </h3>

                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Memberikan tampilan makeup yang ringan dan menyatu dengan kulit tanpa terasa tebal.
                    </p>
                </div>

                {/* CARD 2 */}
                <div className="benefit-card glass p-8 rounded-3xl">
                    <h3 className="text-xl font-semibold">
                        💖 Tampilan Fresh
                    </h3>

                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Membuat wajah terlihat lebih segar dan cerah untuk aktivitas sehari-hari.
                    </p>
                </div>

                {/* CARD 3 */}
                <div className="benefit-card glass p-8 rounded-3xl">
                    <h3 className="text-xl font-semibold">
                        🌸 Tekstur Ringan
                    </h3>

                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Formulanya ringan, mudah dibaurkan, dan nyaman dipakai seharian.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default Benefits;