import {
  Stethoscope,
  UserCheck,
  Bell,
  MessageCircle,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

export default function HealthcareSection() {
  const healthcareServices = [
    {
      id: 1,
      icon: Stethoscope,
      title: "Symptom Checker",
      description:
        "Check your symptoms instantly and get quick advice. Helps you understand potential causes.",
      bgColor: "bg-sky-50",
      bordercolor:"border-sky-200",
    },
    {
      id: 2,
      icon: UserCheck,
      title: "Find Doctors",
      description:
        "Locate verified doctors nearby by specialty. Get connected easily.",
      bgColor: "bg-purple-50",
      bordercolor:"border-purple-200",
    },
    {
      id: 3,
      icon: Bell,
      title: "Health Reminders",
      description:
        "Set reminders for medications and check-ups. Stay on top of your health routine.",
      bgColor: "bg-green-50",
      bordercolor:"border-green-200",
     
    },
    {
      id: 4,
      icon: MessageCircle,
      title: "Private Consultation",
      description:
        "Book private sessions with certified professionals. 100% confidential.",
      bgColor: "bg-indigo-50",
      bordercolor:"border-indigo-200",
     
    },
    {
      id: 5,
      icon: DollarSign,
      title: "Cost Information",
      description:
        "Transparent pricing for medical services. Know what you pay before you visit.",
      bgColor: "bg-orange-50",
      bordercolor:"border-orange-200",
      
    },
    {
      id: 6,
      icon: AlertTriangle,
      title: "Disease Alerts",
      description:
        "Get real-time alerts on disease outbreaks and health advisories in your area.",
      bgColor: "bg-red-50",
      bordercolor:"border-red-200",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Complete Health Care Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services designed to keep you and your
            family healthy, with modern technology and personalized care at your
            fingertips.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthcareServices.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} border ${service.bordercolor}  rounded-2xl p-8  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
            >
              
              {/* Icon */}
              <div className="mb-6 flex justify-center items-center">
                <div className=" bg-white w-14 h-14 rounded-full p-4">
                <service.icon size={24} className=" text-black  " />
              </div>

              </div>
              

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className=" text-opacity-90 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Arrow */}
              <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-20 rounded-full p-2">
                  <svg
                    className="w-5 h-5 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer  px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
          <p className="mt-4 text-gray-600">
            Join thousands of satisfied patients who trust our healthcare
            solutions
          </p>
        </div>
      </div>
    </section>
  );
}
