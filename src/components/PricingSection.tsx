import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PricingSection = () => {
  const navigate = useNavigate();

  const pricingTiers = [
    {
      name: "Basic Cube",
      price: "$150",
      description: "Perfect for getting started with sensory play",
      features: [
        "6 basic sensory modules",
        "Oak wood construction",
        "Basic customization",
        "Standard shipping",
        "1-year warranty"
      ],
      popular: false
    },
    {
      name: "Advanced Cube",
      price: "$250",
      description: "Most popular choice for comprehensive development",
      features: [
        "12 premium modules",
        "AI-guided customization",
        "Advanced sensory elements",
        "Express shipping",
        "2-year warranty",
        "Monthly progress tracking"
      ],
      popular: true
    },
    {
      name: "Professional Cube",
      price: "$350",
      description: "For therapy centers and special needs programs",
      features: [
        "18 professional modules",
        "Therapist consultation",
        "Clinical-grade materials",
        "Priority support",
        "3-year warranty",
        "Quarterly assessments",
        "Bulk discounts available"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Transparent <span className="kindu-gradient-primary bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every cube is custom-built based on your child's needs. Our pricing varies with the complexity 
            and number of sensory modules you choose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative kindu-shadow hover:kindu-shadow-warm kindu-transition hover:scale-105 ${
                tier.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="kindu-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="text-4xl font-bold kindu-gradient-primary bg-clip-text text-transparent mb-2">
                  {tier.price}
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => navigate("/builder")}
                  className={`w-full ${
                    tier.popular 
                      ? 'kindu-gradient-primary hover:scale-105' 
                      : 'variant-outline hover:bg-primary hover:text-primary-foreground'
                  } kindu-transition`}
                >
                  Customize Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global Vision */}
        <div className="flex justify-center">
          <Card className="p-8 kindu-shadow kindu-gradient-hero max-w-2xl">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Globe className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Global Vision</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-center">
              Starting in Kazakhstan, our goal is to make Kindu cubes accessible worldwide. We're developing:
            </p>
            <ul className="space-y-2 text-muted-foreground text-center">
              <li>• International shipping partnerships</li>
              <li>• Regional manufacturing centers</li>
              <li>• Local therapy center partnerships</li>
              <li>• Multilingual AI support (Du)</li>
              <li>• Cultural adaptation of modules</li>
            </ul>
            <div className="mt-6 p-4 bg-kindu-yellow/20 rounded-lg">
              <p className="text-sm font-medium text-center">
                🌍 Pre-order now to help us expand globally and get early-bird pricing!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};