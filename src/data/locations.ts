
import { Restaurant } from './restaurants';

export interface Location {
  id: string;
  name: string;
  country: string;
  restaurants: Restaurant[];
}

// 서울 음식점 데이터 (기존)
const seoulRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "명동교자",
    cuisine: "한식",
    rating: 4.6,
    reviewCount: 2847,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "명동",
    openHours: "오전 10:00 - 오후 10:00",
    specialties: ["만두", "칼국수", "김치"],
    description: "전통 한식의 진수를 맛볼 수 있는 명동의 대표 맛집입니다. 신선한 재료로 만든 수제 만두가 유명합니다."
  },
  {
    id: 2,
    name: "스시 조",
    cuisine: "일식",
    rating: 4.8,
    reviewCount: 1523,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400",
    location: "강남",
    openHours: "오후 5:00 - 오후 11:00",
    specialties: ["오마카세", "신선한 회", "사케"],
    description: "일본 전통 스시의 정수를 경험할 수 있는 프리미엄 스시 전문점입니다."
  },
  {
    id: 3,
    name: "페스토 이탈리아",
    cuisine: "이탈리아",
    rating: 4.4,
    reviewCount: 967,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
    location: "홍대",
    openHours: "오전 11:30 - 오후 10:30",
    specialties: ["파스타", "피자", "와인"],
    description: "정통 이탈리아 요리를 합리적인 가격에 즐길 수 있는 아늑한 레스토랑입니다."
  }
];

// 부산 음식점 데이터
const busanRestaurants: Restaurant[] = [
  {
    id: 11,
    name: "해운대 회센터",
    cuisine: "한식",
    rating: 4.7,
    reviewCount: 1842,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400",
    location: "해운대",
    openHours: "오전 11:00 - 오후 10:00",
    specialties: ["회", "해산물", "물회"],
    description: "신선한 해산물로 유명한 해운대의 대표 횟집입니다."
  },
  {
    id: 12,
    name: "광안리 비치카페",
    cuisine: "카페",
    rating: 4.3,
    reviewCount: 756,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
    location: "광안리",
    openHours: "오전 9:00 - 오후 11:00",
    specialties: ["커피", "디저트", "오션뷰"],
    description: "광안리 해변을 바라보며 즐기는 특별한 카페 경험을 제공합니다."
  }
];

// 제주 음식점 데이터
const jejuRestaurants: Restaurant[] = [
  {
    id: 21,
    name: "제주 흑돼지 전문점",
    cuisine: "한식",
    rating: 4.8,
    reviewCount: 2134,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "제주시",
    openHours: "오후 5:00 - 오후 11:00",
    specialties: ["흑돼지", "고기구이", "현지맥주"],
    description: "제주도 특산품인 흑돼지로 만든 정통 바베큐를 맛볼 수 있습니다."
  },
  {
    id: 22,
    name: "성산일출봉 해물라면",
    cuisine: "한식",
    rating: 4.5,
    reviewCount: 892,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400",
    location: "성산읍",
    openHours: "오전 8:00 - 오후 8:00",
    specialties: ["해물라면", "전복죽", "성게"],
    description: "성산일출봉을 배경으로 즐기는 신선한 해산물 요리의 진수입니다."
  }
];

export const locations: Location[] = [
  {
    id: 'seoul',
    name: '서울',
    country: '대한민국',
    restaurants: seoulRestaurants
  },
  {
    id: 'busan',
    name: '부산',
    country: '대한민국',
    restaurants: busanRestaurants
  },
  {
    id: 'jeju',
    name: '제주',
    country: '대한민국',
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
