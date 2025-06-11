
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  const [expandedSections, setExpandedSections] = React.useState({
    establishment: true,
    meal: false,
    price: true,
    awards: false,
    rating: false,
    cuisines: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const establishmentTypes = [
    'Restaurants',
    'Coffee & Tea',
    'Dessert',
    'Bars & Pubs'
  ];

  const mealTypes = [
    'Breakfast',
    'Brunch',
    'Lunch',
    'Dinner'
  ];

  const priceRanges = [
    { value: '$', label: 'Cheap Eats' },
    { value: '$$', label: 'Mid-range' },
    { value: '$$$', label: 'Fine Dining' },
  ];

  const awards = [
    "Travelers' Choice"
  ];

  const ratings = [
    { value: '4+', label: '4.0 & up', stars: 4 },
    { value: '4.5+', label: '4.5 & up', stars: 4.5 },
    { value: '5', label: '5.0', stars: 5 }
  ];

  const SectionHeader = ({ title, section }: { title: string; section: keyof typeof expandedSections }) => (
    <div 
      className="flex items-center justify-between cursor-pointer"
      onClick={() => toggleSection(section)}
    >
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {expandedSections[section] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
    </div>
  );

  const renderStars = (count: number) => (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-xs ${i < count ? 'text-green-500' : 'text-gray-300'}`}>●</span>
      ))}
    </div>
  );

  return (
    <div className="w-64 space-y-4">
      {/* Establishment Type */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader title="Establishment type" section="establishment" />
        </CardHeader>
        {expandedSections.establishment && (
          <CardContent className="space-y-3">
            {establishmentTypes.map((type, index) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox 
                  id={`establishment-${index}`} 
                  defaultChecked={index === 0}
                />
                <label 
                  htmlFor={`establishment-${index}`} 
                  className="text-sm cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
            <button className="text-sm text-blue-600 hover:underline">Show more</button>
          </CardContent>
        )}
      </Card>

      {/* Meal Type */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader title="Meal type" section="meal" />
        </CardHeader>
        {expandedSections.meal && (
          <CardContent className="space-y-3">
            {mealTypes.map((meal, index) => (
              <div key={meal} className="flex items-center space-x-2">
                <Checkbox id={`meal-${index}`} />
                <label 
                  htmlFor={`meal-${index}`} 
                  className="text-sm cursor-pointer"
                >
                  {meal}
                </label>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Price */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader title="Price" section="price" />
        </CardHeader>
        {expandedSections.price && (
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="price-all"
                checked={selectedPriceRange === 'all'}
                onCheckedChange={() => setSelectedPriceRange('all')}
              />
              <label htmlFor="price-all" className="text-sm cursor-pointer">
                All prices
              </label>
            </div>
            {priceRanges.map((range) => (
              <div key={range.value} className="flex items-center space-x-2">
                <Checkbox 
                  id={`price-${range.value}`}
                  checked={selectedPriceRange === range.value}
                  onCheckedChange={() => setSelectedPriceRange(range.value)}
                />
                <label 
                  htmlFor={`price-${range.value}`} 
                  className="text-sm cursor-pointer"
                >
                  {range.label}
                </label>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Awards */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader title="Awards" section="awards" />
        </CardHeader>
        {expandedSections.awards && (
          <CardContent className="space-y-3">
            {awards.map((award, index) => (
              <div key={award} className="flex items-center space-x-2">
                <Checkbox id={`award-${index}`} />
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <label 
                    htmlFor={`award-${index}`} 
                    className="text-sm cursor-pointer"
                  >
                    {award}
                  </label>
                </div>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Traveler Rating */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader title="Traveler rating" section="rating" />
        </CardHeader>
        {expandedSections.rating && (
          <CardContent className="space-y-3">
            {ratings.map((rating) => (
              <div key={rating.value} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating.value}`} />
                <label 
                  htmlFor={`rating-${rating.value}`} 
                  className="text-sm cursor-pointer flex items-center space-x-2"
                >
                  {renderStars(rating.stars)}
                  <span>{rating.label}</span>
                </label>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Cuisines */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader title="Cuisines" section="cuisines" />
        </CardHeader>
        {expandedSections.cuisines && (
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="cuisine-all"
                checked={selectedCategory === 'all'}
                onCheckedChange={() => setSelectedCategory('all')}
              />
              <label htmlFor="cuisine-all" className="text-sm cursor-pointer">
                All cuisines
              </label>
            </div>
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox 
                  id={`cuisine-${category}`}
                  checked={selectedCategory === category}
                  onCheckedChange={() => setSelectedCategory(category)}
                />
                <label 
                  htmlFor={`cuisine-${category}`} 
                  className="text-sm cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
            <button className="text-sm text-blue-600 hover:underline">Show more</button>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default FilterPanel;
