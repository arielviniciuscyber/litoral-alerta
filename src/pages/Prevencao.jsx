import banner from "../assets/bannerprevencao.png"
export default function Prevencao() {
    return (
        <div>
            <div
                className="relative min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative text-white max-w-3xl px-2">
                    <div className="relative text-white max-w-3xl px-2 flex items-center gap-4">
                        <h1 className="text-6xl font-bold whitespace-nowrap">Atuando em emergências</h1>
                        <span className="w-1 h-18 bg-blue-500 inline-block" />
                    </div>
                    <p className="text-2xl leading-relaxed mt-15 font-semibold">
                        Seu site de confiança na preparação para desastres, resposta a emergências e reconstrução de comunidades para um futuro mais resiliente.
                    </p>
                    <button className="mt-15 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                        Saber Mais
                    </button>
                </div>
            </div>
        </div>
    )
}