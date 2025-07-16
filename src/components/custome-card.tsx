import Image from "next/image";

interface Prpos {
  text: string;
  src: string;
}

const data: Prpos[] = [
  {
    text: "قهوه ساز ها",
    src: "/cardLogo/bean-coffee.svg",
  },
  {
    text: "آسیاب قهوه",
    src: "/cardLogo/blender.svg",
  },
  {
    text: "ابزار باریستا",
    src: "/cardLogo/eqiupment.svg",
  },
  {
    text: "دم آوری قهوه",
    src: "/cardLogo/coffee.svg",
  },
  {
    text: "تجهیزات بار سرد",
    src: "/cardLogo/equipment-bar.svg",
  },
  {
    text: "کرپ ساز صنعتی",
    src: "/cardLogo/contrast.svg",
  },
  {
    text: "بویلر آب جوش",
    src: "/cardLogo/water.svg",
  },
  {
    text: "سماور صنعتی",
    src: "/cardLogo/smart-boiler.svg",
  },
  {
    text: "شو کیک ",
    src: "/cardLogo/cake.svg",
  },
  {
    text: "دانه قهوه",
    src: "/cardLogo/bean-coffee.svg",
  },
];

const CardCustome = () => {
  return (
    <>
      {data.map((i, index) => (
        <>
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square max-w-[86px] border rounded-lg border-gray-300 flex flex-col items-center justify-center p-2">
              <Image
                src={i.src}
                alt="Icon"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <p className="text-gray-600 mt-2 text-xs md:text-sm font-bold text-center">
              {i.text}
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default CardCustome;
