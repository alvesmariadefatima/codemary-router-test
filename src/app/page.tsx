import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className="text-xl font-bold mb-7 text-center">Olá, seja bem-vindo (a) ao meu perfil</h1>
        
        {/* Aplicação do grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Coluna da imagem */}
          <div className="text-center md:text-right rounded-lg">
            <Image 
              src="/assets/foto-perfil.png" 
              alt="Foto de Perfil" 
              width={300} 
              height={300} 
              className="rounded-full mx-auto md:mx-0"
            />
          </div>

          {/* Coluna do texto */}
          <div className="flex flex-col text-center md:text-left">
            <p>
              Desenvolvedora Web e estudante de Ciência da Computação, tenho experiência em tecnologias como React, Vue.js, Django e PHP, além de atuar em projetos de inovação com Inteligência Artificial e análise de dados. Fui Embaixadora Tech da Reprograma e do Roga DX 2024. Com passagens por empresas como ART Martins e SEDUC/AL, também atuo como freelancer, criando sites e sistemas web personalizados. Meu objetivo é continuar evoluindo em áreas como desenvolvimento web, liderança e inteligência artificial.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}