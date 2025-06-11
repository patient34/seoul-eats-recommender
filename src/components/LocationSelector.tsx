
import React from 'react';
import { MapPin } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface LocationSelectorProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  availableLocations: string[];
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  selectedLocation,
  onLocationChange,
  availableLocations
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <MapPin className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Location:</span>
      </div>
      
      <Select value={selectedLocation} onValueChange={onLocationChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          {availableLocations.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Badge variant="secondary" className="ml-2">
        {selectedLocation}
      </Badge>
    </div>
  );
};

export default LocationSelector;
