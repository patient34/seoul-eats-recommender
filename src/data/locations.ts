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

// Daegu restaurant data
export const daeguRestaurants = [
  {
    id: 31,
    name: "육즙",
    cuisine: "한식",
    rating: 4.5,
    reviewCount: 1234,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://www.beyondkimchee.com/wp-content/uploads/2023/02/samgyupsal-thumbnail-500x500.jpg",
    location: "대봉동",
    openHours: "오후 4:00 - 오전 1:00 (주말 오후 2:00 - 오전 1:00)",
    specialties: ["본삼겹", "삼겹살", "꽃복살"],
    description: "육즙은 숙성 삼겹살과 다양한 부위의 숯불구이를 전문으로 하는 고깃집입니다."
  },
  {
    id: 32,
    name: "음밀한양",
    cuisine: "중식",
    rating: 4.7,
    reviewCount: 987,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://omnivorescookbook.com/wp-content/uploads/2016/07/1607_Xinjiang-Lamb-Skewer_004.jpg",
    location: "대봉동",
    openHours: "오후 4:30 - 오후 11:50",
    specialties: ["음밀한커플세트", "냉장 생 양갈비", "양숄더소금구이"],
    description: "음밀한양은 감각적인 분위기 속에서 참숯에 구워낸 양고기를 즐길 수 있는 양고기 전문점입니다."
  },
  {
    id: 33,
    name: "와래이수제꼬치전문점",
    cuisine: "일식",
    rating: 4.6,
    reviewCount: 856,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://rimage.hitosara.com/gg/image/0031563191/0031563191E5_370x248s.jpg",
    location: "대봉동",
    openHours: "오후 4:00 - 오전 1:00 (주말 오후 12:00 - 오전 1:00)",
    specialties: ["타코야끼", "이고가 젤 낫제 세트", "와래이 닭꼬치"],
    description: "대구 중구 김광석거리 인근에 위치한 와래이 수제꼬치전문점은 숯불향 가득한 수제 꼬치와 다양한 안주 메뉴로 유명한 일식 꼬치 전문점입니다."
  },
  {
    id: 34,
    name: "씨티씨커피로스터스 남산본점",
    cuisine: "카페",
    rating: 4.8,
    reviewCount: 1123,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://danielfooddiary.com/wp-content/uploads/2024/11/artistbakery1-scaled.jpg",
    location: "남산동",
    openHours: "오전 10:00 - 오후 10:00 (주말 오전 11:00 - 오후 9:00)",
    specialties: ["라떼", "초당옥수수커피", "우유생크림소금빵"],
    description: "씨티씨커피로스터스 남산본점은 감각적인 인테리어와 직접 로스팅한 원두, 그리고 매장에서 직접 구운 소금빵으로 유명한 로스터리 카페입니다."
  },
  {
    id: 35,
    name: "초가식당",
    cuisine: "한식",
    rating: 4.4,
    reviewCount: 2345,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://www.beyondkimchee.com/wp-content/uploads/2023/02/samgyupsal-thumbnail-500x500.jpg",
    location: "동성로1가",
    openHours: "오전 11:30 - 오후 9:00 (오후 3:30 - 오후 5:00 휴식)",
    specialties: ["오징어볶음", "제육볶음", "낙지볶음"],
    description: "초가식당은 불향 가득한 볶음 요리로 유명한 한식당입니다. 특히 오징어볶음, 제육볶음, 낙지볶음 등 매콤한 볶음 요리가 대표 메뉴입니다."
  },
  {
    id: 36,
    name: "파스타하우스",
    cuisine: "양식",
    rating: 4.5,
    reviewCount: 1567,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.squarespace-cdn.com/content/v1/5f0a575f2b3bb20c7584bc42/1689745186851-47OK40CH0UCTNGHIXINI/PizzaPastaKitchen_LeighGriffiths-68.jpg?format=1500w",
    location: "동성로2가",
    openHours: "오전 11:00 - 오후 10:00",
    specialties: ["크림파스타", "토마토파스타", "피자마르게리타"],
    description: "정통 이탈리안 파스타와 피자를 선보이는 양식 전문점입니다."
  },
  {
    id: 37,
    name: "멕시칸레스토랑",
    cuisine: "세계요리",
    rating: 4.3,
    reviewCount: 892,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://citynomads.com/wp-content/uploads/2023/09/Best-Italian-Update-1-Feature.png",
    location: "삼덕동",
    openHours: "오후 5:00 - 오전 12:00",
    specialties: ["부리또", "타코", "케사디아"],
    description: "정통 멕시칸 요리를 맛볼 수 있는 세계요리 전문점입니다."
  },
  {
    id: 38,
    name: "위스키바",
    cuisine: "특별한 술집",
    rating: 4.7,
    reviewCount: 678,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://rimage.savorjapan.com/svj/image/0031669947/photo/0031669947Pulx6AgfGQ0T5g8h5_352x235d80.jpg?t=1748988435",
    location: "남산동",
    openHours: "오후 7:00 - 오전 2:00",
    specialties: ["위스키 온더록", "위스키사워", "치즈플래터"],
    description: "다양한 종류의 위스키와 칵테일을 즐길 수 있는 프리미엄 바입니다."
  },
  {
    id: 39,
    name: "달콤베이커리",
    cuisine: "디저트/베이커리",
    rating: 4.6,
    reviewCount: 1456,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://danielfooddiary.com/wp-content/uploads/2024/11/artistbakery1-scaled.jpg",
    location: "수창동",
    openHours: "오전 8:00 - 오후 8:00",
    specialties: ["크루아상", "치즈케이크", "마카롱"],
    description: "갓 구운 빵과 수제 디저트가 맛있는 베이커리 카페입니다."
  },
  {
    id: 40,
    name: "맛있는갈비집",
    cuisine: "한식",
    rating: 4.5,
    reviewCount: 1890,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://kimchimari.com/wp-content/uploads/2019/07/samgyeopsal-ssam-1-500x500.jpg",
    location: "대신동",
    openHours: "오전 11:00 - 오후 10:00",
    specialties: ["LA갈비", "등갈비", "된장찌개"],
    description: "전통 방식으로 양념한 갈비가 일품인 한식 전문점입니다."
  },
  {
    id: 41,
    name: "스시장인",
    cuisine: "일식",
    rating: 4.8,
    reviewCount: 756,
    priceRange: "$$$$",
    priceRangeValue: 4,
    image: "https://sudachirecipes.com/wp-content/uploads/2021/09/takoyaki-sq-500x500.png",
    location: "북성로1가",
    openHours: "오후 5:30 - 오후 11:00",
    specialties: ["오마카세", "초밥세트", "회덮밥"],
    description: "신선한 자연산 회와 정통 스시를 맛볼 수 있는 일식 전문점입니다."
  },
  {
    id: 42,
    name: "바랄새우",
    cuisine: "한식",
    rating: 4.5,
    reviewCount: 856,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "동일동",
    openHours: "오후 5:00 - 오전 12:00",
    specialties: ["랍스터 치즈구이", "국내산 왕새우구이", "독도새우 회"],
    description: "바랄새우는 바다의 옛말 바랄을 사용한 바다새우라는 의미로 올바른 새우요리를 맛볼 수 있는 국내산 왕새우 전문점입니다."
  },
  {
    id: 43,
    name: "징기스",
    cuisine: "한식",
    rating: 4.4,
    reviewCount: 723,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "대봉동",
    openHours: "오후 5:00 - 오전 1:00",
    specialties: ["양갈비", "명란구이", "양고기"],
    description: "징기스는 대봉동 봉리단길에 위치한 북해도식 양고기 화로구이 전문점입니다."
  },
  {
    id: 44,
    name: "올가닉신라",
    cuisine: "양식",
    rating: 4.7,
    reviewCount: 567,
    priceRange: "$$$$",
    priceRangeValue: 4,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
    location: "대봉동",
    openHours: "오전 11:30 - 오후 10:30",
    specialties: ["스테이크코스", "파스타코스", "쉐어코스"],
    description: "갤러리 신라 안에 있는 유기농 이탈리안 레스토랑입니다. 모든 재료를 유기농으로 고집하는 음식점입니다."
  },
  {
    id: 45,
    name: "산",
    cuisine: "한식",
    rating: 4.6,
    reviewCount: 892,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "종로2가",
    openHours: "오전 11:30 - 오후 9:00 (오후 3:00 - 오후 5:00 휴식)",
    specialties: ["행복품은 산", "미소가 가득한 산", "짝을 찾는 산"],
    description: "한식전문 산은 고급 한식 요리 전문점입니다."
  },
  {
    id: 46,
    name: "마시뜰",
    cuisine: "한식",
    rating: 4.5,
    reviewCount: 678,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "계산동",
    openHours: "오전 10:00 - 오후 10:00",
    specialties: ["전복갈낙탕", "곤드레", "소불고기"],
    description: "마시뜰 계산점은 한식 코스요리와 한우코스, 소갈비코스 등을 맛볼 수 있는 한정식, 한우 전문점입니다."
  },
  {
    id: 47,
    name: "벙글벙글",
    cuisine: "한식",
    rating: 4.8,
    reviewCount: 1234,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "삼덕동",
    openHours: "오전 9:00 - 오후 8:00",
    specialties: ["육개장", "비빔밥", "선짓국"],
    description: "대구육개장으로 유명한 맛집. 오랜 사골 육수에 파, 무, 양지머리만을 이용해서 만드는 50년 전통의 벙글벙글식당 직영점."
  },
  {
    id: 48,
    name: "우각식육식당",
    cuisine: "한식",
    rating: 4.7,
    reviewCount: 945,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "동산동",
    openHours: "오전 10:00 - 오후 10:00",
    specialties: ["한우탕", "특수부위", "갈비살"],
    description: "우각은 한우고기 전문점으로 1+, 1++의 좋은 품질의 한우만 판매하는 한우고기 전문점입니다."
  },
  {
    id: 49,
    name: "마산식당",
    cuisine: "한식",
    rating: 4.6,
    reviewCount: 876,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "포정동",
    openHours: "오전 10:00 - 오후 10:00",
    specialties: ["씨락육국수", "돼지수육", "암뽕"],
    description: "마산식당은 84년에 시작된 돼지국밥과 수육 전문점으로 35년 이상 운영하고 있는 오래된 음식점입니다."
  },
  {
    id: 50,
    name: "통나무집",
    cuisine: "한식",
    rating: 4.5,
    reviewCount: 789,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "동일동",
    openHours: "오전 11:30 - 오후 10:00",
    specialties: ["해물야채볶음", "아귀찜"],
    description: "통나무집은 35년 이상의 전통을 지닌 해물야채볶음 전문점입니다."
  },
  {
    id: 51,
    name: "다전칼국수",
    cuisine: "한식",
    rating: 4.6,
    reviewCount: 856,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "종로2가",
    openHours: "오전 11:30 - 오후 9:00",
    specialties: ["손칼국수", "들깨칼국수", "비빔밥"],
    description: "다전칼국수 직접 반죽하고 저온 숙성시켜 옛 방식대로 손으로 썰어 찰진 국수를 만드는 칼국수 전문점입니다."
  },
  {
    id: 52,
    name: "가창큰나무집 약령시점",
    cuisine: "한식",
    rating: 4.5,
    reviewCount: 723,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "남성로",
    openHours: "오전 10:00 - 오후 9:00",
    specialties: ["영계약백숙", "전복삼계탕"],
    description: "가창큰나무집에서 약령시안에 분점을 오픈 했습니다."
  },
  {
    id: 53,
    name: "사야까",
    cuisine: "일식",
    rating: 4.7,
    reviewCount: 567,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400",
    location: "공평동",
    openHours: "오전 11:30 - 오후 8:30 (오후 3:30 - 오후 4:30 휴식)",
    specialties: ["규코츠라멘", "규코츠 소유라멘", "차슈 큐코츠라멘"],
    description: "사야까는 음식의 기본을 재료에서 찾는다. 일본처럼 300년, 400년 대를 이어 유지할 수 있는 음식점을 만들려면 가장 중요한 것은 당장의 음식 맛이 아니라 재료라고 생각한다."
  },
  {
    id: 54,
    name: "핀투대박양념오뎅",
    cuisine: "한식",
    rating: 4.4,
    reviewCount: 892,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "공평동",
    openHours: "오전 8:30 - 오전 12:00",
    specialties: ["대박떡볶이", "잎새만두", "납작만두"],
    description: "대구백화점 옆에 위치한 양념오뎅이 맛있는 집."
  },
  {
    id: 55,
    name: "원주통닭",
    cuisine: "한식",
    rating: 4.5,
    reviewCount: 678,
    priceRange: "$$",
    priceRangeValue: 2,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "공평동",
    openHours: "오전 11:00 - 오후 10:00",
    specialties: ["튀김통닭", "양념통닭", "야채찜닭"],
    description: "옛날 통닭맛을 느낄 수 있는 곳. 골목에 위치."
  },
  {
    id: 56,
    name: "소두불",
    cuisine: "한식",
    rating: 4.6,
    reviewCount: 945,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "종로2가",
    openHours: "오전 7:00 - 오후 10:30",
    specialties: ["돼지국밥", "순대국밥", "내장국밥"],
    description: "옛날 성당시장에 있던 식당이었으나 현재의 위치로 이전. 쫄깃한 식감의 순대와 수육, 국밥이 유명한 곳."
  },
  {
    id: 57,
    name: "동성로떡볶이(2호점)",
    cuisine: "한식",
    rating: 4.3,
    reviewCount: 1234,
    priceRange: "$",
    priceRangeValue: 1,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "사일동",
    openHours: "오전 10:00 - 오후 10:00",
    specialties: ["동성로떡볶이", "해물떡볶이", "치즈떡볶이"],
    description: "동성로 떡볶이골목에 위치한 원조집. 즉석 떡볶이 형태로 먹은 후 밥을 볶아 먹을 수 있습니다."
  },
  {
    id: 58,
    name: "화림보쌈",
    cuisine: "한식",
    rating: 4.7,
    reviewCount: 856,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "남산동",
    openHours: "오전 9:00 - 오전 5:00",
    specialties: ["보쌈", "아바이순대", "국밥"],
    description: "돼지보쌈 골목의 초기 부터 자리를 지킨 오랜 전통의 맛집. 보쌈골목 모범식당 1호"
  },
  {
    id: 59,
    name: "서울보쌈",
    cuisine: "한식",
    rating: 4.6,
    reviewCount: 789,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400",
    location: "남산동",
    openHours: "오전 5:00 - 오후 11:00",
    specialties: ["보쌈", "수육", "암뽕"],
    description: "서울보쌈은 이름앞에 원조라는 말이 붙어 있다. 아닌게 아니라 [남문시장 돼지보쌈골목]에서 가장 먼저 보쌈을 판매한 원조 가게 이다."
  },
  {
    id: 60,
    name: "실비찜갈비",
    cuisine: "한식",
    rating: 4.8,
    reviewCount: 1123,
    priceRange: "$$$",
    priceRangeValue: 3,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    location: "동인동1가",
    openHours: "오전 9:00 - 오후 10:00",
    specialties: ["한우 찜갈비", "미국산 찜갈비", "찌개"],
    description: "68년부터 2대째 운영되고 있는 찜 갈비 전문점."
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
  },
  {
    id: 'daegu',
    name: 'Daegu',
    country: 'South Korea',
    restaurants: daeguRestaurants
  }
];

export const getRestaurantsByLocation = (locationId: string): Restaurant[] => {
  switch (locationId.toLowerCase()) {
    case 'seoul':
      return seoulRestaurants;
    case 'busan':
      return busanRestaurants;
    case 'jeju':
      return jejuRestaurants;
    case 'daegu':
      return daeguRestaurants;
    default:
      return seoulRestaurants;
  }
};

export const getAllLocations = (): string[] => {
  return ['seoul', 'busan', 'jeju', 'daegu'];
};
