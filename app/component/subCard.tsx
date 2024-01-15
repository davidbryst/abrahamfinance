export default function SubCard() {
    return ( 
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <h5 className="mb-4 text-xl font-medium text-gray-500">Plan Normale</h5>
        <div className="flex items-baseline mb-5 text-gray-900">
            <span className="text-3xl font-extrabold tracking-tight">10.000</span>
            <span className="text-1xl font-semibold">FCFA</span>
            <span className="ms-1 text-xl font-normal text-gray-500">/month</span>
        </div>
        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Acheter </button>
        {/* <ul role="list" className="space-y-5 my-7"> */}
        <ul className="space-y-5 my-7">
            <li className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Suivie financier</span>
            </li>
            <li className="flex">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ms-3">conseile financier</span>
            </li>
            
            <li className="flex line-through decoration-gray-500">
                <svg className="flex-shrink-0 w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ms-3">aide a l'investicement</span>
            </li>
        </ul>
    </div>
    )
}