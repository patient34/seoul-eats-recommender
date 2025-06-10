
export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  priceRangeValue: number;
  image: string;
  location: string;
  openHours: string;
  specialties: string[];
  description: string;
}

export const restaurants: Restaurant[] = [
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
  },
  {
    id: 4,
    name: "김가네 BBQ",
    cuisine: "한식",
    rating: 4.7,
    reviewCount: 3241,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "이태원",
    openHours: "오후 5:00 - 오전 2:00",
    specialties: ["갈비", "삼겹살", "소주"],
    description: "최고급 한우로 만든 고기와 전통 밑반찬이 일품인 고급 한식당입니다."
  },
  {
    id: 5,
    name: "타이 방콕",
    cuisine: "태국",
    rating: 4.3,
    reviewCount: 756,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400",
    location: "연남동",
    openHours: "오전 11:00 - 오후 9:30",
    specialties: ["팟타이", "똠양꿍", "망고스틴"],
    description: "정통 태국 요리를 저렴한 가격에 맛볼 수 있는 현지인이 운영하는 맛집입니다."
  },
  {
    id: 6,
    name: "비스트로 서울",
    cuisine: "프랑스",
    rating: 4.9,
    reviewCount: 428,
    priceRange: "$$$$",
    priceRangeValue: 4,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "청담동",
    openHours: "오후 6:00 - 오후 11:00",
    specialties: ["파인다이닝", "와인페어링", "플라밍"],
    description: "미슐랭 셰프가 선보이는 프랑스 정통 요리와 완벽한 서비스를 경험하세요."
  },
  {
    id: 7,
    name: "차이나타운",
    cuisine: "중식",
    rating: 4.2,
    reviewCount: 1876,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400",
    location: "신촌",
    openHours: "오전 11:00 - 오후 10:00",
    specialties: ["짜장면", "탕수육", "마파두부"],
    description: "전통 중화요리의 깊은 맛을 현대적으로 재해석한 퓨전 중식당입니다."
  },
  {
    id: 8,
    name: "멕시칸 칸티나",
    cuisine: "멕시코",
    rating: 4.5,
    reviewCount: 634,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
    location: "마포구",
    openHours: "오후 5:00 - 오전 1:00",
    specialties: ["타코", "부리또", "마가리타"],
    description: "활기찬 분위기 속에서 즐기는 정통 멕시코 요리와 칵테일의 완벽한 조화입니다."
  },
  {
    id: 9,
    name: "인도 커리하우스",
    cuisine: "인도",
    rating: 4.1,
    reviewCount: 892,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "용산구",
    openHours: "오전 11:30 - 오후 10:00",
    specialties: ["커리", "난", "라씨"],
    description: "인도 현지의 향신료로 만든 정통 커리와 갓 구운 난을 맛보실 수 있습니다."
  }
];
