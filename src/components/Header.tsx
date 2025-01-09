// import { Lusitana } from "next/font/google";

export default function Header() {
    return(
        <>
        <div className="w-screen p-8 bg-[#4C585B] flex justify-between items-center">
            <div>
                <p className="font-bold text-white text-2xl">Fazli Alfikri</p>
            </div>

            <div>
                <ul className="flex justify-between items-center">
                    <li className="text-white text-lg p-2">Home</li>
                    <li className="text-white text-lg p-2">Techs</li>
                    <li className="text-white text-lg p-2">Biograhpy</li>
                    <li className="text-white text-lg p-2">Contacts</li>
                </ul>
            </div>
        </div>
        </>
    )
}