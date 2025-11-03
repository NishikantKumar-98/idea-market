import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FilterSidebar } from './FilterSidebar';
import { BusinessCard } from './BusinessCard';
import { Building2, Users, ArrowRight, MapPin, TrendingUp, Star, ExternalLink, Phone, Globe } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface Business {
  id: string;
  name: string;
  category: string;
  location: string;
  investment: string;
  teamSize: string;
  rating: number;
  verified: boolean;
  languages: string[];
  scale: string;
  description: string;
  lat: number;
  lng: number;
  revenue: string;
  profit: string;
}

export function UrbanBusinesses() {
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    investment: 'all',
    teamSize: 'all',
    material: 'all',
    infrastructure: 'all',
    language: 'all',
    locationType: 'all',
  });

  // Mock business data
  const businesses: Business[] = [
    {
      id: '1',
      name: 'Tech Solutions Hub',
      category: 'IT Services',
      location: 'Mumbai, Maharashtra',
      investment: '₹10-25L',
      teamSize: '5-10',
      rating: 4.8,
      verified: true,
      languages: ['English', 'Hindi', 'Marathi'],
      scale: 'Medium',
      description: 'Software development and IT consulting services for enterprises',
      lat: 19.0760,
      lng: 72.8777,
      revenue: '₹50L/year',
      profit: '₹15L/year',
    },
    {
      id: '2',
      name: 'Urban Cafe Chain',
      category: 'Food & Beverage',
      location: 'Bangalore, Karnataka',
      investment: '₹25-50L',
      teamSize: '10-20',
      rating: 4.6,
      verified: true,
      languages: ['English', 'Hindi', 'Kannada'],
      scale: 'Large',
      description: 'Premium coffee chain with multiple outlets in metro cities',
      lat: 12.9716,
      lng: 77.5946,
      revenue: '₹1.2Cr/year',
      profit: '₹30L/year',
    },
    {
      id: '3',
      name: 'E-Learning Platform',
      category: 'Education',
      location: 'Delhi, NCR',
      investment: '₹5-10L',
      teamSize: '3-5',
      rating: 4.9,
      verified: true,
      languages: ['English', 'Hindi'],
      scale: 'Small',
      description: 'Online education platform for competitive exam preparation',
      lat: 28.7041,
      lng: 77.1025,
      revenue: '₹35L/year',
      profit: '₹12L/year',
    },
    {
      id: '4',
      name: 'Fitness & Wellness Center',
      category: 'Healthcare',
      location: 'Pune, Maharashtra',
      investment: '₹15-30L',
      teamSize: '8-15',
      rating: 4.7,
      verified: true,
      languages: ['English', 'Hindi', 'Marathi'],
      scale: 'Medium',
      description: 'Modern gym with personal training and nutrition counseling',
      lat: 18.5204,
      lng: 73.8567,
      revenue: '₹75L/year',
      profit: '₹22L/year',
    },
    {
      id: '5',
      name: 'Digital Marketing Agency',
      category: 'Marketing',
      location: 'Hyderabad, Telangana',
      investment: '₹8-15L',
      teamSize: '5-10',
      rating: 4.5,
      verified: true,
      languages: ['English', 'Hindi', 'Telugu'],
      scale: 'Medium',
      description: 'Full-service digital marketing for SMEs and startups',
      lat: 17.3850,
      lng: 78.4867,
      revenue: '₹45L/year',
      profit: '₹18L/year',
    },
    {
      id: '6',
      name: 'Sustainable Fashion Brand',
      category: 'Retail',
      location: 'Chennai, Tamil Nadu',
      investment: '₹20-40L',
      teamSize: '10-20',
      rating: 4.8,
      verified: true,
      languages: ['English', 'Tamil', 'Hindi'],
      scale: 'Large',
      description: 'Eco-friendly clothing line with online and offline presence',
      lat: 13.0827,
      lng: 80.2707,
      revenue: '₹90L/year',
      profit: '₹25L/year',
    },
    {
      id: '7',
      name: 'Cloud Kitchen Network',
      category: 'Food & Beverage',
      location: 'Gurgaon, Haryana',
      investment: '₹12-25L',
      teamSize: '8-12',
      rating: 4.4,
      verified: true,
      languages: ['English', 'Hindi'],
      scale: 'Medium',
      description: 'Multi-brand cloud kitchen serving through online platforms',
      lat: 28.4595,
      lng: 77.0266,
      revenue: '₹65L/year',
      profit: '₹20L/year',
    },
    {
      id: '8',
      name: 'Coworking Space',
      category: 'Real Estate',
      location: 'Kolkata, West Bengal',
      investment: '₹30-60L',
      teamSize: '10-15',
      rating: 4.6,
      verified: true,
      languages: ['English', 'Hindi', 'Bengali'],
      scale: 'Large',
      description: 'Premium coworking space with modern amenities',
      lat: 22.5726,
      lng: 88.3639,
      revenue: '₹1Cr/year',
      profit: '₹28L/year',
    },
    {
      id: '9',
      name: 'EV Charging Solutions',
      category: 'Green Energy',
      location: 'Ahmedabad, Gujarat',
      investment: '₹25-50L',
      teamSize: '8-15',
      rating: 4.9,
      verified: true,
      languages: ['English', 'Hindi', 'Gujarati'],
      scale: 'Large',
      description: 'Electric vehicle charging infrastructure provider',
      lat: 23.0225,
      lng: 72.5714,
      revenue: '₹80L/year',
      profit: '₹30L/year',
    },
    {
      id: '10',
      name: 'Pet Care Services',
      category: 'Services',
      location: 'Jaipur, Rajasthan',
      investment: '₹5-12L',
      teamSize: '5-8',
      rating: 4.7,
      verified: true,
      languages: ['English', 'Hindi'],
      scale: 'Small',
      description: 'Comprehensive pet grooming, training, and daycare',
      lat: 26.9124,
      lng: 75.7873,
      revenue: '₹30L/year',
      profit: '₹10L/year',
    },
  ];

  const userRoles = [
    {
      title: 'Naribot User',
      description: 'Entrepreneurs seeking business opportunities',
      features: ['Browse businesses', 'Filter by criteria', 'Save favorites', 'Get recommendations'],
      icon: Users,
    },
    {
      title: 'Partner/Expert User',
      description: 'Verified business consultants and mentors',
      features: ['List businesses', 'Provide consultations', 'Verify opportunities', 'Earn commissions'],
      icon: Building2,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-10 h-10" />
              <h1>Urban Businesses</h1>
            </div>
            <p className="text-blue-100 max-w-3xl">
              Discover thriving business opportunities in India's urban centers with high growth potential, advanced infrastructure, and strong market demand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-slate-900 mb-8 text-center">Platform User Roles</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {userRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-slate-900">{role.title}</CardTitle>
                    <CardDescription className="text-slate-600">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {role.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Main Content - Filters, Map, and Business Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-slate-900">Business Opportunities</h2>
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="recommendations">Top 10</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filters */}
            <div className="lg:w-72 shrink-0">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              <TabsContent value="grid" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {businesses.map((business, index) => (
                    <motion.div
                      key={business.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <BusinessCard
                        business={business}
                        onClick={() => setSelectedBusiness(business)}
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="map" className="mt-0">
                <Card className="overflow-hidden">
                  <div className="relative h-[600px] bg-slate-100">
                    {/* Interactive Map */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600">Interactive Map View</p>
                        <p className="text-sm text-slate-500">Click on markers to view business details</p>
                      </div>
                    </div>
                    
                    {/* Map Markers */}
                    {businesses.slice(0, 5).map((business, index) => (
                      <motion.button
                        key={business.id}
                        className="absolute w-10 h-10 bg-purple-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
                        style={{
                          left: `${20 + index * 15}%`,
                          top: `${30 + (index % 3) * 20}%`,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => {
                          setSelectedMarker(business.id);
                          setSelectedBusiness(business);
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <MapPin className="w-5 h-5" />
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          <p className="text-xs text-slate-900">{business.name}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                      Top 10 Recommended Businesses
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      Based on success rate, profitability, and market demand
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-4">
                        {businesses.map((business, index) => (
                          <motion.div
                            key={business.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer"
                            onClick={() => setSelectedBusiness(business)}
                          >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center">
                              #{index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="text-slate-900">{business.name}</h3>
                                  <p className="text-sm text-slate-600">{business.category}</p>
                                </div>
                                {business.verified && (
                                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {business.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  {business.rating}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <Badge variant="outline" className="text-xs">{business.investment}</Badge>
                                <Badge variant="outline" className="text-xs">{business.teamSize} people</Badge>
                                <Badge variant="outline" className="text-xs">{business.scale}</Badge>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-400" />
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </section>

      {/* Business Detail Modal */}
      <Dialog open={selectedBusiness !== null} onOpenChange={() => setSelectedBusiness(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedBusiness && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <DialogTitle className="text-2xl text-slate-900">{selectedBusiness.name}</DialogTitle>
                    <DialogDescription className="text-slate-600 mt-2">
                      {selectedBusiness.category} • {selectedBusiness.location}
                    </DialogDescription>
                  </div>
                  {selectedBusiness.verified && (
                    <Badge className="bg-green-100 text-green-700">Verified</Badge>
                  )}
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Rating and Stats */}
                <div className="flex items-center gap-6 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-slate-900">{selectedBusiness.rating}</span>
                    <span className="text-sm text-slate-500">(4.2K reviews)</span>
                  </div>
                  <div className="h-6 w-px bg-slate-200" />
                  <div className="text-sm text-slate-600">
                    <span className="text-slate-900">{selectedBusiness.scale}</span> Scale
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-slate-900 mb-2">About This Business</h3>
                  <p className="text-slate-600">{selectedBusiness.description}</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-purple-50">
                    <p className="text-sm text-slate-600 mb-1">Investment</p>
                    <p className="text-slate-900">{selectedBusiness.investment}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50">
                    <p className="text-sm text-slate-600 mb-1">Team Size</p>
                    <p className="text-slate-900">{selectedBusiness.teamSize}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-50">
                    <p className="text-sm text-slate-600 mb-1">Revenue</p>
                    <p className="text-slate-900">{selectedBusiness.revenue}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-orange-50">
                    <p className="text-sm text-slate-600 mb-1">Profit</p>
                    <p className="text-slate-900">{selectedBusiness.profit}</p>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-slate-900 mb-3">Supported Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedBusiness.languages.map((lang) => (
                      <Badge key={lang} variant="outline" className="gap-1">
                        <Globe className="w-3 h-3" />
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700 gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Owner
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Proof Links
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
