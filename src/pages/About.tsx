import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">A16N</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a venture studio that accelerates entrepreneurs and developers by providing 
            battle-tested tools, expert guidance, and proven frameworks to transform ideas into successful startups.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
              <CardDescription>
                To democratize entrepreneurship by making high-quality development tools and 
                expert guidance accessible to founders at every stage of their journey.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
              <CardDescription>
                A world where great ideas aren't limited by technical barriers or lack of resources, 
                enabling more entrepreneurs to build successful, impactful companies.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-center text-lg">
                A16N was born from the frustration of watching talented entrepreneurs struggle with 
                the same technical and business challenges that have been solved countless times before.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2019</span>
                  </div>
                  <h3 className="font-semibold mb-2">Founded</h3>
                  <p className="text-sm">Started as a side project to help local entrepreneurs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2021</span>
                  </div>
                  <h3 className="font-semibold mb-2">First Products</h3>
                  <p className="text-sm">Launched our first suite of founder tools and frameworks</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2024</span>
                  </div>
                  <h3 className="font-semibold mb-2">Scale</h3>
                  <p className="text-sm">50+ startups launched, $10M+ in funding raised</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine venture studio expertise with cutting-edge technology to accelerate your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>
                  Our team consists of successful entrepreneurs, experienced developers, 
                  and industry experts who've been in your shoes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Proven Methods</CardTitle>
                <CardDescription>
                  We use battle-tested frameworks and methodologies that have helped 
                  dozens of startups reach market successfully.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Scalable Solutions</CardTitle>
                <CardDescription>
                  Every tool and service we provide is designed to scale with your business 
                  from MVP to enterprise.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* By the Numbers */}
        <div className="mb-16 py-12 bg-muted/10 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Impact by the Numbers</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Startups Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$10M+</div>
              <div className="text-sm text-muted-foreground">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Entrepreneur-First Mindset</h3>
                  <p className="text-muted-foreground">
                    We're entrepreneurs ourselves, so we understand the unique challenges 
                    and pressures you face. Our solutions are built from real experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Focus on Speed</h3>
                  <p className="text-muted-foreground">
                    Time is your most valuable resource. Our tools and processes are optimized 
                    to get you to market faster without sacrificing quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quality at Scale</h3>
                  <p className="text-muted-foreground">
                    We don't just build MVPs—we build scalable foundations that can grow 
                    with your business from day one to enterprise scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're just starting out or looking to scale your existing business, 
                we're here to help you succeed.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/products">Browse Tools</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We deliver high-quality solutions that exceed expectations
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Clear communication and honest feedback throughout your journey
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Constantly evolving our tools and methods to stay ahead
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}