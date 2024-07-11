export type ItemType = {
  text: string;
  url: string;
};
export type MenuType = {
  img: string;
  items?: ItemType[];
};
export type PopupType = {
  headline: string;
  subheadline: string;
  map: boolean;
};
export type NavbarType = {
  title: string;
  effect: boolean;
  menu: MenuType;
  popup?: PopupType;
};
export type CarouselType = {
  items: ItemType[];
};
export type SchemaType = {
    theme: string;
    headline: string;
    navbar: NavbarType;
    carousel: CarouselType;
}
