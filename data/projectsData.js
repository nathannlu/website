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
    title: 'Opensource AI cloud GPU platform',
    subtitle: '',
    description: 'Allow users with poor compute to run image generation models on the cloud',
    src: 'https://private-user-images.githubusercontent.com/24965772/308785896-9181ff0a-1d27-41f3-93e7-b309ed9d533c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM1MTA3MjUsIm5iZiI6MTcyMzUxMDQyNSwicGF0aCI6Ii8yNDk2NTc3Mi8zMDg3ODU4OTYtOTE4MWZmMGEtMWQyNy00MWYzLTkzZTctYjMwOWVkOWQ1MzNjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODEzVDAwNTM0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRlYTdjNzk2NzI1NmQyMmUzZDBlM2NlMzU2MjY1NWI3ZTE5MWQ0ZmZhM2Y5Y2JiMzVjOGEzNGUxY2RhOWM3Y2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.sT_NaA2rjNwzHZbE0AzuThmQAmjjoHsjR6jOYrv5c8Y',
    link: 'https://github.com/nathannlu/ComfyUI-Cloud',
  },
  { 
    title: 'My own programming language',
    subtitle: '',
    description: 'Recursive descent parser, compiler, and stack-based virtual machine',
    src: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_09_5-Best-Programming-Languages-to-Learn-for-Cybersecurity-Professionals-scaled.jpg',
    link: 'https://github.com/nathannlu/vm',
  },
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
