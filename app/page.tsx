import CardDemo from "@/components/blocks/cards-demo-3";
import { Navbar } from "@/components/global/navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Cover } from "@/components/ui/cover";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { WobbleCard } from "@/components/ui/wobble-card";
import { prices, products } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative items-center justify-center ">
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <section>
            <ShootingStars />
            <StarsBackground />
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col">
                  <HoverBorderGradient>
                    Start for free today
                  </HoverBorderGradient>
                  <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                    Automate Work at <Cover>Warp speed</Cover>
                  </h1>
                </div>
              }
            >
              <Image
                src={"/temp-banner.png"}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </section>
          <section>
            <HeroParallax
              products={products.map((product) => ({
                title: product.title,
                link: product.link,
                thumbnail: product.thumbnail,
              }))}
            />
          </section>
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mt-24">
              <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
              >
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Gippity AI powers the entire universe
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    With over 100,000 mothly active bot users, Gippity AI is the
                    most popular AI platform for developers.
                  </p>
                </div>
                <Image
                  src="/temp-banner.png"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  No shirt, no shoes, no weapons.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  If someone yells “stop!”, goes limp, or taps out, the fight is
                  over.
                </p>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                  <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Signup for blazing-fast cutting-edge state of the art
                    Gippity AI wrapper today!
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    With over 100,000 mothly active bot users, Gippity AI is the
                    most popular AI platform for developers.
                  </p>
                </div>
                <Image
                  src="/p4.png"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
              </WobbleCard>
            </div>
          </section>
          <section>
            <div>
              <CardDemo prices={prices} />
            </div>

            {/* <div>
              <CardDemo></CardDemo>
            </div>
            <div>
              <CardDemo></CardDemo>
            </div> */}
          </section>
        </div>
      </section>
    </main>
  );
}
