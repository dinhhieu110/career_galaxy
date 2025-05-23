import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companies from "../data/companies.json";
import React from "react";
const CompaniesSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full py-10"
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companies?.map(({ name, id, path }) => (
          <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
            <img src={path} alt={name} className="h-9 sm:h-16 object-contain" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CompaniesSlider;
