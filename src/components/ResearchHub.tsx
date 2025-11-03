import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FileSearch, Download, ChevronDown, ChevronUp, Database, CheckCircle2, ExternalLink, BarChart3 } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface Phase {
  id: number;
  title: string;
  description: string;
  timeline: string;
  progress: number;
  dataSources: string[];
  verificationChecklist: string[];
  status: 'completed' | 'in-progress' | 'pending';
}

export function ResearchHub() {
  const [openPhases, setOpenPhases] = useState<number[]>([1]);

  const togglePhase = (id: number) => {
    setOpenPhases((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const phases: Phase[] = [
    {
      id: 1,
      title: 'Phase 1: Initial Data Collection',
      description: 'Gathering business data from multiple verified sources',
      timeline: 'Completed - Jan 2024',
      progress: 100,
      dataSources: ['exa.ai', 'lookup.so', 'tabvily.com', 'Government databases'],
      verificationChecklist: [
        'Cross-reference data from 3+ sources',
        'Verify business registration details',
        'Validate contact information',
        'Check financial credentials',
      ],
      status: 'completed',
    },
    {
      id: 2,
      title: 'Phase 2: Data Verification & Enrichment',
      description: 'Validating collected data and enriching with additional insights',
      timeline: 'In Progress - Feb 2024',
      progress: 75,
      dataSources: ['Field verification', 'Expert reviews', 'User feedback', 'Financial audits'],
      verificationChecklist: [
        'On-ground verification of top businesses',
        'Expert panel review',
        'Financial statement validation',
        'Customer testimonial collection',
      ],
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'Phase 3: Categorization & Analysis',
      description: 'Organizing data into categories and analyzing market trends',
      timeline: 'In Progress - Mar 2024',
      progress: 60,
      dataSources: ['Market research', 'Trend analysis', 'Competitor mapping', 'Industry reports'],
      verificationChecklist: [
        'Create business category taxonomy',
        'Analyze profitability patterns',
        'Identify market gaps',
        'Generate insights reports',
      ],
      status: 'in-progress',
    },
    {
      id: 4,
      title: 'Phase 4: AI Model Training & Recommendations',
      description: 'Training ML models for personalized business recommendations',
      timeline: 'Scheduled - Apr 2024',
      progress: 30,
      dataSources: ['Historical data', 'Success patterns', 'User preferences', 'Market dynamics'],
      verificationChecklist: [
        'Train recommendation algorithms',
        'A/B test recommendation accuracy',
        'Optimize matching criteria',
        'Deploy production models',
      ],
      status: 'in-progress',
    },
  ];

  const businessThemes = [
    {
      theme: 'Agriculture & Farming',
      categories: [
        'Organic Farming',
        'Dairy Farming',
        'Poultry',
        'Hydroponics',
        'Bee Keeping',
        'Fish Farming',
        'Mushroom Cultivation',
        'Horticulture',
        'Cattle Rearing',
        'Sericulture',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      theme: 'Technology & IT',
      categories: [
        'Software Development',
        'Mobile Apps',
        'Web Development',
        'Cloud Services',
        'Cybersecurity',
        'AI/ML Solutions',
        'IoT Products',
        'SaaS Platforms',
        'Tech Consulting',
        'Data Analytics',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      theme: 'Food & Beverage',
      categories: [
        'Restaurants',
        'Cloud Kitchens',
        'Catering',
        'Food Trucks',
        'Bakery',
        'Juice Bars',
        'Cafe',
        'Ice Cream Parlor',
        'Street Food',
        'Specialty Cuisine',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      theme: 'Education & Training',
      categories: [
        'Coaching Centers',
        'E-Learning',
        'Skill Training',
        'Language Classes',
        'Music School',
        'Dance Academy',
        'Sports Training',
        'Art Classes',
        'Career Counseling',
        'Professional Courses',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      theme: 'Healthcare & Wellness',
      categories: [
        'Clinics',
        'Diagnostic Centers',
        'Pharmacy',
        'Fitness Centers',
        'Yoga Studios',
        'Physiotherapy',
        'Mental Health',
        'Nutrition Consulting',
        'Spa & Wellness',
        'Home Healthcare',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      theme: 'Retail & E-commerce',
      categories: [
        'Fashion Boutique',
        'Electronics Store',
        'Grocery Store',
        'Online Marketplace',
        'Specialty Retail',
        'Home Decor',
        'Bookstore',
        'Sports Equipment',
        'Toys & Games',
        'Pet Supplies',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      theme: 'Services',
      categories: [
        'Salon & Beauty',
        'Laundry',
        'Cleaning Services',
        'Event Management',
        'Photography',
        'Interior Design',
        'Travel Agency',
        'Real Estate',
        'Insurance',
        'Legal Services',
      ],
      color: 'from-teal-500 to-green-500',
    },
    {
      theme: 'Manufacturing',
      categories: [
        'Textile',
        'Furniture',
        'Jewelry',
        'Electronics',
        'Packaging',
        'Cosmetics',
        'Handicrafts',
        'Auto Parts',
        'Construction Materials',
        'Chemical Products',
      ],
      color: 'from-slate-500 to-gray-500',
    },
    {
      theme: 'Creative & Media',
      categories: [
        'Content Creation',
        'Video Production',
        'Graphic Design',
        'Digital Marketing',
        'Advertising',
        'Publishing',
        'Animation',
        'Music Production',
        'Influencer Marketing',
        'PR & Communications',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      theme: 'Sustainable & Green',
      categories: [
        'Solar Energy',
        'EV Charging',
        'Recycling',
        'Eco Products',
        'Green Building',
        'Waste Management',
        'Water Treatment',
        'Organic Products',
        'Environmental Consulting',
        'Carbon Credits',
      ],
      color: 'from-lime-500 to-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileSearch className="w-10 h-10" />
              <h1>Research Hub</h1>
            </div>
            <p className="text-purple-100 max-w-3xl">
              Comprehensive business research data with multi-phase verification, detailed analytics, and export capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Phases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-slate-900">Research Phases</h2>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export CSV
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                <Download className="w-4 h-4" />
                Export JSON
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Collapsible open={openPhases.includes(phase.id)}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CollapsibleTrigger
                      className="w-full"
                      onClick={() => togglePhase(phase.id)}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                phase.status === 'completed'
                                  ? 'bg-green-100'
                                  : phase.status === 'in-progress'
                                  ? 'bg-blue-100'
                                  : 'bg-slate-100'
                              }`}
                            >
                              {phase.status === 'completed' ? (
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                              ) : (
                                <Database className="w-6 h-6 text-purple-600" />
                              )}
                            </div>
                            <div className="flex-1 text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <CardTitle className="text-slate-900">{phase.title}</CardTitle>
                                <Badge
                                  className={
                                    phase.status === 'completed'
                                      ? 'bg-green-100 text-green-700'
                                      : phase.status === 'in-progress'
                                      ? 'bg-blue-100 text-blue-700'
                                      : 'bg-slate-100 text-slate-700'
                                  }
                                >
                                  {phase.status === 'completed'
                                    ? 'Completed'
                                    : phase.status === 'in-progress'
                                    ? 'In Progress'
                                    : 'Pending'}
                                </Badge>
                              </div>
                              <CardDescription className="text-slate-600">
                                {phase.description}
                              </CardDescription>
                              <div className="mt-4 space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-slate-600">{phase.timeline}</span>
                                  <span className="text-purple-600">{phase.progress}%</span>
                                </div>
                                <Progress value={phase.progress} className="h-2" />
                              </div>
                            </div>
                          </div>
                          {openPhases.includes(phase.id) ? (
                            <ChevronUp className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                          {/* Data Sources */}
                          <div>
                            <h3 className="text-slate-900 mb-3 flex items-center gap-2">
                              <Database className="w-4 h-4 text-purple-600" />
                              Data Sources
                            </h3>
                            <div className="space-y-2">
                              {phase.dataSources.map((source, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-sm text-slate-600 p-2 rounded-lg bg-slate-50"
                                >
                                  <ExternalLink className="w-4 h-4 text-slate-400" />
                                  {source}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Verification Checklist */}
                          <div>
                            <h3 className="text-slate-900 mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600" />
                              Verification Checklist
                            </h3>
                            <div className="space-y-2">
                              {phase.verificationChecklist.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-slate-600"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Business Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-slate-900 mb-2">Top 100 Business Categories</h2>
              <p className="text-slate-600">Organized across 10 major themes</p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
              <BarChart3 className="w-4 h-4" />
              View Analytics
            </Button>
          </div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto">
              {businessThemes.map((theme, index) => (
                <TabsTrigger key={index} value={index.toString()} className="whitespace-nowrap">
                  {theme.theme}
                </TabsTrigger>
              ))}
            </TabsList>

            {businessThemes.map((theme, themeIndex) => (
              <TabsContent key={themeIndex} value={themeIndex.toString()}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.color} flex items-center justify-center text-white`}
                      >
                        <span className="text-2xl">{themeIndex + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-slate-900">{theme.theme}</CardTitle>
                        <CardDescription className="text-slate-600">
                          {theme.categories.length} categories with detailed market analysis
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                      {theme.categories.map((category, catIndex) => (
                        <motion.div
                          key={catIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: catIndex * 0.05 }}
                        >
                          <Card className="hover:shadow-md transition-all cursor-pointer group">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-slate-900">{category}</span>
                                <Badge variant="secondary" className="text-xs">
                                  {Math.floor(Math.random() * 50) + 10}
                                </Badge>
                              </div>
                              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${theme.color}`}
                                  style={{ width: `${Math.random() * 40 + 60}%` }}
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </section>
    </div>
  );
}
