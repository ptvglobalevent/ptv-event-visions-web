
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Settings } from "lucide-react";

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Users,
      title: "Consultation & Planning",
      description: "We start with understanding your vision, requirements, and budget to create the perfect event plan",
      image: "/lovable-uploads/c7514ba7-95f2-4e4f-a424-64267ae101c1.png",
      details: ["Initial consultation", "Budget planning", "Venue selection", "Timeline creation"]
    },
    {
      icon: Settings,
      title: "Design & Coordination",
      description: "Our expert team designs your event layout and coordinates all vendors and logistics seamlessly",
      image: "/lovable-uploads/16337fc2-3de9-42c8-81df-43ec37345763.png",
      details: ["Event design", "Vendor coordination", "Equipment planning", "Logistics management"]
    },
    {
      icon: Clock,
      title: "Setup & Execution",
      description: "Professional setup and real-time event management to ensure everything runs perfectly",
      image: "/lovable-uploads/08b7e79a-8b35-4a18-ad7b-d1670c2f7d3a.png",
      details: ["Professional setup", "Quality assurance", "On-site coordination", "Real-time support"]
    },
    {
      icon: CheckCircle,
      title: "Success & Follow-up",
      description: "Celebrating your successful event and gathering feedback for continuous improvement",
      image: "/lovable-uploads/3cdd6355-9cbe-4cb0-8aef-251e3fac4472.png",
      details: ["Event execution", "Guest satisfaction", "Cleanup service", "Follow-up support"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to celebration - our proven 4-step process ensures your event exceeds expectations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  activeStep === index 
                    ? "border-pink-300 shadow-lg bg-pink-50" 
                    : "border-gray-200 hover:border-pink-200 hover:shadow-md"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeStep === index ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-600"
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                      {activeStep === index && (
                        <div className="mt-4 space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className={`text-2xl font-bold ${
                      activeStep === index ? "text-pink-500" : "text-gray-300"
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Step Image */}
          <div className="relative">
            <img 
              src={steps[activeStep].image} 
              alt={steps[activeStep].title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{steps[activeStep].title}</h3>
              <p className="text-pink-100">{steps[activeStep].description}</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 text-lg rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-xl"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Event Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
