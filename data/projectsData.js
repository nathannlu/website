/*
const projectsData = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]
*/

const projectsData = [
  { 
    title: 'Bain Capital Ventures Miami tech week',
    subtitle: 'Event NFTs',
    description: 'Helped one of the leading venture capital firms launch their NFT collection for their tech week event. Created website, NFTs, and collected email addresses',
    //src: 'https://ucarecdn.com/696189d5-5394-4521-b928-ddbbe6312545/',
    src: '/static/images/bcv_preview.png',
    link: 'https://bain-capital-miami.netlify.app/',
  },
  { 
    title: 'Semantic',
    subtitle: 'Codebase explainer',
    description: 'Inquire about code functionality in large codebases. Ask functionality related questions or search for code. Developed a Lambda function that can process codebases with 100,000 files, and uploads to a vector database for fast search. SQS queue is used to track events & progress.',
    //src: 'https://ucarecdn.com/696189d5-5394-4521-b928-ddbbe6312545/',
    src: '/static/images/sem_preview.png',
    link: 'https://sem.sh/',
  },
  { 
    title: 'GPT website builder',
    subtitle: '',
    description: 'Build a website by explaining in plain english. Uses GPT to construct a domtree. I prompt engineered GPT to speak in a custom language and built a parser that translates. This enables for faster and more accurate requests.',
    src: '/static/images/ai-website_preview.png',
    link: 'https://gpt2website.vercel.app/',
  },
]

export default projectsData
