import { CarouselType } from "./types.ts";

type CarouselProps = CarouselType;
export const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4 max-w-screen-2xl touch-auto">
      {items.map((item, index) => (
        <div className="carousel-item" key={`${item.url}${index}`}>
          <img src={item.url} className="rounded-box carousel-image" />
        </div>
      ))}
    </div>
  );
};
