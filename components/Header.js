import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { IconList } from "./icons";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      {IconList.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-grow justify-evenly max-w-2xl"
          >
            <HeaderItem title={item.title} Icon={item.Icon} />
          </div>
        );
      })}
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        objectFit="contain"
        alt="Hulu Logo"
      />
    </header>
  );
}
