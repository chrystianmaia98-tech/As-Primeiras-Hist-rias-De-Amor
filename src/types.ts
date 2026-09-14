export const CHECKOUT_URL = "https://pay.lowify.com.br/checkout.php?product_id=KH9fIx";
export const DOWNSELL_CHECKOUT_URL = "https://pay.lowify.com.br/go.php?offer=c8e3405a";
export const POSTER_URL = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTELJ4n6R4q-t_MwtenAS1Ru4ulzMl7NNDOZxbbaIr9qDjCtAgZ";
export const VIDEO_ID = "1471411f-6ded-4657-889b-3eef508d8d5b";
export const VIDEO_EMBED_URL = "https://app.litevideo.net/embed/1471411f-6ded-4657-889b-3eef508d8d5b?ar=9%3A16&cc=141414&cs=g&ic=ff0000&ib=ff0000&pc=ff0000&pi=square&ct=%5B%5B%5D%5D";

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
