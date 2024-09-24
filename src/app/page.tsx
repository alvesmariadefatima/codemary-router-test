import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold mb-7">Acessar Perfil</h1>

      <div className="flex flex-col">
        <Link href="/profiles/alvesmariadefatima?lang=pt" className="hover:underline">
          alvesmariadefatima
        </Link>
        <Link href="/profiles/joaopedro?lang=pt" className="hover:underline">
          João Pedro
        </Link>
        <Link href="/profiles/gabrielavila?lang=pt" className="hover:underline">
          Gabriel Ávila
        </Link>
      </div>
    </>
  );
}