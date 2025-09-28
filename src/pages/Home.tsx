import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Users, Target, TrendingUp, Rocket, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Build. Launch.{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Scale.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A16N Venture Studio accelerates entrepreneurs and developers with battle-tested tools, 
              expert guidance, and proven frameworks to transform ideas into successful startups.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-button hover:shadow-elegant transition-shadow">
                <Link to="/products">
                  Explore Founder Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Custom Development</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Startups Launched</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">$10M+</div>
              <div className="text-sm text-muted-foreground">Funding Raised</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">2-5</div>
              <div className="text-sm text-muted-foreground">Months to MVP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose A16N */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose A16N?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine venture studio expertise with cutting-edge tools to accelerate your startup journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Rapid MVP Development</CardTitle>
                <CardDescription>
                  From idea to market in 2-5 months with our proven development framework
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expert Guidance</CardTitle>
                <CardDescription>
                  Access to seasoned entrepreneurs and industry experts who've been there before
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Market-Proven Tools</CardTitle>
                <CardDescription>
                  Battle-tested SaaS tools and frameworks used by successful startups
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Founder Tools</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready-to-launch products designed by entrepreneurs, for entrepreneurs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">TextN</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </div>
                <CardDescription>AI-powered collaborative text editor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$29.99</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://try.a16n.xyz/textn" target="_blank" rel="noopener noreferrer">
                        Preview
                      </a>
                    </Button>
                    <Button size="sm">Buy Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Friv</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.7</span>
                  </div>
                </div>
                <CardDescription>Social casual gaming platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$19.99</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://try.a16n.xyz/friv" target="_blank" rel="noopener noreferrer">
                        Preview
                      </a>
                    </Button>
                    <Button size="sm">Buy Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Outfit</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </div>
                <CardDescription>AI fashion recommendation app</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$39.99</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://try.a16n.xyz/outfit" target="_blank" rel="noopener noreferrer">
                        Preview
                      </a>
                    </Button>
                    <Button size="sm">Buy Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Something Custom?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of expert developers and business consultants can help you build 
                and scale your unique vision from concept to market.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Rocket className="h-5 w-5 text-primary" />
                  <span>Custom MVP Development from $1,499</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Business Consulting from $35/hour</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span>2-5 months to market</span>
                </div>
              </div>
              
              <Button size="lg" asChild>
                <Link to="/services">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Free Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Get expert advice on your startup idea, market validation, and development strategy.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Book Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Next Venture?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of entrepreneurs who've accelerated their startup journey with A16N.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/products">
                Browse Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}