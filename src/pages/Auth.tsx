import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: ''
  });
  
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Passwords don't match");
        }
        await signUp(formData.email, formData.password, formData.fullName);
      } else {
        await signIn(formData.email, formData.password);
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <Link to="/" className="inline-block">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Launchcraft
            </span>
          </Link>
        </div>

        <Card className="shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </CardTitle>
            <CardDescription>
              {isSignUp 
                ? 'Start building your next venture with Launchcraft' 
                : 'Sign in to access your dashboard and tools'
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10"
                    minLength={6}
                    required
                  />
                </div>
              </div>

              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange('confirmPassword', e.target.value)}
                      placeholder="Confirm your password"
                      className="pl-10"
                      minLength={6}
                      required
                    />
                  </div>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full shadow-button" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {isSignUp ? 'Creating account...' : 'Signing in...'}
                  </>
                ) : (
                  isSignUp ? 'Create Account' : 'Sign In'
                )}
              </Button>
            </form>

            <Separator className="my-6" />

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </p>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setFormData({ email: '', password: '', fullName: '', confirmPassword: '' });
                }}
                className="mt-2"
              >
                {isSignUp ? 'Sign in instead' : 'Create account'}
              </Button>
            </div>

            {!isSignUp && (
              <div className="text-center mt-4">
                <Button variant="link" className="text-sm">
                  Forgot your password?
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            By creating an account, you agree to our{' '}
            <Button variant="link" className="p-0 h-auto text-xs">
              Terms of Service
            </Button>{' '}
            and{' '}
            <Button variant="link" className="p-0 h-auto text-xs">
              Privacy Policy
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
