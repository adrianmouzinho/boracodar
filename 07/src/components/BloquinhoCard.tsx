import { MapPin } from 'lucide-react'

interface BloquinhoCardProps {
  imageUrl: string;
  title: string;
  description: string;
  city: string;
}

export function BloquinhoCard({ imageUrl, title, description, city }: BloquinhoCardProps) {
  return (
    <div className="overflow-hidden max-w-[24rem] border border-zinc-300 rounded-xl max-[660px]:max-w-full">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full"
      />

      <div className="grid gap-4 p-4">
        <strong className="font-bold text-xl leading-[1.4] text-dark">{title}</strong>
        <span className="leading-[1.6] text-black/75">{description}</span>
        <div className="flex items-center gap-2">
          <MapPin size={20} className="text-salmon" />
          <span className="leading-[1.6] text-black/75">{city}</span>
        </div>
      </div>
    </div>
  )
}