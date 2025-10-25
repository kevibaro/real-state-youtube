import Image from "next/image";

export function Form() {
    return (
        <div className="px-3">
            <div className="py-4 px-3 rounded-lg shadow-light">
                <div className="flex gap-4">
                    <Image src="/assets/comercial.png" alt="Agente Comercial" width={50} height={50} className="border-2 rounded-full border-secundary" />
                    <div>
                        <p>Kevin Baza</p>
                        <p className="text-slate-700 font-semibold">Agente Comercial</p>
                    </div>
                </div>
                <div className="my-5">
                    <div>
                        <label className="text-sm text-slate-700">Nombre</label>
                        <div className="mt-2">
                            <input type="text" name="name" className="w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="text-sm text-slate-700">Telefono</label>
                        <div className="mt-2">
                            <input
                                id="phone"
                                name="phone"
                                autoComplete="phone"
                                className="w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="text-sm text-slate-700">Descripción</label>
                        <div className="mt-2">
                            <textarea
                                name="descripcion"
                                rows={3}
                                className="w-full rounded-md border-0 py-1.5 text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-5 my-4">
                    <button className="bg-slate-700 px-4 py-2 text-white rounded-lg text-sm">Enviar mensaje</button>
                    <button className="border-[1px] border-slate-700 text-slate-700 px-2 py-2 rounded-lg text-sm">Llamar</button>
                </div>
            </div>
        </div>
    )
}