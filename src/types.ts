export const CHECKOUT_URL = "https://pay.lowify.com.br/checkout.php?product_id=KH9fIx";
export const DOWNSELL_CHECKOUT_URL = "https://pay.lowify.com.br/go.php?offer=c8e3405a";
export const POSTER_URL = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTELJ4n6R4q-t_MwtenAS1Ru4ulzMl7NNDOZxbbaIr9qDjCtAgZ";
export const VIDEO_EMBED_URL = "https://app.litevideo.net/embed/bda64cf1-b73e-41af-81b9-ef9e843ace13?ar=9%3A16&sc=0&st=0&ap=1&lp=0&cc=171717&ic=ff0000&ib=ff0000&io=48&pc=da2525&ph=8&pi=square&sk=bunny&ct=%5B%5B%5D%5D";

export interface Testimonial {
  name: string;
  avatar: string;
  time: string;
  comment: string;
  stars: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
