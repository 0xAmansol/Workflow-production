/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";

export default function CardDemo({
  prices,
}: {
  prices: Array<{
    price: string;
    title: string;
    package: string;
  }>;
}) {
  return (
    <>
      <section className="flex flex-row justify-center gap-16 mt-40">
        {prices.map((price, index) => (
          <div key={index}>
            <Card>
              <CardSkeletonContainer>
                <Skeleton />
              </CardSkeletonContainer>
              <div className="flex justify-start items-baseline my-3">
                <span className="mr-2 text-5xl font-extrabold">
                  {price.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <CardTitle>{price.title}</CardTitle>
              <CardDescription>
                A card that showcases a set of tools that you use to create your
                product.
              </CardDescription>
            </Card>
          </div>
        ))}
      </section>
    </>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <ClaudeLogo className="h-4 w-4 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <GoCopilot className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <OpenAILogo className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <MetaIconOutline className="h-6 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <GeminiLogo className="h-4 w-4 " />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-80 h-auto relative mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[10rem] md:h-[15rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex  items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const ClaudeLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="20"
      viewBox="0 0 24 24"
      width="20"
    >
      <g clip-rule="evenodd" fill-rule="evenodd">
        <path
          d="m4.10131 16.7395c1.15911-.0028 2.09805-.9417 2.10083-2.1008v-.0005-2.1004h-2.10133c-1.15891.0031-2.09755.942-2.10032 2.1009.00277 1.1591.94172 2.098 2.10082 2.1008zm5.26038-4.2016c-1.15911.0027-2.09805.9417-2.10083 2.1008v5.2609c.00305 1.1591.94223 2.0978 2.10133 2.1003 1.15891-.003 2.09751-.9419 2.10031-2.1008v-5.2609c-.003-1.1589-.9419-2.0976-2.10081-2.1003z"
          fill="#e01e5a"
        />
        <path
          d="m7.26086 4.10131c.00278 1.15911.94172 2.09805 2.10083 2.10083h.0005 2.10031v-2.10133c-.003-1.15891-.9419-2.09755-2.10081-2.10032-1.15911.00277-2.09805.94172-2.10083 2.10082zm4.20174 5.26037c-.0028-1.1591-.9418-2.09805-2.10087-2.10082h-.00051-5.2609c-1.1591.00305-2.09782.94222-2.10032 2.10133.00305 1.15891.94192 2.09751 2.10083 2.10031h5.2614c1.15887-.003 2.09757-.9419 2.10037-2.10082z"
          fill="#36c5f0"
        />
        <path
          d="m14.6389 11.4626c1.1591-.0028 2.0981-.9418 2.1008-2.10087v-.00051-5.2609c-.003-1.1591-.9422-2.09782-2.1013-2.10032-1.1589.00305-2.0975.94192-2.1003 2.10083v5.2614c.003 1.15887.9419 2.09757 2.1008 2.10037zm5.2604-4.20168c-1.1591.00278-2.098.94172-2.1008 2.10083v.0005 2.10035h2.1013c1.1589-.0031 2.0976-.9419 2.1003-2.10085-.0027-1.15911-.9417-2.09805-2.1008-2.10083z"
          fill="#2eb67d"
        />
        <path
          d="m12.5381 14.6387c.0028 1.1591.9417 2.098 2.1008 2.1008h5.2609c1.1591-.0031 2.0978-.9422 2.1003-2.1013-.003-1.1589-.9419-2.0976-2.1008-2.1004h-5.2609c-1.1589.0031-2.0975.942-2.1003 2.1009zm4.2017 5.2604c-.0028-1.1591-.9418-2.0981-2.1009-2.1009h-.0005-2.1003v2.1014c.0031 1.1589.9419 2.0975 2.1008 2.1003 1.1591-.0028 2.0981-.9417 2.1009-2.1008z"
          fill="#ecb22e"
        />
      </g>
    </svg>
  );
};

export const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
    >
      <path
        d="m2 11.9556c0-3.48482 0-5.2272.67818-6.55821.59655-1.17078 1.54843-2.12266 2.71921-2.71921 1.33101-.67818 3.07339-.67818 6.55821-.67818h8.0888c3.4848 0 5.2272 0 6.5582.67818 1.1708.59655 2.1227 1.54843 2.7192 2.71921.6782 1.33101.6782 3.07339.6782 6.55821v8.0888c0 3.4848 0 5.2272-.6782 6.5582-.5965 1.1708-1.5484 2.1227-2.7192 2.7192-1.331.6782-3.0734.6782-6.5582.6782h-8.0888c-3.48482 0-5.2272 0-6.55821-.6782-1.17078-.5965-2.12266-1.5484-2.71921-2.7192-.67818-1.331-.67818-3.0734-.67818-6.5582z"
        fill="#fff"
      />
      <path
        d="m16.0019 12.4507-3.4609-6.10773c.1149-.11699.2471-.19373.3793-.24531-1.0205.33589-1.4888 1.48195-1.4888 1.48195l-6.32255 11.15489c-.08896.3498-.11367.6655-.10255.9436h6.9008z"
        fill="#34a853"
      />
      <path
        d="m16.002 12.4507 4.0947 7.2274h6.9008c.0111-.2781-.0136-.5938-.1026-.9436l-6.3225-11.15489s-.4695-1.14606-1.4889-1.48195c.131.05158.2644.12832.3793.24531z"
        fill="#fbbc05"
      />
      <path
        d="m16.0019 12.4514 3.4609-6.10769c-.1149-.117-.2484-.19374-.3793-.24532-.1508-.04906-.3126-.08177-.4881-.09058h-.1829-4.8212-.1829c-.1742.00755-.3373.04026-.4881.09058-.1309.05158-.2644.12832-.3793.24532z"
        fill="#188038"
      />
      <path
        d="m11.9082 19.6782-3.42133 6.0386s-.11367-.0554-.26812-.1699c.48559.3737.95758.4529.95758.4529h13.43707c.7413 0 .8958-.283.8958-.283.0024-.0013.0037-.0026.0061-.0038l-3.4188-6.0348z"
        fill="#4285f4"
      />
      <path
        d="m11.9086 19.6782h-6.90079c.0346.8203.39045 1.2996.39045 1.2996l.25947.4503c.01854.0265.02966.0416.02966.0416l.56466.9913 1.26771 2.2066c.03707.0893.08032.171.12604.249.01729.0265.03335.0554.05189.0806.00494.0075.00988.0151.01483.0226.15692.2214.33237.3925.50782.5271.15445.1158.26813.1699.26813.1699z"
        fill="#1967d2"
      />
      <path
        d="m20.0967 19.6782h6.9007c-.0346.8203-.3904 1.2996-.3904 1.2996l-.2595.4503c-.0185.0265-.0296.0416-.0296.0416l-.5647.9913-1.2677 2.2066c-.0371.0893-.0803.171-.126.249-.0173.0265-.0334.0554-.0519.0806-.005.0075-.0099.0151-.0149.0226-.1569.2214-.3323.3925-.5078.5271-.1544.1158-.2681.1699-.2681.1699z"
        fill="#ea4335"
      />
    </svg>
  );
};
export const GeminiLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="92"
      viewBox="0 0 92 92"
      width="92"
    >
      <path
        d="m62.4748 30.562c5.3952 7.9815 8.0596 16.9844 7.0636 27.3488-.0042.0439-.0269.0841-.0627.1106-4.0857 3.0186-8.0441 4.8505-11.947 6.0654-.0304.0093-.063.0088-.093-.0015-.0301-.0102-.0563-.0297-.0748-.0556-.9017-1.2623-1.721-2.5932-2.4388-3.9907-.0412-.0824-.0035-.1815.0812-.2139 1.3012-.4933 2.5385-1.0845 3.7286-1.7845.0937-.0553.0997-.1905.0131-.2554-.2526-.1886-.5028-.3869-.7422-.5852-.0448-.0366-.1051-.0438-.1559-.0192-7.7264 3.59-16.1903 3.59-24.008 0-.0508-.0228-.1111-.015-.1547.021-.2388.1983-.4896.3948-.7398.5834-.0866.0649-.0795.2001.0149.2554 1.1901.6867 2.4274 1.2912 3.7267 1.7869.0842.0324.1242.1291.0824.2115-.7022 1.3993-1.5215 2.7302-2.4399 3.9925-.04.0511-.1057.0745-.1678.0553-3.8844-1.2149-7.8428-3.0468-11.9285-6.0654-.034-.0265-.0585-.0685-.0621-.1124-.8324-8.9651.8641-18.0425 7.057-27.3488.015-.0247.0377-.0439.0639-.0553 3.0473-1.4072 6.3118-2.4424 9.7239-3.0336.0621-.0096.1242.0192.1564.0745.4216.751.9035 1.7142 1.2296 2.5013 3.5965-.5528 7.2493-.5528 10.9211 0 .326-.7703.7912-1.7503 1.211-2.5013.0149-.0274.0381-.0494.0662-.0628s.0597-.0175.0902-.0117c3.4139.593 6.6785 1.6282 9.7233 3.0336.0268.0114.0489.0306.0621.0571zm-20.2455 17.0457c.0376-2.6503-1.8828-4.8434-4.2934-4.8434-2.391 0-4.2929 2.1739-4.2929 4.8434 0 2.6689 1.9395 4.8427 4.2929 4.8427 2.3915 0 4.2934-2.1738 4.2934-4.8427zm15.8732 0c.0376-2.6503-1.8828-4.8434-4.2928-4.8434-2.3916 0-4.2935 2.1739-4.2935 4.8434 0 2.6689 1.9395 4.8427 4.2935 4.8427 2.41 0 4.2928-2.1738 4.2928-4.8427z"
        fill="#5865f2"
      />
    </svg>
  );
};

export const MetaIconOutline = ({ className }: { className?: string }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 287.56 191"
      className={className}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="62.34"
          y1="101.45"
          x2="260.34"
          y2="91.45"
          gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0064e1" />
          <stop offset="0.4" stop-color="#0064e1" />
          <stop offset="0.83" stop-color="#0073ee" />
          <stop offset="1" stop-color="#0082fb" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="41.42"
          y1="53"
          x2="41.42"
          y2="126"
          gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#0082fb" />
          <stop offset="1" stop-color="#0064e0" />
        </linearGradient>
      </defs>
      <path
        fill="#0081fb"
        d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z"
      />
      <path
        fill="url(#linear-gradient)"
        d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z"
      />
      <path
        fill="url(#linear-gradient-2)"
        d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z"
      />
    </svg>
  );
};
