import portrait from '../../assets/saras-portrait.webp'

function HeroPortrait() {
  return (
    <div className="portrait-reveal relative order-2 lg:order-none">
      <div
        aria-hidden
        className="absolute inset-x-[-35%] bottom-0 top-[8%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(165,139,98,0.26),transparent)] blur-2xl"
      />
      <img
        src={portrait}
        width={1087}
        height={1446}
        alt="Portrait of Sri Puspadewi (Saras) with arms crossed"
        fetchPriority="high"
        decoding="async"
        className="block h-[min(62svh,32rem)] w-auto max-w-full object-contain object-bottom drop-shadow-[0_10px_18px_rgba(41,41,35,0.12)] [mask-image:linear-gradient(to_bottom,black_72%,transparent_98%)] sm:h-[min(66svh,40rem)] lg:h-[min(calc(100svh-6.5rem),52vw)] lg:max-h-[60rem] lg:min-h-[30rem]"
      />
    </div>
  )
}

export default HeroPortrait
