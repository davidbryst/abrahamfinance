import { Link } from "@remix-run/react";
import { useRef } from "react";

export default function Navbar() {
  var element = useRef<HTMLDivElement>(null);
  function dis() {
    console.log(element.current?.classList.toggle("hidden"));
    
  }
    return (
      <nav className="sm:bg-transparent bg-AF-gray-100 before:absolute before:block before:h-10 sm:before:h-24  before:w-full before:bg-AF-gray-100 fixed w-full z-20 mb-[10vh] transition-all">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex sm:h-48 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button onClick={()=>dis()} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center mr-10 ">
                <img className="h-20 sm:h-32 w-auto rounded shadow" src="/img/logo-size-3.png" alt="Abraham Finance"/>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <Link onClick={()=>dis()} to="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">ACCUEIL</Link> */}
                  <Link onClick={()=>dis()} to="/" className="text-AF-gray-900 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">ACCUEIL</Link>
                  <Link onClick={()=>dis()} to="/#apropos" className="text-AF-gray-900 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">A PROPOS</Link>
                  <Link onClick={()=>dis()} to="/#moi" className="text-AF-gray-900 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">QUI SUIS JE</Link>
                  <Link onClick={()=>dis()} to="/blog" className="text-AF-gray-900 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">BLOGUE</Link>
                  <Link onClick={()=>dis()} to="/subscription" className="text-AF-gray-900 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium">ABONNEMENT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={element} className="sm:hidden hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <Link onClick={()=>dis()} to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">ACCUEIL</Link> */}
            <Link onClick={()=>dis()} to="/" className="text-AF-gray-900 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium">ACCUEIL</Link>
            <Link onClick={()=>dis()} to="/#apropos" className="text-AF-gray-900 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium">A PROPOS</Link>
            <Link onClick={()=>dis()} to="/#moi" className="text-AF-gray-900 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium">QUI SUIS JE</Link>
            <Link onClick={()=>dis()} to="/blog" className="text-AF-gray-900 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium">BLOGUE</Link>
            <Link onClick={()=>dis()} to="/subscription" className="text-AF-gray-900 hover:text-gray-900 block rounded-md px-3 py-2 text-base font-medium">ABONNEMENT</Link>
          </div>
        </div>
      </nav>
    )
}