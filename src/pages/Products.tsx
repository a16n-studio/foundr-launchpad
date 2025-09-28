import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, ExternalLink, ShoppingCart, Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  description: string;
  short_description: string;
  price: number;
  cover_image_url: string | null;
  preview_url: string | null;
  category_id: string;
  product_type: string;
  stage: string;
  market_type: string;
  market_scope: string;
  features: string[];
  tech_stack: string[];
  categories: { name: string } | null;
}

interface Category {
  id: string;
  name: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [selectedMarket, setSelectedMarket] = useState<string>('all');
  const [selectedScope, setSelectedScope] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories (name)
        `)
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to load products",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category_id === selectedCategory;
    const matchesType = selectedType === 'all' || product.product_type === selectedType;
    const matchesStage = selectedStage === 'all' || product.stage === selectedStage;
    const matchesMarket = selectedMarket === 'all' || product.market_type === selectedMarket;
    const matchesScope = selectedScope === 'all' || product.market_scope === selectedScope;

    return matchesSearch && matchesCategory && matchesType && matchesStage && matchesMarket && matchesScope;
  });

  const addToCart = (product: Product) => {
    // For now, just show a toast. In a real app, you'd add to cart state/localStorage
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Founder Tools</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Battle-tested tools and products built by entrepreneurs, for entrepreneurs. 
            Ready to launch and scale your next venture.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="web">Web</SelectItem>
                <SelectItem value="ai">AI/ML</SelectItem>
                <SelectItem value="fintech">FinTech</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger>
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="idea">Idea</SelectItem>
                <SelectItem value="mvp">MVP</SelectItem>
                <SelectItem value="pre_revenue">Pre-Revenue</SelectItem>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="growth">Growth</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedMarket} onValueChange={setSelectedMarket}>
              <SelectTrigger>
                <SelectValue placeholder="Market" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Markets</SelectItem>
                <SelectItem value="b2b">B2B</SelectItem>
                <SelectItem value="b2c">B2C</SelectItem>
                <SelectItem value="b2b2c">B2B2C</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedScope} onValueChange={setSelectedScope}>
              <SelectTrigger>
                <SelectValue placeholder="Scope" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Scope</SelectItem>
                <SelectItem value="local">Local</SelectItem>
                <SelectItem value="national">National</SelectItem>
                <SelectItem value="global">Global</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.short_description}</CardDescription>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">{product.categories?.name}</Badge>
                  <Badge variant="outline">{product.product_type.toUpperCase()}</Badge>
                  <Badge variant="outline">{product.stage.replace('_', ' ').toUpperCase()}</Badge>
                  <Badge variant="outline">{product.market_type.toUpperCase()}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {product.description}
                </p>

                {product.features && product.features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {product.tech_stack && product.tech_stack.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.tech_stack.slice(0, 4).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <div className="flex space-x-2">
                    {product.preview_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={product.preview_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Preview
                        </a>
                      </Button>
                    )}
                    <Button size="sm" onClick={() => addToCart(product)}>
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Buy Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}