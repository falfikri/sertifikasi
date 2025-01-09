import TechCard from "./TechCard";

export default function Tech(){
    return(
        <>
            <div className="bg-[#4C585B] w-screen min-h-[300px] p-8">
                <h1 className="text-4xl text-white font-bold mb-2">Tech</h1>
                <div className="w-20 border-4 mb-8"/>

                <div className="flex justify-center items-center w-full flex-wrap gap-8">
                    <TechCard imageUrl="/img/go3.png" techStack="golang"/>
                    <TechCard imageUrl="/img/js2.png" techStack="JavaScript"/>
                    <TechCard imageUrl="/img/lara3.png" techStack="Laravel"/>
                </div>
            </div>
        </>
    )
}