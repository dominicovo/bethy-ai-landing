import BethyHomepage from '@/src/components/home/bethy-homepage';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Bethy AI | Calm, visual repair guidance',
    'Bethy AI helps renters and homeowners diagnose repair issues from a photo, follow clear step-by-step guidance, and stay calm when the job changes midway.',
    'https://bethy-ai-landing.vercel.app/',
    'https://bethy-ai-landing.vercel.app/logo.png'
  ),
};

const Page = () => <BethyHomepage />;

export default Page;
