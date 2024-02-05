import { StaticImageData } from "next/image";
import CeylonGinger from "../images/teasImages/CeylonGinger.png";
import HimalayanBliss from "../images/teasImages/HimalayanBliss.png";
import JapaneseSerenity from "../images/teasImages/JapaneseSerenity.png";
import PersianNights from "../images/teasImages/PersianNights.webp";
import ArabianJasmin from "../images/teasImages/ArabianJasmine.png";
import AfricanRooibos from "../images/teasImages/AfricanRooibos.png";
import IranianRose from "../images/teasImages/IranianRose.png";
import TokyoSencha from "../images/teasImages/TokyoSencha.png";
import IndianChai from "../images/teasImages/IndianChai.png";
import MatchaMagic from "../images/teasImages/MatchaMagic.png";

export type TeaProps = {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  characteristics: Record<string, string | boolean>;
  prices: Record<string, number>;
  numberOfSells: number;
};

export const teas: TeaProps[] = [
  {
    name: "Ceylon Ginger",
    id: 1,
    image: CeylonGinger,
    description: "A lovely warming Chai tea with ginger cinnamon flavours.",
    numberOfSells: 250,
    characteristics: {
      origin: "Iran",
      organic: true,
      collection: "Black teas",
      flavour: "Spicy",
      qualities: "Smoothing",
      caffeine: "Medium",
      allergens: "Nuts-free",
      igredients:
        "Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper, Cinnamon sticks, Cardamom, Cinnamon pieces",
    },
    prices: {
      "50g": 3.9,
      "100g": 7.4,
      "170g": 12.0,
      "250g": 16.5,
      "1kg": 58.5,
      sampler: 1.4,
    },
  },

  {
    name: "Himalayan Bliss",
    id: 2,
    image: HimalayanBliss,
    description:
      "Savor the energizing fusion of Himalayan black tea and exotic spices. 'Himalayan Bliss' combines ginger, cinnamon, and a hint of saffron for a sweetly spiced, invigorating experience.",
    characteristics: {
      origin: "Iran",
      organic: true,
      collection: "Black teas",
      flavour: "Sweet",
      qualities: "Energy",
      caffeine: "High",
      allergens: "Soy-free",
      ingredients:
        "Himalayan black tea leaves, Ginger pieces, Cinnamon bark, Cardamom pods, Star anise, Clove buds, Black peppercorns, Saffron strands, Rose petals",
    },
    numberOfSells: 350,

    prices: {
      "50g": 5.42,
      "100g": 10.3,
      "170g": 16.26,
      "250g": 21.68,
      "1kg": 65.04,
      sampler: 2.71,
    },
  },
  {
    name: "Japanese Serenity",
    id: 3,
    image: JapaneseSerenity,
    description:
      "Delight in the tranquil balance of 'Japanese Serenity', a green tea embodying the essence of Zen gardens. Its subtly bitter flavor",
    numberOfSells: 150,
    characteristics: {
      origin: "India",
      organic: true,
      collection: "Green teas",
      flavour: "Bitter",
      qualities: "Relax",
      caffeine: "High",
      allergens: " Lactose-free",
      ingredients:
        "Premium Indian green tea leaves, Matcha powder, Jasmine blossoms, Lemon verbena, Ginkgo biloba leaves",
    },
    prices: {
      "50g": 3.56,
      "100g": 6.76,
      "170g": 10.68,
      "250g": 14.24,
      "1kg": 42.68,
      sampler: 1.78,
    },
  },
  {
    name: "Persian Nights",
    id: 4,
    image: PersianNights,
    description:
      "Journey through a Persian garden with 'Persian Nights', a minty tea blend that detoxifies and refreshes.",
    numberOfSells: 50,
    characteristics: {
      origin: "Iran",
      organic: false,
      collection: "Teaware",
      flavour: "Minty",
      qualities: "Detox",
      caffeine: "Medium",
      allergens: "Gluten-free",
      ingredients:
        "Iranian black tea, Peppermint leaves, Rose petals, Lemon balm, Fennel seeds, Licorice root",
    },
    prices: {
      "50g": 3.22,
      "100g": 6.11,
      "170g": 9.65,
      "250g": 12.86,
      "1kg": 38.58,
      sampler: 1.61,
    },
  },
  {
    name: "Arabian Jasmine",
    id: 5,
    image: ArabianJasmin,
    description:
      "Experience the delicate caress of floral notes with 'Arabian Jasmine', a serene white tea blend perfect for an energizing yet caffeine-free moment.",
    numberOfSells: 220,
    characteristics: {
      origin: "Japan",
      organic: true,
      collection: "White teas",
      flavour: "Floral",
      qualities: "Energy",
      caffeine: "No Caffeine",
      allergens: "Lactose-free",
      ingredients:
        "Japanese white tea leaves, Jasmine flowers, Rosehip, Hibiscus petals, Orange peel",
    },
    prices: {
      "50g": 4.11,
      "100g": 7.8,
      "170g": 12.33,
      "250g": 16.44,
      "1kg": 49.32,
      sampler: 2.06,
    },
  },
  {
    name: "African Rooibos",
    id: 6,
    image: AfricanRooibos,
    description:
      "A naturally sweet and nutty red herbal tea from South Africa, 'African Rooibos' offers a creamy, relaxing experience with each sip.",
    numberOfSells: 200,
    characteristics: {
      origin: "South Africa",
      organic: true,
      collection: "Rooibos",
      flavour: "Creamy",
      qualities: "Relax",
      caffeine: "Medium",
      allergens: "Gluten-free",
      ingredients:
        "South African Rooibos, Vanilla beans, Honeybush, Calendula petals",
    },
    prices: {
      "50g": 5.62,
      "100g": 10.68,
      "170g": 16.86,
      "250g": 22.48,
      "1kg": 67.43,
      sampler: 2.81,
    },
  },
  {
    name: "Iranian Rose",
    id: 7,
    image: IranianRose,
    description:
      "Delight in the floral elegance of 'Iranian Rose', a green tea blend with soothing rose petals, perfect for a detoxifying retreat.",
    numberOfSells: 750,
    characteristics: {
      origin: "Iran",
      organic: false,
      collection: "Green teas",
      flavour: "Floral",
      qualities: "Detox",
      caffeine: "No Caffeine",
      allergens: "Soy-free",
      ingredients:
        "Green tea leaves, Rose petals, Hibiscus, Cardamom, Orange peel",
    },
    prices: {
      "50g": 3.55,
      "100g": 6.74,
      "170g": 10.64,
      "250g": 14.19,
      "1kg": 42.56,
      sampler: 1.77,
    },
  },
  {
    name: "Tokyo Sencha",
    id: 8,
    image: TokyoSencha,
    description:
      "Savor the essence of Japan with 'Tokyo Sencha', a classic green tea known for its rich, grassy flavor and energy-boosting properties.",
    numberOfSells: 500,
    characteristics: {
      origin: "Japan",
      organic: true,
      collection: "Green teas",
      flavour: "Grassy",
      qualities: "Energy",
      caffeine: "Low Caffeine",
      allergens: "Soy-free",
      ingredients:
        "Japanese Sencha leaves, Matcha powder, Dried seaweed, Rice kernels",
    },
    prices: {
      "50g": 3.87,
      "100g": 7.35,
      "170g": 11.61,
      "250g": 15.48,
      "1kg": 46.43,
      sampler: 1.93,
    },
  },
  {
    name: "Indian Chai",
    id: 9,
    image: IndianChai,
    description:
      "Embark on a spicy journey with 'Indian Chai', a traditional tea blend boasting bold spices and a kick of caffeine for digestion.",
    numberOfSells: 150,

    characteristics: {
      origin: "India",
      organic: false,
      collection: "Chai",
      flavour: "Spicy",
      qualities: "Digestion",
      caffeine: "High Caffeine",
      allergens: "Lactose-free",
      ingredients:
        "Assam black tea, Ginger, Cinnamon, Cardamom, Cloves, Black pepper",
    },
    prices: {
      "50g": 5.76,
      "100g": 10.94,
      "170g": 17.28,
      "250g": 23.04,
      "1kg": 69.12,
      sampler: 2.88,
    },
  },
  {
    name: "Matcha Magic",
    id: 10,
    image: MatchaMagic,
    description:
      "Experience the magic of 'Matcha Magic', a vibrant, finely powdered green tea that energizes with a smooth, rich flavor.",
    numberOfSells: 170,
    characteristics: {
      origin: "Japan",
      organic: true,
      collection: "Matcha",
      flavour: "Smooth",
      qualities: "Energy",
      caffeine: "High Caffeine",
      allergens: "Gluten-free",
      ingredients:
        "Pure Japanese Matcha, Spirulina, Natural sweeteners, Rice powder",
    },
    prices: {
      "50g": 4.15,
      "100g": 7.89,
      "170g": 12.46,
      "250g": 16.61,
      "1kg": 49.83,
      sampler: 2.08,
    },
  },
];
