import { Paragraph } from '@/components/Paragraph';
import Link from '@/components/Link';

export const ProjectCard = ({ video, src, backupSrc, title, subtitle, description, href }) => {
  return (
              <Link key={title} href={href}>
    <div className="mb-12 cursor-pointer project-card">
      <div className="relative bg-blue-500 mb-4 rounded-md overflow-hidden" style={{height:'480px'}}>
        {video ? (
          <video 
            className="absolute w-full h-full"
            poster={backupSrc}
            style={{objectFit: 'cover'}}
            preload="auto"
            autoPlay 
            muted
            loop
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img className="absolute w-full h-full" style={{objectFit: 'cover'}} src={src} />
        )}
      </div>
      <div>
        <h3 className="text-xl md:text-2xl mb-1">
          <span className="project-card__title">{title}</span> <span className="text-gray-600 font-normal">— {subtitle}</span>
        </h3>
        <Paragraph>
          {description}
        </Paragraph>
      </div>
    </div>
              </Link>
  )
}
