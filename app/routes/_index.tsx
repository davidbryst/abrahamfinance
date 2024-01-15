import type { MetaFunction } from "@remix-run/node";
import Footer from "~/component/footer";
import Navbar from "~/component/navbar";
import video from "../../public/img/slide3.mp4";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Accueil | AF" },
    { name: "page d'accueil du site abraham finance", content: "Bonne arrivée sur Abraham finance" },
  ];
};
//      <div className="bg-gray-900 bg-gradient-to-b from-transparent to-black">
//        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//        </div>
//      </div>

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Navbar />
      <div className="flex flex-shrink-0 w-full h-[100vh] overflow-hidden items-center mr-10 relative">
        <img className=" h-full w-full object-cover object-center" src="./img/slide.jpg" alt="img"/>
        <div className="absolute w-full h-full bg-black  opacity-60"></div>
        <div className="absolute w-full h-full flex justify-center items-center">
          <span className="text-center font-BookA lg:text-4xl text-3xl text-AF-gray-100">Gere vos finance avec <span className="text-AF-bleu-100 font-serif lg:text-8xl text-6xl font-thin"><br />Abraham Finance</span></span>
        </div>
      </div>
      <div id="apropos" className="h-[100vh] bg-AF-gray-100 flex flex-col items-center">
        <div className="flex flex-[2] w-[60%] flex-col justify-center items-center gap-8">
          <span className="text-center font-BookA md:text-2xl text-slate-900">A propos de <span className="text-AF-bleu-900 font-serif text-2xl md:text-4xl font-thin"><br />Abraham Finance</span></span>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-16">
            <div className="xl:w-[85%] w-[60%] rounded shadow overflow-hidden">
              <img className=" h-full w-full object-cover object-center" src="/img/photo-perso/pp1.jpg" alt="img"/>
            </div>
            <div className="xl:w-[50em] w-[25em] md:text-xl md:py-10 px-10 pb-5">
              <p><span className="text-AF-bleu-900 font-serif md:text-xl font-thin">Abraham Finance</span> est née d'une volonté d'aider notre génération à mieux gérer son argent afin que qu'elle soit d'autant plus épanouie et prospère ❤🔥🎉. <br />

Cette plateforme digitale mettra gratuitement à votre disposition des conseils et astuces pratiques de gestion, d'épargne et d'investissement financiers. <br />

Croyant qu'une communauté mieux instruite est d'autant plus enclin à se développer. <br />

Alors n'hésitez surtout pas à  vous abonner, liker et partager 🙌🏾💯🔥

Ensemble, donnons de la force à cette vision 🌟

Seul on va vite, ensemble on va loin ❤

.</p>
            </div>
          </div>
        </div>
        
      </div>
      


      <div id="moi" className="bg-gray-900 mt-2 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 lg:py-20 lg:max-w-none ">
            <h2 className="text-2xl  font-bold text-gray-900">Collections</h2>

            <div className="lg:mt-6 mt-0 flex flex-col lg:flex-row lg:gap-28 gap-10 items-center">
              
              <div key={'callout.name'} className="group relative">
                <div className="flex gap-5 scale-90">
                  <div className="flex flex-col gap-5 items-end">
                    <div className="h-80 w-80 overflow-hidden rounded-lg bg-white border-white ">
                      <img src='/img/photo-perso/pp5.jpg' alt='callout.imageAlt' className="w-full h-auto " />
                    </div>
                    <div className="h-52 w-52 overflow-hidden rounded-lg bg-white border-white ">
                      <img src='/img/photo-perso/pp6.jpg' alt='callout.imageAlt' className="w-full h-auto " />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="h-56 w-56 overflow-hidden rounded-lg bg-white border-white ">
                      <img src='/img/photo-perso/pp4.jpg' alt='callout.imageAlt' className="w-full h-auto " />
                    </div>
                    <div className="h-72 w-72 overflow-hidden rounded-lg bg-white border-white ">
                      <img src='/img/photo-perso/pp3.jpg' alt='callout.imageAlt' className="w-full h-auto " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50em] w-[25em] md:text-xl lg:py-10 px-10">
                <p className="text-white"><span className="text-AF-bleu-900 font-serif md:text-xl font-thin">Abraham Finance</span> est née d'une volonté d'aider notre génération à mieux gérer son argent afin que qu'elle soit d'autant plus épanouie et prospère ❤🔥🎉. <br />

Cette plateforme digitale mettra gratuitement à votre disposition des conseils et astuces pratiques de gestion, d'épargne et d'investissement financiers. <br />

Croyant qu'une communauté mieux instruite est d'autant plus enclin à se développer. <br />

Alors n'hésitez surtout pas à  vous abonner, liker et partager 🙌🏾💯🔥

Ensemble, donnons de la force à cette vision 🌟

Seul on va vite, ensemble on va loin ❤

.</p>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[50vh] bg-AF-gray-100 flex flex-col items-center relative">
        <video src={video} muted autoPlay loop className="object-cover w-full h-full absolute"/>
        <div className="absolute w-full h-full bg-black opacity-70"></div>
        <div className="flex flex-[2] w-[60%] flex-col justify-center items-center gap-8 z-10">
          <span className="text-center font-BookA text-2xl text-white">Suivre les articles de abraham finance <span className="text-AF-bleu-900 font-serif text-4xl font-thin"><br />Abraham Finance</span></span>
          <Link to="#" className="text-gray-900 bg-white rounded-md px-3 py-2 text-2xl font-bold ">Voire les articles</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
