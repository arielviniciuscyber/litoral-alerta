import logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Coluna 1: Marca e Descrição */}
                    <div className="flex flex-col gap-4">
                        <img src={logo} alt="Litoral Alerta Logo" className="w-40" />
                        <p className="text-sm leading-relaxed text-slate-400 mt-2">
                            Nosso objetivo é informar e salvar vidas através da tecnologia.
                            Fique alerta, previna-se e apoie sua comunidade no litoral.
                        </p>
                    </div>

                    {/* Coluna 2: Acesso Rápido */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-white font-bold text-lg mb-2">Acesso Rápido</h3>
                        <a href="/home" className="hover:text-blue-400 transition-colors w-fit">Home</a>
                        <a href="/noticias" className="hover:text-blue-400 transition-colors w-fit">Notícias</a>
                        <a href="/sobrenos" className="hover:text-blue-400 transition-colors w-fit">Sobre Nós</a>
                    </div>

                    {/* Coluna 3: Recursos */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-white font-bold text-lg mb-2">Recursos</h3>
                        <a href="/prevencao" className="hover:text-blue-400 transition-colors w-fit">Prevenção</a>
                        <a href="/comunidade" className="hover:text-blue-400 transition-colors w-fit">Comunidade</a>
                        <a href="#" className="hover:text-blue-400 transition-colors w-fit">Termos de Uso</a>
                        <a href="#" className="hover:text-blue-400 transition-colors w-fit">Privacidade</a>
                    </div>

                    {/* Coluna 4: Newsletter */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-bold text-lg mb-2">Fique Alerta</h3>
                        <p className="text-sm text-slate-400">
                            Receba notificações urgentes no seu email.
                        </p>
                        <form className="flex flex-col gap-2 mt-1" onSubmit={(e) => { e.preventDefault(); alert('Inscrito com sucesso na newsletter!'); }}>
                            <input 
                                type="email" 
                                placeholder="Seu melhor email" 
                                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                required
                            />
                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 transition-colors shadow-lg">
                                Inscrever-se
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divisória Base */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-500 text-center md:text-left">
                        © {new Date().getFullYear()} Litoral Alerta. Todos os direitos reservados.
                    </p>

                    {/* Redes Sociais */}
                    <div className="flex items-center gap-5">
                        <a href="#" className="opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all">
                            <img src={instagram} alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="#" className="opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all">
                            <img src={twitter} alt="Twitter" className="w-6 h-6" />
                        </a>
                        <a href="#" className="opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all">
                            <img src={facebook} alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all">
                            <img src={youtube} alt="YouTube" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}