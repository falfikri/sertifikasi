import Image from "next/image";

export default function Introduction(){
    return(
        <>
            <div className="w-screen h-[500px] bg-[#7E99A3]">
                <div className="flex justify-between items-center">
                    <div>
                        <div>
                            <p className="text-black text-2xl font-bold mb-3 mt-6 ml-8">Teknik Informatika</p>
                            <h2 className="text-7xl text-black font-serif ml-8">Hello, I&apos;m</h2>
                            <h2 className="text-7xl text-black font-serif ml-8">Fazli Alfikri</h2>
                        </div>

                        <div className="my-8">
                            <p className="text-white max-w-lg font-mono ml-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quo. Dolore temporibus deleniti assumenda aperiam aspernatur? Magni officiis asperiores laudantium eum deserunt, cumque reprehenderit quis rerum enim beatae! Id, nesciunt.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-96 h-96 mt-14 mr-12">
                        <Image src={'/img/jogo.jpeg'} 
                        alt="Fazli Alfikri"
                        fill={true} 
                        priority= {true} 
                        className="rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}