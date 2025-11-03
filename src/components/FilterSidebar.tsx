import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Filter, X } from 'lucide-react';
import { useState } from 'react';

interface FilterSidebarProps {
  filters: {
    investment: string;
    teamSize: string;
    material: string;
    infrastructure: string;
    language: string;
    locationType: string;
  };
  setFilters: (filters: any) => void;
}

export function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {
  const [investmentRange, setInvestmentRange] = useState([0, 100]);

  const handleReset = () => {
    setFilters({
      investment: 'all',
      teamSize: 'all',
      material: 'all',
      infrastructure: 'all',
      language: 'all',
      locationType: 'all',
    });
    setInvestmentRange([0, 100]);
  };

  const activeFiltersCount = Object.values(filters).filter(v => v !== 'all').length;

  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Filter className="w-5 h-5 text-purple-600" />
            Filters
          </CardTitle>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Investment Amount */}
        <div className="space-y-3">
          <Label className="text-slate-900">Investment Amount</Label>
          <Select
            value={filters.investment}
            onValueChange={(value) => setFilters({ ...filters, investment: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ranges</SelectItem>
              <SelectItem value="0-5">₹0 - 5L</SelectItem>
              <SelectItem value="5-10">₹5 - 10L</SelectItem>
              <SelectItem value="10-25">₹10 - 25L</SelectItem>
              <SelectItem value="25-50">₹25 - 50L</SelectItem>
              <SelectItem value="50+">₹50L+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Team Size */}
        <div className="space-y-3">
          <Label className="text-slate-900">Team Size</Label>
          <Select
            value={filters.teamSize}
            onValueChange={(value) => setFilters({ ...filters, teamSize: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="1-3">1 - 3 people</SelectItem>
              <SelectItem value="3-5">3 - 5 people</SelectItem>
              <SelectItem value="5-10">5 - 10 people</SelectItem>
              <SelectItem value="10-20">10 - 20 people</SelectItem>
              <SelectItem value="20+">20+ people</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Material Type */}
        <div className="space-y-3">
          <Label className="text-slate-900">Material Type</Label>
          <Select
            value={filters.material}
            onValueChange={(value) => setFilters({ ...filters, material: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select material" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Materials</SelectItem>
              <SelectItem value="low-cost">Low Cost Materials</SelectItem>
              <SelectItem value="moderate">Moderate Cost</SelectItem>
              <SelectItem value="premium">Premium Materials</SelectItem>
              <SelectItem value="specialized">Specialized</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Infrastructure Needs */}
        <div className="space-y-3">
          <Label className="text-slate-900">Infrastructure Needs</Label>
          <Select
            value={filters.infrastructure}
            onValueChange={(value) => setFilters({ ...filters, infrastructure: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select needs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="specialized">Specialized</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Language */}
        <div className="space-y-3">
          <Label className="text-slate-900">Language</Label>
          <Select
            value={filters.language}
            onValueChange={(value) => setFilters({ ...filters, language: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="tamil">Tamil</SelectItem>
              <SelectItem value="telugu">Telugu</SelectItem>
              <SelectItem value="marathi">Marathi</SelectItem>
              <SelectItem value="gujarati">Gujarati</SelectItem>
              <SelectItem value="kannada">Kannada</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location Type */}
        <div className="space-y-3">
          <Label className="text-slate-900">Location Type</Label>
          <Select
            value={filters.locationType}
            onValueChange={(value) => setFilters({ ...filters, locationType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="metro">Metro Cities</SelectItem>
              <SelectItem value="tier1">Tier 1 Cities</SelectItem>
              <SelectItem value="tier2">Tier 2 Cities</SelectItem>
              <SelectItem value="town">Towns</SelectItem>
              <SelectItem value="rural">Rural Areas</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reset Button */}
        {activeFiltersCount > 0 && (
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={handleReset}
          >
            <X className="w-4 h-4" />
            Reset Filters
          </Button>
        )}

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="pt-4 border-t border-slate-200">
            <Label className="text-slate-900 mb-3 block">Active Filters</Label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters).map(([key, value]) => {
                if (value !== 'all') {
                  return (
                    <Badge key={key} variant="secondary" className="gap-1">
                      {value}
                      <button
                        onClick={() => setFilters({ ...filters, [key]: 'all' })}
                        className="ml-1 hover:text-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
