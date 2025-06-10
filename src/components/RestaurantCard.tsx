
import React from 'react';
import { Star, MapPin, Clock, DollarSign, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Restaurant {
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

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-200 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Badge className="absolute bottom-3 left-3 bg-white/90 text-primary">
          {restaurant.cuisine}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Restaurant Name & Rating */}
          <div>
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                {renderStars(restaurant.rating)}
              </div>
              <span className="text-sm font-medium">{restaurant.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({restaurant.reviewCount}개 리뷰)
              </span>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-600">
              {restaurant.priceRange}
            </span>
          </div>

          {/* Location & Hours */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{restaurant.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{restaurant.openHours}</span>
            </div>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap gap-1">
            {restaurant.specialties.slice(0, 3).map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {restaurant.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
