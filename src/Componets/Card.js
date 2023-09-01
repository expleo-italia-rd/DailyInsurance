

'use client';

import { Card } from 'flowbite-react';

export default function CardWithDecorativeImage() {
  return (
    <Card className='w-full h-[85%]'>
      {/* <img src={cardImg} className='w-full h-[40%]' alt='img card'/> */}
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
        Accedi ai nostri servizi        
        </p>
      </h5>
      <p className=" font-serif text-gray-700 dark:text-gray-400 overflow-auto">
        <span>
        Benvenuti nell'app di geolocalizzazione assicurativa per auto, un nuovo modo di vivere l'assicurazione. Sfruttando il GPS avanzato, personalizziamo le tariffe in base al tuo stile di guida. La tua prudenza è premiata con costi più bassi. Monitora il punteggio di guida, ricevi consigli per migliorare e accedi a sconti esclusivi. In caso di necessità, l'assistenza stradale è a portata di mano. Semplifica la tua assicurazione auto: scarica l'app oggi e prendi il controllo del tuo percorso assicurativo. Guida in sicurezza, risparmia intelligentemente.
        </span>
      </p>
    </Card>
  )
}