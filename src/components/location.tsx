'use client'

import Image from 'next/image'

export default function Location(){
    return(
           <section id="" className="w-full bg-zinc-50 py-16 px-6 md:px-12mt mt-12 slide-left-to-right">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/dublinMap.png" // coloque sua imagem na pasta public
                    alt="Equipe trabalhando junta"
                    width={660}
                    height={479}
                    className="w-full h-auto object-cover"
                  />
                </div>
                    <div>
                        <h2 className="text-5xl font-extrabold text-amber-950 mb-6">Delivery Area</h2>
                        <p className="text-lg text-amber-950 leading-relaxed">
                            We deliver quickly and safely across Dublin, covering all main areas from Dublin 1 to 24, including Clondalkin, Tallaght, Blanchardstown, Swords, Lucan, and more.
                            Our optimized routes ensure fast service in both central and surrounding regions.
                        </p>
                    </div>
              </div>
            </section>
    )
}