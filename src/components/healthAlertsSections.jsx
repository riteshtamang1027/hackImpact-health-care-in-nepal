import {
  AlertTriangle,
  TrendingUp,
  Eye,
  Shield,
  Droplets,
  Utensils,
  Users,
  Heart,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function HealthAlertsSection() {
  const [showAllAlerts, setShowAllAlerts] = useState(false);

  const healthAlerts = [
    {
      id: 1,
      name: "Dengue Fever",
      nameLocal: "डेंगु ज्वरो",
      status: "High Alert",
      statusColor: "bg-red-100 text-red-800 border-red-200",
      cardColor: "bg-red-50 border-red-200",
      cases: "1,245",
      trend: "up",
      prevention: "Eliminate standing water, use mosquito nets",
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      isInitial: true,
    },
    {
      id: 2,
      name: "Seasonal Flu",
      nameLocal: "मौसमी रुघाखोकी",
      status: "Moderate",
      statusColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
      cardColor: "bg-yellow-50 border-yellow-200",
      cases: "3,567",
      trend: "stable",
      prevention: "Vaccination, frequent handwashing, avoid crowds",
      icon: <TrendingUp className="h-6 w-6 text-yellow-600" />,
      isInitial: true,
    },
    {
      id: 3,
      name: "Typhoid",
      nameLocal: "टाइफाइड",
      status: "Watch",
      statusColor: "bg-blue-100 text-blue-800 border-blue-200",
      cardColor: "bg-blue-50 border-blue-200",
      cases: "892",
      trend: "down",
      prevention: "Drink safe water, eat properly cooked food",
      icon: <Eye className="h-6 w-6 text-blue-600" />,
      isInitial: true,
    },
    // Additional alerts (initially hidden)
    {
      id: 4,
      name: "Hepatitis A",
      nameLocal: "हेपाटाइटिस ए",
      status: "Moderate",
      statusColor: "bg-orange-100 text-orange-800 border-orange-200",
      cardColor: "bg-orange-50 border-orange-200",
      cases: "456",
      trend: "up",
      prevention: "Maintain hygiene, avoid contaminated food and water",
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      isInitial: false,
    },
    {
      id: 5,
      name: "Diarrheal Diseases",
      nameLocal: "झाडापखाला रोग",
      status: "High Alert",
      statusColor: "bg-red-100 text-red-800 border-red-200",
      cardColor: "bg-red-50 border-red-200",
      cases: "2,134",
      trend: "up",
      prevention: "Use clean water, proper sanitation, oral rehydration",
      icon: <Droplets className="h-6 w-6 text-red-600" />,
      isInitial: false,
    },
    {
      id: 6,
      name: "Food Poisoning",
      nameLocal: "खाना विषाक्तता",
      status: "Watch",
      statusColor: "bg-purple-100 text-purple-800 border-purple-200",
      cardColor: "bg-purple-50 border-purple-200",
      cases: "678",
      trend: "stable",
      prevention: "Eat fresh food, proper food storage, avoid street food",
      icon: <Utensils className="h-6 w-6 text-purple-600" />,
      isInitial: false,
    },
  ];

  const initialAlerts = healthAlerts.filter((alert) => alert.isInitial);
  const additionalAlerts = healthAlerts.filter((alert) => !alert.isInitial);

  const getTrendIcon = (trend) => {
    if (trend === "up") return "↗";
    if (trend === "down") return "↘";
    return "→";
  };

  const getTrendColor = (trend) => {
    if (trend === "up") return "text-red-500";
    if (trend === "down") return "text-green-500";
    return "text-gray-500";
  };

  const AlertCard = ({ alert }) => (
    <div
      className={`${alert.cardColor} border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {alert.icon}
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold border ${alert.statusColor}`}
        >
          {alert.status}
        </span>
      </div>

      {/* Disease Name */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{alert.name}</h3>
        <p className="text-gray-600 text-sm">{alert.nameLocal}</p>
      </div>

      {/* Statistics */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 font-medium">Cases:</span>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              {alert.cases}
            </span>
            <span className={`text-lg ${getTrendColor(alert.trend)}`}>
              {getTrendIcon(alert.trend)}
            </span>
          </div>
        </div>
        <hr className="border-gray-200" />
      </div>

      {/* Prevention */}
      <div>
        <p className="text-gray-600 font-medium mb-2">Prevention:</p>
        <p className="text-gray-700 text-sm leading-relaxed">
          {alert.prevention}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Health Alerts & Prevention
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about current health situations and protect yourself
            and your family with real-time updates
          </p>
        </div>

        {/* Initial Alerts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {initialAlerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>

        {/* Additional Alerts Grid (with animation) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-500 ease-in-out ${
            showAllAlerts
              ? "opacity-100 max-h-full transform translate-y-0"
              : "opacity-0 max-h-0 overflow-hidden transform -translate-y-4"
          }`}
        >
          {additionalAlerts.map((alert, index) => (
            <div
              key={alert.id}
              className={`transition-all duration-500 ease-in-out ${
                showAllAlerts
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
              style={{
                transitionDelay: showAllAlerts ? `${index * 150}ms` : "0ms",
              }}
            >
              <AlertCard alert={alert} />
            </div>
          ))}
        </div>

        {/* View All Alerts Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowAllAlerts(!showAllAlerts)}
            className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2"
          >
            <span>
              {showAllAlerts ? "Show Less Alerts" : "View All Alerts"}
            </span>
            <ChevronUp
              className={`h-5 w-5 transition-transform duration-300 ${
                showAllAlerts ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* Stay Protected Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-8 gap-4">
           <div className="bg-green-100 border border-green-200 p-2 rounded-full flex items-center justify-center">
             <Shield className="h-8 w-8 text-green-600 " />
           </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                Stay Protected
              </p>
              <p className="text-gray-600">
                Follow these essential health guidelines
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {protectionGuidelines.map((guideline) => (
              <div
                key={guideline.id}
                className="text-center flex flex-col  items-center justify-center group cursor-pointer"
              >
                <div
                  className={`${guideline.color} rounded-full w-12 h-12 p-2 border ${guideline.bordercolor}  flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
                >
                 <guideline.icon className= {`h-6 w-6 ${guideline.text_color}`}  />
                </div>
                <h4 className="font-semibold text-gray-900  mb-1">
                  {guideline.title}
                </h4>
                <p className="text-gray-600 text-xs  leading-tight">
                  {guideline.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact Section */}
        {showAllAlerts && (
          <div className="mt-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Emergency Health Hotline
            </h3>
            <p className="text-red-100 mb-6">
              24/7 support for health emergencies and disease reporting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">1115</div>
                <div className="text-sm">Health Emergency</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">1133</div>
                <div className="text-sm">Disease Reporting</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">1144</div>
                <div className="text-sm">Health Information</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// protection guidlines section datas
const protectionGuidelines = [
  {
    id: 1,
    title: "Wash Hands Frequently",
    description: "Use soap and water for 20 seconds",
    icon: Shield ,
    text_color: "text-blue-600",
    color: "bg-blue-100",
    bordercolor: "border-blue-200",
  },
  {
    id: 2,
    title: "Wear Masks in Crowds",
    description: "Protect yourself and others",
    icon: Users ,
    text_color: "text-green-600",
    color: "bg-green-100",
    bordercolor: "border-green-200",
  },
  {
    id: 3,
    title: "Drink Safe Water",
    description: "Boiled or properly filtered water",
    icon: Droplets ,
    text_color: "text-purple-600",
    color: "bg-purple-100",
    bordercolor: "border-purple-200",
  },
  {
    id: 4,
    title: "Eat Fresh Food",
    description: "Avoid stale or contaminated food",
    icon: Utensils ,
    text_color: "text-yellow-600",
    color: "bg-yellow-100",
    bordercolor: "border-yellow-200",
  },
  {
    id: 5,
    title: "Regular Health Checkups",
    description: "Monitor your health regularly",
    icon: Heart ,
    text_color: "text-red-600",
    color: "bg-red-100",
    bordercolor: "border-red-200",
  },
  {
    id: 6,
    title: "Stay Physically Active",
    description: "Exercise boosts immunity",
    icon: TrendingUp ,
    text_color: "text-indigo-600",
    color: "bg-indigo-100",
    bordercolor: "border-indigo-200",
  },
];
