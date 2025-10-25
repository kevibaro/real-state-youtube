import { Transition} from "../Transition";
import  Image from "next/image";

export function About() {
    return (
       <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center max-w-xl mb-7" id="about">
            <h4 className="text-slate-700">Sobre nosotros</h4>
            <h2 className="my-4 text-3xl font-semibold">Más de 1.000 viviendas para vender y comprar en colombia</h2>
            <p className="mb-10 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptatibus vero saepe earum illum dolor sequi. Accusantium numquam molestias aliquid modi autem voluptatum est vel, atque, sequi minus alias possimus?</p>
            <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-slate-700  hover:bg-black">Cargar más</button>
        </div>
            <div className="flex items-center justify-center">
                <Image src="/assets/house.jpeg" alt="about" width={300} height={450} className="w-auto h-auto" priority />

            </div>

       </Transition>
    )
}
