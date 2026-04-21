import logo from '../assets/logo.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'



export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white py-6 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col  gap-3">


                {/* NAVEGAÇÃO DO MENU NO FOOTER*/}
                <nav className=" flex gap-20 mx-auto text-lg font-bold">
                    <a href="#" className="hover:text-gray-300">Home</a>                  
                    <a href="#" className="hover:text-gray-300">Notícias</a>
                    <a href="#" className="hover:text-gray-300">Sobre Nós</a>
                    <a href="#" className="hover:text-gray-300">Prevenção</a>
                    <a href="#" className="hover:text-gray-300">Comunidade</a>
                </nav>
                <img src={logo} alt="Logo" className="w-35  " />

                {/* REDE SOCIAIS */}
                <div className="flex justify-center gap-6 mt-4">
                    <a href="#" className="hover:text-gray-300">
                        <img src={instagram} alt="Instagram" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <img src={twitter} alt="twitter" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <img src={facebook} alt="Facebook" className="w-6 h-6" />
                    </a>
                     <a href="#" className="hover:text-gray-300">
                        <img src={youtube} alt="youTube" className="w-6 h-6" />
                    </a>
                </div>

                {/* DIREITOS RESERVADOS */}
                <p className="text-sm text-center align-text-bottom">
                    © {new Date().getFullYear()} - Todos os direitos reservados - Litoral Alerta
                </p>


            </div>
        </footer>
    );
}