import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Building2, Leaf, Map, FileSearch, Users, Sparkles } from 'lucide-react';
import { Page } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const demoCards = [
    {
      id: 'urban',
      icon: Building2,
      title: 'Urban Businesses',
      description: 'Explore thriving business opportunities in cities with advanced infrastructure and high investment potential.',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1711607839377-33f7a897dba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBidXNpbmVzc3xlbnwxfHx8fDE3NjIwNzg1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'rural',
      icon: Leaf,
      title: 'Rural Businesses',
      description: 'Discover sustainable business models designed for rural communities with multilingual support and offline access.',
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1661534422719-a93d30cbbf8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMHZpbGxhZ2UlMjBpbmRpYXxlbnwxfHx8fDE3NjIwNzg1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'map',
      icon: Map,
      title: 'Map of India',
      description: 'Interactive geographical visualization of business opportunities across states with smart filtering capabilities.',
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1751273907387-cf1f5d273960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1hcCUyMGdlb2dyYXBoeXxlbnwxfHx8fDE3NjIwMTUzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'research',
      icon: FileSearch,
      title: 'Research Hub',
      description: 'Access comprehensive business research data, verification processes, and export tools for detailed analysis.',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1680602239323-da8299c5a7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGRhdGElMjBhbmFseXNpc3xlbnwxfHx8fDE3NjIwNDU2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'partnerships',
      icon: Users,
      title: 'Partnerships & AI Matchmaking',
      description: 'Connect with verified experts, schedule consultations, and discover AI-powered business recommendations.',
      gradient: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1758518729263-e26fb50db6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwbWVldGluZ3xlbnwxfHx8fDE3NjIwNzg1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const stats = [
    { label: 'Business Ideas', value: '10,000+' },
    { label: 'Cities Covered', value: '500+' },
    { label: 'Rural Areas', value: '2,000+' },
    { label: 'Expert Partners', value: '1,500+' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Empowering Urban & Rural Entrepreneurs</span>
            </div>
            
            <h1 className="text-slate-900 mb-6">
              Discover Your Next <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Business Opportunity</span>
            </h1>
            
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              A comprehensive platform connecting entrepreneurs with verified business opportunities, expert guidance, and AI-powered recommendations across urban and rural India.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 gap-2"
                onClick={() => onNavigate('urban')}
              >
                Explore Urban Businesses
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => onNavigate('rural')}
              >
                View Rural Opportunities
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-600">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">Explore Our Platform</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Navigate through different sections to discover business opportunities, research data, and connect with partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card 
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-slate-200"
                    onClick={() => onNavigate(card.id as Page)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-60 group-hover:opacity-50 transition-opacity`} />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-slate-900">{card.title}</CardTitle>
                      <CardDescription className="text-slate-600">
                        {card.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors gap-2"
                      >
                        View Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-slate-900 mb-4">Platform Features</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive tools and resources for entrepreneurs at every stage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Smart Filtering',
                  description: 'Filter businesses by investment, team size, location, and more',
                  icon: '🎯',
                },
                {
                  title: 'Verified Data',
                  description: 'All business information is verified through multiple sources',
                  icon: '✓',
                },
                {
                  title: 'Multilingual Support',
                  description: 'Access content in multiple Indian languages',
                  icon: '🌐',
                },
                {
                  title: 'AI Recommendations',
                  description: 'Get personalized business suggestions powered by AI',
                  icon: '🤖',
                },
                {
                  title: 'Expert Network',
                  description: 'Connect with verified business experts and mentors',
                  icon: '👥',
                },
                {
                  title: 'Offline Access',
                  description: 'Download resources for offline use in rural areas',
                  icon: '📱',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <CardTitle className="text-slate-900">{feature.title}</CardTitle>
                      <CardDescription className="text-slate-600">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
