
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Filter, Users } from 'lucide-react';
import CreatorCard from '@/components/creator/CreatorCard';

// Sample creator data - in a real app, this would come from a database
const creatorsSampleData = [
  {
    id: '1',
    name: 'John Doe',
    profileImage: 'JD',
    category: 'travel',
    platform: 'instagram',
    followers: 25000,
    engagementRate: 3.2,
    bio: 'Travel & Lifestyle Creator showcasing hidden gems around the world',
  },
  {
    id: '2',
    name: 'Sarah Kim',
    profileImage: 'SK',
    category: 'beauty',
    platform: 'youtube',
    followers: 78000,
    engagementRate: 4.5,
    bio: 'Beauty expert sharing makeup tutorials and skincare reviews',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    profileImage: 'MJ',
    category: 'fitness',
    platform: 'tiktok',
    followers: 120000,
    engagementRate: 5.8,
    bio: 'Fitness coach helping you reach your health goals',
  },
  {
    id: '4',
    name: 'Emma Wilson',
    profileImage: 'EW',
    category: 'food',
    platform: 'instagram',
    followers: 45000,
    engagementRate: 4.1,
    bio: 'Food blogger sharing easy and delicious recipes',
  },
  {
    id: '5',
    name: 'Alex Chen',
    profileImage: 'AC',
    category: 'tech',
    platform: 'youtube',
    followers: 92000,
    engagementRate: 3.7,
    bio: 'Tech reviewer bringing you the latest gadget reviews',
  },
  {
    id: '6',
    name: 'Priya Sharma',
    profileImage: 'PS',
    category: 'fashion',
    platform: 'instagram',
    followers: 67000,
    engagementRate: 5.2,
    bio: 'Fashion enthusiast showcasing latest trends and style tips',
  },
];

const CreatorsList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [platformFilter, setPlatformFilter] = useState('');
  const [followerRange, setFollowerRange] = useState([0, 200000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCreators = creatorsSampleData.filter((creator) => {
    const matchesSearch = creator.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          creator.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === '' || creator.category === categoryFilter;
    const matchesPlatform = platformFilter === '' || creator.platform === platformFilter;
    const matchesFollowers = creator.followers >= followerRange[0] && creator.followers <= followerRange[1];
    
    return matchesSearch && matchesCategory && matchesPlatform && matchesFollowers;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <Container className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 gradient-text">Find Creators</h1>
            <p className="text-gray-600">Discover and connect with the perfect creators for your brand</p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex gap-4 mb-4">
            <Input
              placeholder="Search creators by name or bio"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
          </div>
          
          {showFilters && (
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Category</label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    <SelectItem value="beauty">Beauty & Makeup</SelectItem>
                    <SelectItem value="fashion">Fashion & Style</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="food">Food & Cooking</SelectItem>
                    <SelectItem value="fitness">Fitness & Health</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                <Select value={platformFilter} onValueChange={setPlatformFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Platforms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Platforms</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Followers: {followerRange[0].toLocaleString()} - {followerRange[1].toLocaleString()}
                </label>
                <Slider 
                  defaultValue={[0, 200000]} 
                  max={200000} 
                  step={1000}
                  value={followerRange}
                  onValueChange={setFollowerRange}
                  className="py-4"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center mb-6 text-gray-600">
          <Users size={16} className="mr-2" />
          <span>Showing {filteredCreators.length} creators</span>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator) => (
            <CreatorCard 
              key={creator.id}
              creator={creator}
              onClick={() => navigate(`/creator-dashboard?id=${creator.id}`)}
            />
          ))}
          
          {filteredCreators.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No creators found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default CreatorsList;
