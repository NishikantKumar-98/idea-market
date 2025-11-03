import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Calendar } from './ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { 
  Users, 
  Bot, 
  Calendar as CalendarIcon, 
  Video, 
  Star, 
  CheckCircle, 
  Download, 
  Play, 
  Clock,
  DollarSign,
  TrendingUp,
  MessageSquare,
  ThumbsUp
} from 'lucide-react';

interface Expert {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  rating: number;
  reviews: number;
  verified: boolean;
  rate: string;
  avatar: string;
  availability: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  type: 'webinar' | 'workshop' | 'consultation' | 'networking';
  host: string;
  participants: number;
  status: 'upcoming' | 'live' | 'recorded';
}

export function Partnerships() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  // AI Bot Recommendations
  const aiRecommendations = [
    {
      id: '1',
      matchScore: 95,
      business: 'Cloud Kitchen',
      reason: 'Based on your interest in food services and ₹15-25L investment capacity',
      experts: ['Chef Rohan Kumar', 'Ms. Priya Singh'],
      roi: '25-30%',
    },
    {
      id: '2',
      matchScore: 88,
      business: 'E-Learning Platform',
      reason: 'Matches your tech background and education sector interest',
      experts: ['Dr. Ankit Sharma', 'Prof. Meera Reddy'],
      roi: '30-40%',
    },
    {
      id: '3',
      matchScore: 82,
      business: 'Organic Farming',
      reason: 'Aligned with sustainable agriculture preferences',
      experts: ['Mr. Vikram Patel', 'Ms. Sunita Desai'],
      roi: '20-25%',
    },
  ];

  // Expert Consultants
  const experts: Expert[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      title: 'Business Strategy Consultant',
      expertise: ['Business Planning', 'Market Analysis', 'Financial Modeling'],
      rating: 4.9,
      reviews: 127,
      verified: true,
      rate: '₹2,500/hr',
      avatar: 'RK',
      availability: 'Available Today',
    },
    {
      id: '2',
      name: 'Priya Sharma',
      title: 'Rural Business Expert',
      expertise: ['Agriculture', 'Rural Markets', 'Cooperative Models'],
      rating: 4.8,
      reviews: 94,
      verified: true,
      rate: '₹2,000/hr',
      avatar: 'PS',
      availability: 'Available Tomorrow',
    },
    {
      id: '3',
      name: 'Ankit Verma',
      title: 'Tech Startup Advisor',
      expertise: ['Technology', 'Startups', 'Digital Transformation'],
      rating: 4.9,
      reviews: 156,
      verified: true,
      rate: '₹3,000/hr',
      avatar: 'AV',
      availability: 'Available This Week',
    },
    {
      id: '4',
      name: 'Meera Reddy',
      title: 'Education Sector Specialist',
      expertise: ['EdTech', 'Training Programs', 'Skill Development'],
      rating: 4.7,
      reviews: 82,
      verified: true,
      rate: '₹1,800/hr',
      avatar: 'MR',
      availability: 'Available Today',
    },
    {
      id: '5',
      name: 'Vikram Patel',
      title: 'Sustainable Business Consultant',
      expertise: ['Green Business', 'Sustainability', 'ESG Compliance'],
      rating: 4.8,
      reviews: 103,
      verified: true,
      rate: '₹2,200/hr',
      avatar: 'VP',
      availability: 'Available Tomorrow',
    },
    {
      id: '6',
      name: 'Sunita Desai',
      title: 'Women Entrepreneurship Mentor',
      expertise: ['Women Empowerment', 'Retail', 'Small Business'],
      rating: 4.9,
      reviews: 118,
      verified: true,
      rate: '₹2,000/hr',
      avatar: 'SD',
      availability: 'Available This Week',
    },
  ];

  // Events Calendar
  const events: Event[] = [
    {
      id: '1',
      title: 'Starting Your First Business: A Complete Guide',
      date: '2024-11-05',
      time: '10:00 AM IST',
      duration: '2 hours',
      type: 'webinar',
      host: 'Rajesh Kumar',
      participants: 248,
      status: 'upcoming',
    },
    {
      id: '2',
      title: 'Rural Business Models That Work',
      date: '2024-11-08',
      time: '3:00 PM IST',
      duration: '1.5 hours',
      type: 'workshop',
      host: 'Priya Sharma',
      participants: 156,
      status: 'upcoming',
    },
    {
      id: '3',
      title: 'Funding Options for Small Businesses',
      date: '2024-11-10',
      time: '11:00 AM IST',
      duration: '1 hour',
      type: 'webinar',
      host: 'Ankit Verma',
      participants: 302,
      status: 'upcoming',
    },
    {
      id: '4',
      title: 'Digital Marketing for Local Businesses',
      date: '2024-11-12',
      time: '4:00 PM IST',
      duration: '2 hours',
      type: 'workshop',
      host: 'Meera Reddy',
      participants: 189,
      status: 'upcoming',
    },
  ];

  // Recorded Playlists
  const playlists = [
    {
      id: '1',
      title: 'Business Fundamentals Series',
      videos: 12,
      duration: '8 hours',
      views: 12500,
      rating: 4.8,
    },
    {
      id: '2',
      title: 'Rural Entrepreneurship Masterclass',
      videos: 8,
      duration: '5 hours',
      views: 8200,
      rating: 4.9,
    },
    {
      id: '3',
      title: 'Financial Planning for Startups',
      videos: 10,
      duration: '6 hours',
      views: 9800,
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-10 h-10" />
              <h1>Partnerships & AI Matchmaking</h1>
            </div>
            <p className="text-indigo-100 max-w-3xl">
              Connect with verified experts, get AI-powered recommendations, and access exclusive learning resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Matchmaking Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 mb-12">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-slate-900 mb-2">AI Business Matchmaker</CardTitle>
                  <CardDescription className="text-slate-600">
                    Our AI has analyzed your profile and recommends these business opportunities
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-slate-900">{rec.business}</h3>
                              <Badge className="bg-gradient-to-r from-purple-500 to-blue-500">
                                {rec.matchScore}% Match
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 mb-3">{rec.reason}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="flex items-center gap-1 text-green-600">
                                <TrendingUp className="w-4 h-4" />
                                ROI: {rec.roi}
                              </span>
                              <span className="text-slate-600">
                                Experts: {rec.experts.join(', ')}
                              </span>
                            </div>
                          </div>
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Expert Consultants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-slate-900 mb-2">Verified Expert Consultants</h2>
            <p className="text-slate-600">Book one-on-one consultations with industry experts</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="hover:shadow-xl transition-all cursor-pointer group" onClick={() => setSelectedExpert(expert)}>
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-16 h-16 border-2 border-purple-200">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                        {expert.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-slate-900">{expert.name}</h3>
                        {expert.verified && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-slate-600">{expert.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-slate-900">{expert.rating}</span>
                      <span className="text-sm text-slate-500">({expert.reviews})</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{expert.availability}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {expert.expertise.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                    <span className="text-sm text-slate-600">Consultation Rate</span>
                    <span className="text-purple-600">{expert.rate}</span>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:shadow-md transition-shadow">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events & Webinars */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-slate-900 mb-2">Upcoming Events & Webinars</h2>
              <p className="text-slate-600">Join live sessions and workshops with industry leaders</p>
            </div>
            <Button variant="outline" className="gap-2" onClick={() => setShowCalendar(true)}>
              <CalendarIcon className="w-4 h-4" />
              View Calendar
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge
                        className={
                          event.type === 'webinar'
                            ? 'bg-blue-100 text-blue-700'
                            : event.type === 'workshop'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-green-100 text-green-700'
                        }
                      >
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                      {event.status === 'live' && (
                        <Badge className="bg-red-500 animate-pulse">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full" />
                            LIVE
                          </span>
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-slate-900 mb-2">{event.title}</CardTitle>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.participants} registered</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4 p-3 bg-slate-50 rounded-xl">
                      <span className="text-sm text-slate-600">Hosted by</span>
                      <span className="text-slate-900">{event.host}</span>
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 gap-2">
                      {event.status === 'live' ? (
                        <>
                          <Video className="w-4 h-4" />
                          Join Now
                        </>
                      ) : (
                        <>
                          <CalendarIcon className="w-4 h-4" />
                          Register
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recorded Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-slate-900 mb-2">Learning Resources</h2>
            <p className="text-slate-600">Access recorded webinars and training materials</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow group">
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 mb-2">{playlist.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>{playlist.videos} videos</span>
                    <span>•</span>
                    <span>{playlist.duration}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-slate-900">{playlist.rating}</span>
                    </div>
                    <span className="text-sm text-slate-600">{playlist.views.toLocaleString()} views</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 gap-2">
                    <Play className="w-4 h-4" />
                    Watch Now
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="w-4 h-4" />
                    Download Offline
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expert Detail Modal */}
      <Dialog open={selectedExpert !== null} onOpenChange={() => setSelectedExpert(null)}>
        <DialogContent className="max-w-2xl">
          {selectedExpert && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="w-20 h-20 border-2 border-purple-200">
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white text-xl">
                      {selectedExpert.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <DialogTitle className="text-2xl text-slate-900">{selectedExpert.name}</DialogTitle>
                      {selectedExpert.verified && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <DialogDescription className="text-slate-600">
                      {selectedExpert.title}
                    </DialogDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-slate-900">{selectedExpert.rating}</span>
                      <span className="text-sm text-slate-500">({selectedExpert.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-slate-900 mb-3">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExpert.expertise.map((skill) => (
                      <Badge key={skill} className="bg-purple-100 text-purple-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-purple-50">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Consultation Rate</span>
                    <span className="text-purple-600 text-xl">{selectedExpert.rate}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 text-center">
                    <MessageSquare className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm text-slate-600">Response Time</p>
                    <p className="text-slate-900">Within 2 hours</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 text-center">
                    <ThumbsUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-slate-600">Success Rate</p>
                    <p className="text-slate-900">96%</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700 gap-2">
                    <Video className="w-4 h-4" />
                    Book Video Call
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Calendar Modal */}
      <Dialog open={showCalendar} onOpenChange={setShowCalendar}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Events Calendar</DialogTitle>
            <DialogDescription>View all upcoming events and workshops</DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-xl border"
            />
            <div>
              <h3 className="text-slate-900 mb-4">Events on Selected Date</h3>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {events.slice(0, 2).map((event) => (
                    <Card key={event.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <p className="text-slate-900 mb-1">{event.title}</p>
                        <p className="text-sm text-slate-600">{event.time}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
