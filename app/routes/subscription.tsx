import type { MetaFunction } from "@remix-run/node";
import Footer from "~/component/footer";
import Navbar from "~/component/navbar";
import SubCard from "~/component/subCard";
import video from "../../public/img/slide4.mp4";

export const meta: MetaFunction = () => {
  return [
    { title: "Abonnements | AF" },
    { name: "page des abonnements du site abraham finance", content: "des abonnements" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Navbar />
      <main className="pt-8 pb-16 lg:pt-16 bg-AF-gray-100  antialiased min-h-[100vh]">
          <div className="h-[35vh] mb-[10vh] pb-[0vh] flex items-center justify-center overflow-hidden relative"> 
            <video src={video} muted autoPlay loop className="object-cover object-center w-full h-full absolute"/>
            <div className="absolute w-full h-full bg-black opacity-70"></div>
            <h3 className="text-center font-BookA lg:text-4xl text-2xl text-AF-gray-100 z-10">Abonnement <span className="text-AF-bleu-100 font-serif lg:text-8xl text-4xl font-thin"><br />Abraham Finance</span></h3>
          </div>
          <div className="flex flex-col justify-between mx-auto max-w-screen-lg ">
            <div className="mx-auto p-5  grid md:grid-cols-3 gap-5">
              <SubCard />
              <SubCard />
              <SubCard />
            </div>
          </div>
      </main>
      <Footer/>
    </div>
  );
}
