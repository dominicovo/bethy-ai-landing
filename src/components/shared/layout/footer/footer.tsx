import RevealAnimation from '@/src/components/animation/reveal-animation';
import FooterBottom from './footer-bottom';
import FooterBrand from './footer-brand';

const Footer = () => (
  <footer className="bg-background-5 pt-20 pb-7 lg:pt-30 xl:pt-44">
    <div className="main-container">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-6 border-stroke-1/10 space-y-16 rounded-[30px] border p-9">
          <div className="grid grid-cols-12 gap-6 justify-items-center">
            <FooterBrand />
          </div>
          <FooterBottom />
        </div>
      </RevealAnimation>
    </div>
  </footer>
);

export default Footer;
