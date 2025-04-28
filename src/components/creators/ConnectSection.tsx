import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Video, Clock } from 'lucide-react';
import { Container } from '@/components/common/Container';

const ConnectSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to take your creator career to the next level? Our team is here to answer your questions and help you get started.
            </p>
            
            <div className="grid gap-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="rounded-full bg-brand-blue/10 p-3 mr-4">
                  <MessageCircle className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Chat with a Creator Advisor</h3>
                  <p className="text-gray-600">Get personalized guidance for your content strategy</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="rounded-full bg-brand-orange/10 p-3 mr-4">
                  <Video className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Schedule a Demo</h3>
                  <p className="text-gray-600">See how the platform can work for your specific content niche</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="rounded-full bg-brand-purple/10 p-3 mr-4">
                  <Clock className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fast Application</h3>
                  <p className="text-gray-600">Get approved in as little as 24 hours and start receiving offers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <Card className="overflow-hidden shadow-lg border-0 bg-white rounded-xl">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-purple/80 z-10"></div>
                <video 
                  className="absolute inset-0 w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop
                  poster="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                >
                  <source 
                    src="https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882" 
                    type="video/mp4" 
                  />
                </video>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">Creator Stories</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Hear from successful creators</h3>
                  <p className="text-gray-600">
                    "Influence.io transformed my creator business. I was able to increase my brand deals by 300% in just the first 6 months, all while staying true to my content vision."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                      alt="Creator testimonial" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium">Jamie Chen</p>
                      <p className="text-sm text-gray-500">1.2M Followers • Lifestyle Creator</p>
                    </div>
                  </div>
                  <Button className="w-full bg-brand-purple hover:bg-opacity-90 text-white">
                    Watch More Stories
                    <Video className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ConnectSection;
