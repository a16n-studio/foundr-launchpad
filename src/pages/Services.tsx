import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight, Clock, DollarSign, Users, Rocket, Target, TrendingUp } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to market in record time. Our expert team provides end-to-end 
            development and consulting services to accelerate your startup journey.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Custom MVP Development */}
          <Card className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Rocket className="h-6 w-6 text-primary" />
                <Badge variant="secondary">Most Popular</Badge>
              </div>
              <CardTitle className="text-2xl">Custom MVP Development</CardTitle>
              <CardDescription>
                Transform your idea into a market-ready product with our proven development process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-primary">$1,500</span>
                <span className="text-muted-foreground">starting price</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Complete MVP in 2-5 months</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Modern tech stack (React, Node.js, PostgreSQL)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Responsive design & mobile optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Authentication & user management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Database design & API development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Deployment & hosting setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Basic analytics & monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>3 months post-launch support</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Business Consulting */}
          <Card className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Business Consulting</CardTitle>
              <CardDescription>
                Strategic guidance from experienced entrepreneurs and industry experts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-primary">$35</span>
                <span className="text-muted-foreground">per hour</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Market validation & research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Business model optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Go-to-market strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Fundraising preparation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Product roadmap planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Team building & scaling advice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Partnership & integration strategies</span>
                </div>
              </div>

              <div className="bg-muted/20 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Connect directly with our partner consultants at:
                </p>
                <Button variant="outline" asChild>
                  <a href="https://coachli.co/a16n" target="_blank" rel="noopener noreferrer">
                    Coachli.co <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Overview */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that gets you from idea to market faster
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Discovery</CardTitle>
                <CardDescription>
                  Understanding your vision, market, and technical requirements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Design</CardTitle>
                <CardDescription>
                  Creating user-centric designs and technical architecture
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Development</CardTitle>
                <CardDescription>
                  Agile development with regular updates and feedback loops
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Launch</CardTitle>
                <CardDescription>
                  Deployment, testing, and ongoing support for your success
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Launchcraft?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Fast Time to Market</CardTitle>
                <CardDescription>
                  Our streamlined process and pre-built components mean faster development 
                  cycles and quicker market validation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Cost-Effective</CardTitle>
                <CardDescription>
                  Fixed pricing and efficient development practices deliver 
                  maximum value for your investment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Experienced Team</CardTitle>
                <CardDescription>
                  Work with developers and entrepreneurs who've built and scaled 
                  successful startups themselves.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your MVP?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom development plan 
            that fits your timeline and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
