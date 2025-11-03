import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Map, MapPin, Filter, Star, DollarSign, Users, CheckCircle, Layers } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface Region {
  id: string;
  name: string;
  state: string;
  businessCount: number;
  avgRating: number;
  topCategories: string[];
  position: { x: number; y: number };
}

export function MapOfIndia() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [activeFilters, setActiveFilters] = useState({
    investment: false,
    team: false,
    materials: false,
    infrastructure: false,
    rating: false,
    verified: false,
    language: false,
    locationType: false,
  });

  const regions: Region[] = [
    {
      id: '1',
      name: 'Mumbai Metropolitan Region',
      state: 'Maharashtra',
      businessCount: 1250,
      avgRating: 4.6,
      topCategories: ['IT Services', 'Finance', 'Manufacturing'],
      position: { x: 25, y: 55 },
    },
    {
      id: '2',
      name: 'National Capital Region',
      state: 'Delhi',
      businessCount: 980,
      avgRating: 4.5,
      topCategories: ['IT Services', 'E-commerce', 'Education'],
      position: { x: 45, y: 25 },
    },
    {
      id: '3',
      name: 'Bangalore Urban',
      state: 'Karnataka',
      businessCount: 1100,
      avgRating: 4.7,
      topCategories: ['IT Services', 'Startups', 'Biotechnology'],
      position: { x: 38, y: 72 },
    },
    {
      id: '4',
      name: 'Chennai Metropolitan',
      state: 'Tamil Nadu',
      businessCount: 850,
      avgRating: 4.6,
      topCategories: ['Manufacturing', 'Healthcare', 'Education'],
      position: { x: 50, y: 77 },
    },
    {
      id: '5',
      name: 'Hyderabad Metropolitan',
      state: 'Telangana',
      businessCount: 780,
      avgRating: 4.5,
      topCategories: ['IT Services', 'Pharmaceuticals', 'Real Estate'],
      position: { x: 48, y: 62 },
    },
    {
      id: '6',
      name: 'Kolkata Metropolitan',
      state: 'West Bengal',
      businessCount: 720,
      avgRating: 4.4,
      topCategories: ['Manufacturing', 'Services', 'Retail'],
      position: { x: 65, y: 40 },
    },
    {
      id: '7',
      name: 'Pune Metropolitan',
      state: 'Maharashtra',
      businessCount: 680,
      avgRating: 4.6,
      topCategories: ['IT Services', 'Education', 'Manufacturing'],
      position: { x: 40, y: 60 },
    },
    {
      id: '8',
      name: 'Ahmedabad Metropolitan',
      state: 'Gujarat',
      businessCount: 620,
      avgRating: 4.5,
      topCategories: ['Textile', 'Diamond Processing', 'Chemicals'],
      position: { x: 32, y: 42 },
    },
  ];

  const businessesByRegion = [
    {
      id: '1',
      name: 'Tech Solutions Hub',
      category: 'IT Services',
      investment: '₹10-25L',
      rating: 4.8,
      verified: true,
      teamSize: '5-10',
    },
    {
      id: '2',
      name: 'Urban Cafe Chain',
      category: 'Food & Beverage',
      investment: '₹25-50L',
      rating: 4.6,
      verified: true,
      teamSize: '10-20',
    },
    {
      id: '3',
      name: 'E-Learning Platform',
      category: 'Education',
      investment: '₹5-10L',
      rating: 4.9,
      verified: true,
      teamSize: '3-5',
    },
  ];

  const filterOptions = [
    { key: 'investment', label: 'Investment Range', icon: DollarSign },
    { key: 'team', label: 'Team Size', icon: Users },
    { key: 'materials', label: 'Material Type', icon: Layers },
    { key: 'infrastructure', label: 'Infrastructure', icon: Map },
    { key: 'rating', label: 'Star Rating', icon: Star },
    { key: 'verified', label: 'Verified Only', icon: CheckCircle },
    { key: 'language', label: 'Language', icon: Map },
    { key: 'locationType', label: 'Location Type', icon: MapPin },
  ];

  const toggleFilter = (key: string) => {
    setActiveFilters((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Map className="w-10 h-10" />
              <h1>Map of India</h1>
            </div>
            <p className="text-orange-100 max-w-3xl">
              Interactive geographical visualization of business opportunities across India with smart filtering and regional insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Layers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Filter className="w-5 h-5 text-purple-600" />
              Map Filter Layers
            </CardTitle>
            <CardDescription className="text-slate-600">
              Toggle filters to customize the map view and find relevant businesses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filterOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.key}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-purple-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-slate-600" />
                      <Label htmlFor={option.key} className="text-slate-900 cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                    <Switch
                      id={option.key}
                      checked={activeFilters[option.key as keyof typeof activeFilters]}
                      onCheckedChange={() => toggleFilter(option.key)}
                    />
                  </div>
                );
              })}
            </div>

            {Object.values(activeFilters).some((v) => v) && (
              <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-slate-900">Active Filters:</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      setActiveFilters({
                        investment: false,
                        team: false,
                        materials: false,
                        infrastructure: false,
                        rating: false,
                        verified: false,
                        language: false,
                        locationType: false,
                      })
                    }
                  >
                    Clear All
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(activeFilters).map(([key, value]) => {
                    if (value) {
                      const option = filterOptions.find((o) => o.key === key);
                      return (
                        <Badge key={key} className="bg-purple-100 text-purple-700">
                          {option?.label}
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
      </section>

      {/* Interactive Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map View */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-slate-900">India Business Map</CardTitle>
                <CardDescription className="text-slate-600">
                  Click on any region to view detailed business information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[700px] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden">
                  {/* India Map Outline (simplified) */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-10"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M35 15 L45 18 L48 22 L50 20 L55 22 L58 25 L60 28 L62 32 L63 38 L62 45 L60 52 L58 58 L55 65 L52 72 L48 78 L45 82 L42 84 L38 85 L35 84 L32 82 L30 78 L28 72 L27 65 L26 58 L25 50 L26 42 L28 35 L30 28 L32 22 L35 15 Z"
                      fill="currentColor"
                      className="text-slate-300"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>

                  {/* Region Markers */}
                  {regions.map((region, index) => (
                    <motion.button
                      key={region.id}
                      className="absolute group"
                      style={{
                        left: `${region.position.x}%`,
                        top: `${region.position.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => setSelectedRegion(region)}
                      whileHover={{ scale: 1.2 }}
                    >
                      {/* Marker */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                          {region.businessCount}
                        </div>
                        
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75" />

                        {/* Tooltip */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          <p className="text-slate-900">{region.name}</p>
                          <p className="text-sm text-slate-600">{region.state}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {region.businessCount} businesses
                            </Badge>
                            <div className="flex items-center gap-1 text-xs">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              {region.avgRating}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Region Stats */}
          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="text-slate-900">Regional Statistics</CardTitle>
                <CardDescription className="text-slate-600">
                  Overview of business distribution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-4">
                    {regions.map((region, index) => (
                      <motion.div
                        key={region.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-4 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer"
                        onClick={() => setSelectedRegion(region)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-slate-900">{region.state}</h3>
                            <p className="text-sm text-slate-600">{region.name}</p>
                          </div>
                          <Badge className="bg-purple-100 text-purple-700">
                            {region.businessCount}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-slate-900">{region.avgRating}</span>
                          <span className="text-sm text-slate-500">avg rating</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {region.topCategories.map((cat) => (
                            <Badge key={cat} variant="outline" className="text-xs">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Region Detail Modal */}
      <Dialog open={selectedRegion !== null} onOpenChange={() => setSelectedRegion(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          {selectedRegion && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-slate-900">{selectedRegion.name}</DialogTitle>
                <DialogDescription className="text-slate-600">
                  {selectedRegion.state} • {selectedRegion.businessCount} Business Opportunities
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="overview" className="mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="businesses">Businesses</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-purple-50">
                      <p className="text-sm text-slate-600 mb-1">Total Businesses</p>
                      <p className="text-2xl text-slate-900">{selectedRegion.businessCount}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-yellow-50">
                      <p className="text-sm text-slate-600 mb-1">Avg Rating</p>
                      <p className="text-2xl text-slate-900">{selectedRegion.avgRating}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-50">
                      <p className="text-sm text-slate-600 mb-1">Categories</p>
                      <p className="text-2xl text-slate-900">{selectedRegion.topCategories.length}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-slate-900 mb-3">Top Business Categories</h3>
                    <div className="space-y-3">
                      {selectedRegion.topCategories.map((category, index) => (
                        <div key={category} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-slate-900">{category}</p>
                            <div className="w-full h-2 bg-slate-100 rounded-full mt-1">
                              <div
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                style={{ width: `${90 - index * 15}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="businesses">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {businessesByRegion.map((business) => (
                        <Card key={business.id} className="hover:shadow-md transition-shadow">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-slate-900">{business.name}</CardTitle>
                                <CardDescription className="text-slate-600">
                                  {business.category}
                                </CardDescription>
                              </div>
                              {business.verified && (
                                <Badge className="bg-green-100 text-green-700">Verified</Badge>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-4 text-sm text-slate-600">
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                {business.rating}
                              </span>
                              <span>{business.investment}</span>
                              <span>{business.teamSize} people</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
