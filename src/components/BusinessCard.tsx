import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, MapPin, Users, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

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
}

interface BusinessCardProps {
  business: Business;
  onClick: () => void;
}

export function BusinessCard({ business, onClick }: BusinessCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden"
        onClick={onClick}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-bl-full -z-10" />
        
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <CardTitle className="text-slate-900 group-hover:text-purple-600 transition-colors">
                  {business.name}
                </CardTitle>
                {business.verified && (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                )}
              </div>
              <CardDescription className="text-slate-600">{business.category}</CardDescription>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-slate-900">{business.rating}</span>
            </div>
            <Badge variant="outline" className="text-xs">{business.scale}</Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-slate-600 line-clamp-2">{business.description}</p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{business.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <DollarSign className="w-4 h-4 text-slate-400" />
              <span>Investment: {business.investment}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Users className="w-4 h-4 text-slate-400" />
              <span>Team: {business.teamSize} people</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {business.languages.slice(0, 3).map((lang) => (
              <Badge key={lang} variant="secondary" className="text-xs">
                {lang}
              </Badge>
            ))}
          </div>

          <Button 
            variant="ghost" 
            className="w-full group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors gap-2 mt-4"
          >
            View Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
