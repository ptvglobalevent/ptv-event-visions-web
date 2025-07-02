
import { Users, Calendar, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function StatsShowcase() {
  const stats = [
    {
      icon: Calendar,
      number: "500+",
      label: "Events Completed",
      description: "Successfully managed events across Nigeria",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Happy Clients",
      description: "Satisfied customers who trust our services",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience",
      description: "Professional event planning expertise",
      color: "from-pink-600 to-rose-600"
    },
    {
      icon: Award,
      number: "100%",
      label: "Success Rate",
      description: "Perfect track record of event execution",
      color: "from-rose-600 to-pink-700"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-rose-900 to-pink-800"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/48bb4ff8-4207-442a-b235-a568d6602a0d.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proven <span className="text-pink-200">Excellence</span>
          </h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Numbers that showcase our commitment to delivering exceptional event experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors duration-300">
                  {stat.number}
                </h3>
                <h4 className="text-xl font-semibold text-pink-200 mb-3">
                  {stat.label}
                </h4>
                <p className="text-pink-100 leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <span className="text-pink-200 font-medium">Trusted by leading brands across Lagos</span>
            <div className="flex space-x-6">
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
