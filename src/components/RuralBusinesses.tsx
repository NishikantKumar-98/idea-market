import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FilterSidebar } from './FilterSidebar';
import { BusinessCard } from './BusinessCard';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Leaf, Globe, Phone, MessageSquare, Download, Users, LogIn, Wifi, WifiOff, Languages } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function RuralBusinesses() {
  const [language, setLanguage] = useState('en');
  const [partnerLoginOpen, setPartnerLoginOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
  const [filters, setFilters] = useState({
    investment: 'all',
    teamSize: 'all',
    material: 'all',
    infrastructure: 'all',
    language: 'all',
    locationType: 'all',
  });

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', label: 'తెలుగు', flag: '🇮🇳' },
    { code: 'bn', label: 'বাংলা', flag: '🇮🇳' },
  ];

  // Mock rural business data
  const businesses = [
    {
      id: '1',
      name: 'Organic Farming Cooperative',
      category: 'Agriculture',
      location: 'Nashik District, Maharashtra',
      investment: '₹2-5L',
      teamSize: '3-5',
      rating: 4.7,
      verified: true,
      languages: ['Hindi', 'Marathi', 'English'],
      scale: 'Small',
      description: 'Organic vegetable farming with direct market access and training support',
    },
    {
      id: '2',
      name: 'Dairy Farming Unit',
      category: 'Livestock',
      location: 'Anand, Gujarat',
      investment: '₹5-10L',
      teamSize: '2-4',
      rating: 4.8,
      verified: true,
      languages: ['Hindi', 'Gujarati'],
      scale: 'Medium',
      description: 'Milk production with cooperative support and veterinary services',
    },
    {
      id: '3',
      name: 'Handicraft Production Center',
      category: 'Crafts',
      location: 'Jaisalmer, Rajasthan',
      investment: '₹1-3L',
      teamSize: '5-10',
      rating: 4.6,
      verified: true,
      languages: ['Hindi', 'English'],
      scale: 'Small',
      description: 'Traditional handicrafts with e-commerce integration and skill training',
    },
    {
      id: '4',
      name: 'Poultry Farming',
      category: 'Livestock',
      location: 'Guntur, Andhra Pradesh',
      investment: '₹3-8L',
      teamSize: '2-3',
      rating: 4.5,
      verified: true,
      languages: ['Telugu', 'English'],
      scale: 'Small',
      description: 'Egg and broiler production with modern farming techniques',
    },
    {
      id: '5',
      name: 'Rural Tourism Homestay',
      category: 'Tourism',
      location: 'Coorg, Karnataka',
      investment: '₹8-15L',
      teamSize: '3-5',
      rating: 4.9,
      verified: true,
      languages: ['Kannada', 'English', 'Hindi'],
      scale: 'Medium',
      description: 'Eco-tourism and cultural experiences with local cuisine',
    },
    {
      id: '6',
      name: 'Beekeeping & Honey Production',
      category: 'Agriculture',
      location: 'Dehradun, Uttarakhand',
      investment: '₹2-4L',
      teamSize: '1-2',
      rating: 4.7,
      verified: true,
      languages: ['Hindi', 'English'],
      scale: 'Small',
      description: 'Natural honey production with training and equipment support',
    },
  ];

  const ivrFlow = [
    { step: 1, action: 'Call IVR Number', description: 'User calls toll-free number' },
    { step: 2, action: 'Language Selection', description: 'Choose from 8+ regional languages' },
    { step: 3, action: 'Business Category', description: 'Select business type of interest' },
    { step: 4, action: 'Get Information', description: 'Listen to business details via audio' },
    { step: 5, action: 'Request Callback', description: 'Schedule call with expert' },
  ];

  const smsFlow = [
    { step: 1, message: 'Send "START" to 56767', description: 'Register for SMS service' },
    { step: 2, message: 'Reply with Language Code', description: 'Select preferred language' },
    { step: 3, message: 'Reply with Category', description: 'Choose business category' },
    { step: 4, message: 'Receive Business List', description: 'Get top 5 recommendations' },
    { step: 5, message: 'Request Details', description: 'Reply with business ID for details' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header with Language Toggle */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Leaf className="w-10 h-10" />
                <div>
                  <h1>Rural Businesses</h1>
                  <p className="text-green-100 mt-2">
                    Sustainable business opportunities for rural communities with multilingual support
                  </p>
                </div>
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-3">
                <Languages className="w-5 h-5" />
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-40 bg-white/20 border-white/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offline & Communication Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* IVR Support */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-slate-900">IVR Support</CardTitle>
              <CardDescription className="text-slate-600">
                Access information via phone calls in regional languages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <Button variant="outline" className="w-full gap-2" onClick={() => {}}>
                  View IVR Flow
                </Button>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>IVR Call Flow</DialogTitle>
                    <DialogDescription>
                      How users can access business information via phone
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    {ivrFlow.map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm">
                          {item.step}
                        </div>
                        <div>
                          <p className="text-slate-900">{item.action}</p>
                          <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* SMS Support */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-slate-900">SMS Support</CardTitle>
              <CardDescription className="text-slate-600">
                Get business information via text messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <Button variant="outline" className="w-full gap-2" onClick={() => {}}>
                  View SMS Flow
                </Button>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>SMS Service Flow</DialogTitle>
                    <DialogDescription>
                      Step-by-step guide to using SMS service
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    {smsFlow.map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm">
                          {item.step}
                        </div>
                        <div>
                          <p className="text-slate-900">{item.message}</p>
                          <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Offline Resources */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-slate-900">Offline Resources</CardTitle>
              <CardDescription className="text-slate-600">
                Download PDFs for offline access in low connectivity areas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 gap-2">
                <Download className="w-4 h-4" />
                Download All Businesses
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <WifiOff className="w-4 h-4" />
                View Offline Mode
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Partner Login CTA */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-slate-900">Are you a Business Expert or Partner?</CardTitle>
                  <CardDescription className="text-slate-600 mt-2">
                    Join our network to list businesses, provide consultations, and earn commissions
                  </CardDescription>
                </div>
              </div>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 gap-2 whitespace-nowrap"
                onClick={() => setPartnerLoginOpen(true)}
              >
                <LogIn className="w-4 h-4" />
                Partner Login
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Business Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-slate-900 mb-6">Rural Business Opportunities</h2>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="lg:w-72 shrink-0">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Business Cards Grid */}
          <div className="flex-1">
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
          </div>
        </div>
      </section>

      {/* Partner Login Modal */}
      <Dialog open={partnerLoginOpen} onOpenChange={setPartnerLoginOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Partner/Expert Login</DialogTitle>
            <DialogDescription>
              Access your partner dashboard to manage listings and consultations
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Email or Phone</Label>
              <Input placeholder="Enter your email or phone number" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Login
            </Button>
            <div className="text-center">
              <Button variant="link" className="text-sm text-purple-600">
                Don't have an account? Register as Partner
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
              <div className="space-y-4">
                <p className="text-slate-600">{selectedBusiness.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-green-50">
                    <p className="text-sm text-slate-600 mb-1">Investment</p>
                    <p className="text-slate-900">{selectedBusiness.investment}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50">
                    <p className="text-sm text-slate-600 mb-1">Team Size</p>
                    <p className="text-slate-900">{selectedBusiness.teamSize}</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    Contact via IVR
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Request SMS Info
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
