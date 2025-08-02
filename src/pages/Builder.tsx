import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { AiAssistant } from "@/components/AiAssistant";
import { RotateCcw, Save, Share2, ShoppingCart, Plus, Minus, Edit3 } from "lucide-react";
import { toast } from "sonner";

interface Module {
  id: string;
  name: string;
  category: string;
  description: string;
  therapeuticValue: string;
  ecoBonus?: string;
  price: number;
  icon: string;
}

interface CubeFace {
  id: number;
  name: string;
  modules: Module[];
}

const moduleCategories = [
  { id: "audio", name: "🔊 Audio Modules", color: "bg-kindu-blue" },
  { id: "tactile", name: "🌿 Tactile Modules", color: "bg-kindu-coral" },
  { id: "visual", name: "🎨 Visual Modules", color: "bg-kindu-yellow" },
  { id: "motor", name: "🤲 Motor Skills", color: "bg-kindu-orange" },
  { id: "cognitive", name: "🧠 Cognitive Modules", color: "bg-kindu-blue-dark" },
  { id: "emotional", name: "👣 Emotional & Social", color: "bg-kindu-coral" },
];

const sampleModules: Module[] = [
  {
    id: "forest-sounds",
    name: "Forest Sounds",
    category: "audio",
    description: "Calming nature sounds with volume control",
    therapeuticValue: "Reduces anxiety, improves focus",
    ecoBonus: "Recorded in Kazakhstan's protected forests",
    price: 35,
    icon: "🌲"
  },
  {
    id: "texture-wheel",
    name: "Texture Wheel",
    category: "tactile",
    description: "Rotating wheel with 6 different textures",
    therapeuticValue: "Develops tactile sensitivity",
    price: 25,
    icon: "⭕"
  },
  {
    id: "color-sequencer",
    name: "Color Sequencer",
    category: "visual",
    description: "LED lights that create patterns and sequences",
    therapeuticValue: "Visual tracking, pattern recognition",
    price: 45,
    icon: "🌈"
  },
  {
    id: "fine-motor-maze",
    name: "Fine Motor Maze",
    category: "motor",
    description: "Small bead maze for finger dexterity",
    therapeuticValue: "Fine motor development, hand-eye coordination",
    price: 30,
    icon: "🧩"
  },
  {
    id: "counting-beads",
    name: "Counting Beads",
    category: "cognitive",
    description: "Sliding beads for number learning",
    therapeuticValue: "Math skills, counting, cognitive development",
    price: 28,
    icon: "🔢"
  },
  {
    id: "emotion-spinner",
    name: "Emotion Spinner",
    category: "emotional",
    description: "Wheel showing different facial expressions",
    therapeuticValue: "Emotional recognition, social skills",
    price: 32,
    icon: "😊"
  },
  // New modules
  {
    id: "zip-zip",
    name: "Zip-Zip",
    category: "motor",
    description: "Zippers and laces for practicing",
    therapeuticValue: "Fine motor skills, self-care training",
    price: 28,
    icon: "🤐"
  },
  {
    id: "bio",
    name: "Bio",
    category: "tactile",
    description: "Natural textures from wood and rope",
    therapeuticValue: "Sensory grounding, natural connection",
    price: 32,
    icon: "🌿"
  },
  {
    id: "eco-sea",
    name: "Eco-Sea",
    category: "cognitive",
    description: "Magnetic ocean sorting game",
    therapeuticValue: "Logic development, environmental awareness",
    price: 38,
    icon: "🌊"
  },
  {
    id: "help-kindu",
    name: "Help Kindu",
    category: "cognitive",
    description: "Maze with character puzzle solving",
    therapeuticValue: "Empathy building, spatial thinking",
    price: 42,
    icon: "🧭"
  },
  {
    id: "hedgehog",
    name: "Hedgehog",
    category: "tactile",
    description: "Tactile hedgehog slider mechanism",
    therapeuticValue: "Sensory soothing, focus enhancement",
    price: 30,
    icon: "🦔"
  },
  {
    id: "press-planet",
    name: "Press the Planet",
    category: "visual",
    description: "Planet squishies with sound feedback",
    therapeuticValue: "Tactile response, astronomy interest",
    price: 35,
    icon: "🪐"
  }
];

export default function Builder() {
  const [cubeFaces, setCubeFaces] = useState<CubeFace[]>(
    Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      name: `Face ${i + 1}`,
      modules: []
    }))
  );
  
  const [selectedFace, setSelectedFace] = useState(1);
  const [cubeName, setCubeName] = useState("My Sensory Cube");
  const [childAge, setChildAge] = useState("");
  const [sensoryProfile, setSensoryProfile] = useState("");
  const cubeRef = useRef<HTMLDivElement>(null);

  const addModuleToFace = (module: Module) => {
    setCubeFaces(prev => prev.map(face => {
      if (face.id === selectedFace && face.modules.length < 6) {
        return { ...face, modules: [...face.modules, { ...module, id: `${module.id}-${Date.now()}` }] };
      }
      return face;
    }));
    toast.success(`Added ${module.name} to ${cubeFaces.find(f => f.id === selectedFace)?.name}`);
  };

  const removeModuleFromFace = (moduleId: string) => {
    setCubeFaces(prev => prev.map(face => {
      if (face.id === selectedFace) {
        return { ...face, modules: face.modules.filter(m => m.id !== moduleId) };
      }
      return face;
    }));
    toast.success("Module removed");
  };

  const getTotalPrice = () => {
    const basePrice = 80; // Oak cube base
    const assemblyPrice = 45;
    const modulePrice = cubeFaces.reduce((total, face) => 
      total + face.modules.reduce((faceTotal, module) => faceTotal + module.price, 0), 0
    );
    return basePrice + assemblyPrice + modulePrice;
  };

  const getTotalModules = () => {
    return cubeFaces.reduce((total, face) => total + face.modules.length, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AiAssistant />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Cube Viewer */}
          <div className="lg:col-span-1">
            <Card className="p-6 kindu-shadow sticky top-24">
              <div className="text-center mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Edit3 className="w-4 h-4" />
                  <Input
                    value={cubeName}
                    onChange={(e) => setCubeName(e.target.value)}
                    className="text-center font-semibold border-none bg-transparent"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {getTotalModules()} modules • ${getTotalPrice()}
                </p>
              </div>

              {/* 3D Cube Representation */}
              <div 
                ref={cubeRef}
                className="relative w-64 h-64 mx-auto mb-6 cursor-pointer"
                style={{ perspective: "600px" }}
              >
                <div className="absolute inset-0 transform-gpu" style={{ transformStyle: "preserve-3d" }}>
                  {cubeFaces.map((face, index) => {
                    const transforms = [
                      "rotateY(0deg) translateZ(128px)",     // Front
                      "rotateY(180deg) translateZ(128px)",   // Back  
                      "rotateY(-90deg) translateZ(128px)",   // Right
                      "rotateY(90deg) translateZ(128px)",    // Left
                      "rotateX(90deg) translateZ(128px)",    // Top
                      "rotateX(-90deg) translateZ(128px)"    // Bottom
                    ];
                    
                    return (
                      <div
                        key={face.id}
                        className={`absolute w-64 h-64 border-4 border-kindu-navy rounded-lg kindu-gradient-warm cursor-pointer kindu-transition ${
                          selectedFace === face.id ? 'ring-4 ring-primary' : ''
                        }`}
                        style={{ transform: transforms[index] }}
                        onClick={() => setSelectedFace(face.id)}
                      >
                        <div className="p-4 h-full flex flex-col">
                          <div className="text-white font-semibold mb-2 text-center">{face.name}</div>
                          <div className="grid grid-cols-2 gap-2 flex-1">
                            {face.modules.slice(0, 6).map((module, modIndex) => (
                              <div
                                key={modIndex}
                                className="bg-white/20 rounded p-2 text-center"
                              >
                                <div className="text-2xl">{module.icon}</div>
                                <div className="text-xs text-white/80">{module.name}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Face Selector */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {cubeFaces.map((face) => (
                  <Button
                    key={face.id}
                    variant={selectedFace === face.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFace(face.id)}
                    className="text-xs"
                  >
                    {face.name} ({face.modules.length})
                  </Button>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button className="w-full kindu-gradient-primary" size="lg">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart - ${getTotalPrice()}
                </Button>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Button variant="outline" size="sm">
                    <Save className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setCubeFaces(Array.from({ length: 6 }, (_, i) => ({
                        id: i + 1,
                        name: `Face ${i + 1}`,
                        modules: []
                      })));
                      toast.success("Cube reset successfully");
                    }}
                  >
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Reset
                  </Button>
                  <Button variant="outline" size="sm">
                    👁️ Preview
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Module Selection & Configuration */}
          <div className="lg:col-span-2">
            {/* Child Profile */}
            <Card className="p-6 mb-6 kindu-shadow">
              <h3 className="text-xl font-semibold mb-4">Child Profile</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="age">Child's Age</Label>
                  <Select value={childAge} onValueChange={setChildAge}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-4">3-4 years</SelectItem>
                      <SelectItem value="5-6">5-6 years</SelectItem>
                      <SelectItem value="7-8">7-8 years</SelectItem>
                      <SelectItem value="9-10">9-10 years</SelectItem>
                      <SelectItem value="11-12">11-12 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="profile">Sensory Profile</Label>
                  <Select value={sensoryProfile} onValueChange={setSensoryProfile}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select profile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low sensitivity</SelectItem>
                      <SelectItem value="medium">Medium sensitivity</SelectItem>
                      <SelectItem value="high">High sensitivity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      const aiButton = document.querySelector('[data-ai-assistant]');
                      if (aiButton) {
                        (aiButton as HTMLElement).click();
                      }
                    }}
                  >
                    Get AI Recommendations
                  </Button>
                </div>
              </div>
            </Card>

            {/* Current Face Editor */}
            <Card className="p-6 mb-6 kindu-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  Editing: {cubeFaces.find(f => f.id === selectedFace)?.name}
                </h3>
                <Badge variant="secondary">
                  {cubeFaces.find(f => f.id === selectedFace)?.modules.length || 0}/6 modules
                </Badge>
              </div>
              
              {/* Current modules on face */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {cubeFaces.find(f => f.id === selectedFace)?.modules.map((module) => (
                  <Card key={module.id} className="p-4 relative">
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute -top-2 -right-2 w-6 h-6 p-0"
                      onClick={() => removeModuleFromFace(module.id)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <div className="text-center">
                      <div className="text-3xl mb-2">{module.icon}</div>
                      <div className="font-medium text-sm">{module.name}</div>
                      <div className="text-xs text-muted-foreground">${module.price}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Module Categories */}
            <Tabs defaultValue="audio" className="space-y-6">
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full">
                {moduleCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs">
                    {category.name.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {moduleCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {sampleModules
                      .filter(module => module.category === category.id)
                      .map((module) => (
                        <Card key={module.id} className="kindu-shadow hover:kindu-shadow-warm kindu-transition">
                          <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                              <div className="flex items-center gap-3">
                                <div className="text-3xl">{module.icon}</div>
                                <div>
                                  <CardTitle className="text-lg">{module.name}</CardTitle>
                                  <p className="text-sm text-muted-foreground">${module.price}</p>
                                </div>
                              </div>
                              <Button
                                size="sm"
                                onClick={() => addModuleToFace(module)}
                                disabled={cubeFaces.find(f => f.id === selectedFace)?.modules.length >= 6}
                                className="kindu-gradient-primary"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm mb-2">{module.description}</p>
                            <p className="text-xs text-primary font-medium mb-2">
                              🎯 {module.therapeuticValue}
                            </p>
                            {module.ecoBonus && (
                              <p className="text-xs text-accent">
                                🌱 {module.ecoBonus}
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}