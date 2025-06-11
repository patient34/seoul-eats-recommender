
import { Restaurant } from './restaurants';

export interface Location {
  id: string;
  name: string;
  country: string;
  restaurants: Restaurant[];
}

// Seoul restaurant data
const seoulRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Myeongdong Gyoza",
    cuisine: "Korean",
    rating: 4.6,
    reviewCount: 2847,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "Myeongdong",
    openHours: "10:00 AM - 10:00 PM",
    specialties: ["Dumplings", "Noodle Soup", "Kimchi"],
    description: "Experience the essence of traditional Korean cuisine at this famous Myeongdong restaurant. Famous for handmade dumplings with fresh ingredients."
  },
  {
    id: 2,
    name: "Sushi Jo",
    cuisine: "Japanese",
    rating: 4.8,
    reviewCount: 1523,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400",
    location: "Gangnam",
    openHours: "5:00 PM - 11:00 PM",
    specialties: ["Omakase", "Fresh Sashimi", "Sake"],
    description: "Experience the essence of traditional Japanese sushi at this premium sushi restaurant."
  },
  {
    id: 3,
    name: "Pesto Italia",
    cuisine: "Italian",
    rating: 4.4,
    reviewCount: 967,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
    location: "Hongdae",
    openHours: "11:30 AM - 10:30 PM",
    specialties: ["Pasta", "Pizza", "Wine"],
    description: "Enjoy authentic Italian cuisine at reasonable prices in this cozy restaurant."
  }
];

// Busan restaurant data
const busanRestaurants: Restaurant[] = [
  {
    id: 11,
    name: "Haeundae Sashimi Center",
    cuisine: "Korean",
    rating: 4.7,
    reviewCount: 1842,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400",
    location: "Haeundae",
    openHours: "11:00 AM - 10:00 PM",
    specialties: ["Sashimi", "Seafood", "Raw Fish Soup"],
    description: "Famous for fresh seafood at this representative sashimi restaurant in Haeundae."
  },
  {
    id: 12,
    name: "Gwangalli Beach Cafe",
    cuisine: "Cafe",
    rating: 4.3,
    reviewCount: 756,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
    location: "Gwangalli",
    openHours: "9:00 AM - 11:00 PM",
    specialties: ["Coffee", "Dessert", "Ocean View"],
    description: "Special cafe experience overlooking Gwangalli Beach."
  }
];

// Jeju restaurant data
const jejuRestaurants: Restaurant[] = [
  {
    id: 21,
    name: "Jeju Black Pork Restaurant",
    cuisine: "Korean",
    rating: 4.8,
    reviewCount: 2134,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "Jeju City",
    openHours: "5:00 PM - 11:00 PM",
    specialties: ["Black Pork", "BBQ", "Local Beer"],
    description: "Taste authentic barbecue made with Jeju's specialty black pork."
  },
  {
    id: 22,
    name: "Seongsan Sunrise Peak Seafood Ramen",
    cuisine: "Korean",
    rating: 4.5,
    reviewCount: 892,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400",
    location: "Seongsan-eup",
    openHours: "8:00 AM - 8:00 PM",
    specialties: ["Seafood Ramen", "Abalone Porridge", "Sea Urchin"],
    description: "Fresh seafood cuisine with Seongsan Sunrise Peak as the backdrop."
  }
];

export const locations: Location[] = [
  {
    id: 'seoul',
    name: 'Seoul',
    country: 'South Korea',
    restaurants: seoulRestaurants
  },
  {
    id: 'busan',
    name: 'Busan',
    country: 'South Korea',
    restaurants: busanRestaurants
  },
  {
    id: 'jeju',
    name: 'Jeju',
    country: 'South Korea',
    restaurants: jejuRestaurants
  }
];

export const getRestaurantsByLocation = (locationId: string): Restaurant[] => {
  const location = locations.find(loc => loc.id === locationId);
  return location ? location.restaurants : [];
};

export const getAllLocations = (): string[] => {
  return locations.map(location => location.name);
};
