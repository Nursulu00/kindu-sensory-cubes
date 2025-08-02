import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import kinduMascot from "@/assets/kindu-mascot.jpg";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Du, your friendly assistant. I'm here to help you create the perfect sensory cube for your child. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const duMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getDuResponse(input),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, duMessage]);
    }, 1000);
  };

  const getDuResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("autism") || input.includes("asd")) {
      return "I understand you're looking for support for a child with autism. Our sensory cubes are designed specifically to help with sensory regulation, motor skills, and emotional development. Would you like me to recommend modules based on your child's specific needs?";
    }
    
    if (input.includes("age") || input.includes("old")) {
      return "Great question! Our cubes are suitable for children ages 3-12. The modules can be customized based on your child's developmental stage. What age is your child?";
    }
    
    if (input.includes("price") || input.includes("cost")) {
      return "Our cubes start at $150 for a basic configuration with 6 modules. The price varies based on the number and type of modules you choose. Premium modules with advanced features may cost more, but we believe every child deserves quality tools for growth.";
    }
    
    if (input.includes("modules") || input.includes("features")) {
      return "We have 6 main categories of modules: Audio (sounds, music), Tactile (textures, materials), Visual (colors, patterns), Motor Skills (fine/gross motor), Cognitive (puzzles, counting), and Emotional & Social. Each serves different therapeutic purposes. Which area interests you most?";
    }
    
    return "That's a wonderful question! I'm here to help you create the perfect sensory experience for your child. Feel free to ask about specific modules, pricing, or how our cubes can support your child's development. You can also try our interactive builder to see the cubes in action!";
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        data-ai-assistant
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full kindu-gradient-primary hover:scale-110 kindu-transition pulse-glow"
        size="lg"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-96 h-96 kindu-shadow flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border kindu-gradient-warm">
            <div className="flex items-center space-x-3">
              <img 
                src={kinduMascot} 
                alt="Du Assistant" 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-white">Du Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground ml-4'
                      : 'bg-muted text-muted-foreground mr-4'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask Du anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="kindu-gradient-primary"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};