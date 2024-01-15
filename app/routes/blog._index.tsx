import type { MetaFunction } from "@remix-run/node";
import Footer from "~/component/footer";
import Navbar from "~/component/navbar";
import video from "../../public/img/slide2.mp4";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | AF" },
    { name: "page des articles du site abraham finance", content: "les articles" },
  ];
};

export default function BlogSingle() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
    <Navbar />
    <main className="pt-8 pb-16 lg:pt-16 bg-AF-gray-100 antialiased min-h-[100vh]">
        <div className="h-[35vh] mb-[10vh] pb-[0vh] flex items-center justify-center overflow-hidden relative"> 
          <video src={video} muted autoPlay loop className="object-cover object-center w-full h-full absolute"/>
          <div className="absolute w-full h-full bg-black opacity-70"></div>
          <h3 className="text-center font-BookA lg:text-4xl text-2xl text-AF-gray-100 z-10">Blog <span className="text-AF-bleu-100 font-serif lg:text-8xl text-4xl font-thin"><br />Abraham Finance</span></h3>
        </div>
        <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-lg ">
            <div className=" mx-auto w-full max-w-2xl">
                <ol className="relative border-s border-gray-300 ">                  
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-AF-gray-500 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500 ">Dimanche 22 Octobre 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900 ">Le secret du succès du poulet d'or</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 ">vous allez apprendre plus le secret du succès du poulet d'or dans le monde de l'entreprenariat</p>
                        <Link to="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Voire plus <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg></Link>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-AF-gray-500 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500 ">Lundi 04 Decembre 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900 ">Le secret d'une bonne gestion financière</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 ">C’est sous une belle journée ensoleillée à adzopé que, dimanche 14 mai 2023 à adzopé, s’est déroulée la cérémonie de lancement du projet de mis à échelle des associations de valorisation de l’entraide communautaire en côte d’ivoire. plus d 1500…</p>
                        <Link to="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Voire plus <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg></Link>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-AF-gray-500 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500 ">Vendredi 08 Decembre 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900 ">Comment assurer la protection du consommateur de paiements marchands dans la zone UEMOA?</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 ">L’avènement du digital et la percée du téléphone mobile ont permis de faire évoluer les services financiers qui désormais numériques, ont la capacité d’atteindre les populations les plus éloignées. en effet, aucun pays ne saurait ignorer la capacité des services…</p>
                        <Link to="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-AF-gray-500 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Voire plus <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg></Link>
                    </li>
                </ol>
            </div>
        </div>
    </main>

    <Footer/>
    </div>
  )
}