
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface FilterPanelProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (priceRange: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
}) => {
  const priceRanges = [
    { value: '$', label: '$ (저렴)', description: '1만원 이하' },
    { value: '$$', label: '$$ (보통)', description: '1-3만원' },
    { value: '$$$', label: '$$$ (비쌈)', description: '3-5만원' },
    { value: '$$$$', label: '$$$$ (고급)', description: '5만원 이상' },
  ];

  return (
    <div className="w-64 space-y-4">
      {/* Categories Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">음식 종류</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Badge
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className="cursor-pointer w-full justify-start"
            onClick={() => setSelectedCategory('all')}
          >
            모든 음식
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="cursor-pointer w-full justify-start"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </CardContent>
      </Card>

      {/* Price Range Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">가격대</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Badge
            variant={selectedPriceRange === 'all' ? 'default' : 'outline'}
            className="cursor-pointer w-full justify-start"
            onClick={() => setSelectedPriceRange('all')}
          >
            모든 가격
          </Badge>
          {priceRanges.map((range) => (
            <div
              key={range.value}
              className={`p-2 rounded-md cursor-pointer transition-colors ${
                selectedPriceRange === range.value
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
              onClick={() => setSelectedPriceRange(range.value)}
            >
              <div className="font-medium text-sm">{range.label}</div>
              <div className="text-xs opacity-70">{range.description}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Filters */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">인기 필터</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Badge variant="outline" className="cursor-pointer w-full justify-start">
            ⭐ 4.5점 이상
          </Badge>
          <Badge variant="outline" className="cursor-pointer w-full justify-start">
            🚗 주차 가능
          </Badge>
          <Badge variant="outline" className="cursor-pointer w-full justify-start">
            📱 온라인 주문
          </Badge>
          <Badge variant="outline" className="cursor-pointer w-full justify-start">
            🎉 그룹 모임
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterPanel;
