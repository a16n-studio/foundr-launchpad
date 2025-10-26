import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours."
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to build your next venture? Let's discuss your project and create a 
            custom plan that fits your timeline and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Let's Talk
                </CardTitle>
                <CardDescription>
                  Get in touch with our team to discuss your project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>hello@launchcraft.so</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+234 (208) 455-4366</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Lagos, NG</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Mon-Fri 9AM-6PM GMT</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Start Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://coachli.co/a16n" target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Book Business Consulting
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Schedule MVP Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Browse Ready-Made Tools
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle>Free Consultation</CardTitle>
                <CardDescription>
                  Get 30 minutes of free strategic advice on your startup idea
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Market validation insights</li>
                  <li>• Technical feasibility assessment</li>
                  <li>• Development timeline estimate</li>
                  <li>• Strategic recommendations</li>
                </ul>
                <Button className="w-full">
                  Book Free Call
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Tell Us About Your Project</CardTitle>
                <CardDescription>
                  The more details you provide, the better we can tailor our response to your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="barack@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Service Interested In</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mvp">Custom MVP Development</SelectItem>
                          <SelectItem value="consulting">Business Consulting</SelectItem>
                          <SelectItem value="tools">Ready-Made Tools</SelectItem>
                          <SelectItem value="partnership">Partnership/Integration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you want to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="planning">Just planning/researching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project idea, goals, target market, and any specific requirements you have in mind..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours. For urgent inquiries, 
                    please call us directly at +234 (803) 569-2829.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you start my project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We can typically start new projects within 1-2 weeks after the initial consultation 
                  and contract signing. Rush projects may be accommodated with additional fees.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! All MVP development projects include 3 months of post-launch support. 
                  We also offer ongoing maintenance and development packages.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Can you help with fundraising?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While we don't directly provide funding, our business consulting services include 
                  fundraising preparation, pitch deck creation, and investor introductions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">What technologies do you use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use modern, scalable technologies – React, Node.js, PostgreSQL, including PHP and Laravel,
                  and cloud platforms like AWS and Vercel. Technology choices depend on your specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
