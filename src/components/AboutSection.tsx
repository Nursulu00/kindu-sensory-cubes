import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Globe, Leaf } from "lucide-react";
import qoldauTeam from "@/assets/qoldau-team.jpg";
import childTherapy from "@/assets/child-therapy.jpg";

export const AboutSection = () => {
  const goals = [
    {
      icon: Heart,
      title: "Emotional Support",
      description: "Creating tools that provide comfort and emotional regulation for children with autism and other neurodivergent profiles."
    },
    {
      icon: Target,
      title: "Targeted Development",
      description: "Supporting fine motor skills, sensory processing, and cognitive development through play-based therapy."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Starting in Kazakhstan with plans to help families worldwide through accessible, customizable solutions."
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description: "Using sustainable oak wood and recyclable materials to care for our planet while caring for our children."
    }
  ];

  const autismStats = [
    { stat: "1 in 36", label: "Children diagnosed with ASD in the US" },
    { stat: "70%", label: "Improvement with early intervention" },
    { stat: "90%", label: "Have sensory processing difficulties" },
    { stat: "300%", label: "Increase in diagnosis over past decade" }
  ];

  return (
    <section id="about-section" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Meet Team <span className="kindu-gradient-primary bg-clip-text text-transparent">Qoldau</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a passionate team from Kazakhstan dedicated to creating innovative solutions for children with autism spectrum disorders. 
              Our name "Qoldau" means "support" in Kazakh, reflecting our mission to provide comprehensive support for families navigating neurodiversity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Combining expertise in child development, technology, and sustainable design, we've created Kindu cubes to bridge the gap between 
              therapeutic needs and engaging play experiences.
            </p>
          </div>
          <div className="relative">
            <img
              src={qoldauTeam}
              alt="Qoldau Team"
              className="rounded-2xl kindu-shadow-warm w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-kindu-yellow text-kindu-navy px-4 py-2 rounded-full font-semibold kindu-shadow">
              Made in Kazakhstan 🇰🇿
            </div>
          </div>
        </div>

        {/* Our Goals */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Mission & Approach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <Card key={index} className="kindu-shadow hover:kindu-shadow-warm kindu-transition hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto kindu-gradient-primary rounded-full flex items-center justify-center">
                    <goal.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold">{goal.title}</h4>
                  <p className="text-muted-foreground">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ASD Statistics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Understanding Autism Today</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Autism Spectrum Disorder affects millions of children worldwide. Early intervention and proper sensory support 
              can make a tremendous difference in a child's development and quality of life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {autismStats.map((item, index) => (
              <Card key={index} className="text-center p-6 kindu-gradient-warm text-white">
                <div className="text-3xl font-bold mb-2">{item.stat}</div>
                <div className="text-sm">{item.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={childTherapy}
              alt="Child with sensory therapy"
              className="rounded-2xl kindu-shadow"
            />
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold">The Growing Need</h4>
              <p className="text-muted-foreground">
                Recent studies show that autism diagnosis rates have increased significantly, with many children requiring 
                specialized sensory tools for development. Traditional therapy tools are often expensive and not customizable 
                to individual needs.
              </p>
              <p className="text-muted-foreground">
                In Kazakhstan and Central Asia, access to quality therapeutic tools is limited. We're working to change that 
                by creating affordable, customizable solutions that can be shipped globally.
              </p>
            </div>
          </div>
        </div>

        {/* How Our Cubes Work */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">How Kindu Cubes Work</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 kindu-shadow">
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-4">1. Personalize</h4>
              <p className="text-muted-foreground">
                Parents use our 3D builder to customize each face of the cube based on their child's specific sensory needs and preferences.
              </p>
            </Card>
            
            <Card className="p-6 kindu-shadow">
              <div className="text-6xl mb-4">🔨</div>
              <h4 className="text-xl font-semibold mb-4">2. Craft</h4>
              <p className="text-muted-foreground">
                Each cube is handcrafted from sustainable oak wood with premium, child-safe materials that can be recycled in the future.
              </p>
            </Card>
            
            <Card className="p-6 kindu-shadow">
              <div className="text-6xl mb-4">🌱</div>
              <h4 className="text-xl font-semibold mb-4">3. Grow</h4>
              <p className="text-muted-foreground">
                Children engage with their personalized cube, developing motor skills, emotional regulation, and sensory processing abilities.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};