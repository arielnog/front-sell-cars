import { FaWhatsapp, FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-[#343A40CC] items-end py-[44.53px] px-4 sm:px-0">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-6">
          <div className="hidden sm:block">
            <h2 className="mb-6 text-[18px] text-sm font-semibold text-white dark:text-white">Encontre seu veículo</h2>
            <ul className="text-white text-[14px] dark:text-white font-normal">
              <li className="mb-3">
                <a href="#" className="hover:underline">Encontre seu veículo</a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">Lojas</a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">Promoções</a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">Vantagens</a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">Garantia Mais</a>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <h2 className="mb-6 text-[18px] text-sm font-semibold text-white dark:text-white">A Empresa</h2>
            <ul className="text-white text-[14px] dark:text-white font-normal">
              <li className="mb-3">
                <a href="#" className="hover:underline">Sobre</a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">Delivery</a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">Aviso de Privacidade</a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">Blog Seminovos</a>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <h2 className="mb-6 text-[18px] text-sm font-semibold text-white dark:text-white">Atendimento</h2>
            <ul className="text-white text-[14px] dark:text-white font-normal">
              <li className="mb-3">
                <a href="#" className="hover:underline">Perguntas Frequentes</a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">Fale Conosco</a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">Pós-Vendas</a>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <h2 className="mb-6 text-[18px] text-sm font-semibold text-white dark:text-white">Lojistas</h2>
            <ul className="text-white text-[14px] dark:text-white font-normal">
              <li className="mb-3">
                <a href="#" className="hover:underline">Acesse SEminovos Atacado</a>
              </li>
            </ul>
          </div>

          <div className="mx-auto">
            <ul className="text-white text-[14px] dark:text-white font-normal">
              <li className="mb-3">
                <a href="#" className="hover:underline">Atendimento ao Cliente</a>
              </li>
              <li className="mb-3 flex gap-1 items-center">
                
                  <span className="bg-[#7D28F7] py-2 px-3 rounded">
                    0800 000 000
                  </span>
                  <span className="bg-[#4AC959] py-2 px-1.5 rounded">
                    <FaWhatsapp size={20} />
                  </span>
                
              </li>
            </ul>
          </div>

          <div className="mx-auto">
            <h2 className="mb-6 text-[18px] text-sm font-semibold text-white dark:text-white">Siga a gente</h2>
            <ul className="text-white text-[14px] dark:text-white font-normal">
              <li className="mb-3 flex gap-1 items-center">
                  <span className="bg-[#7D28F7] py-2 px-1.5 rounded">
                    <FaWhatsapp size={20} />
                  </span>
                  <span className="bg-[#7D28F7] py-2 px-1.5 rounded">
                    <FaWhatsapp size={20} />
                  </span>
                  <span className="bg-[#7D28F7] py-2 px-1.5 rounded">
                    <FaWhatsapp size={20} />
                  </span>
                  <span className="bg-[#7D28F7] py-2 px-1.5 rounded">
                    <FaWhatsapp size={20} />
                  </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;