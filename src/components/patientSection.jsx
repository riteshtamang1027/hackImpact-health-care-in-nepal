
import { Star, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function PatientSection() {
  const [showAllStories, setShowAllStories] = useState(false)

  const patientStories = [
    {
      id: 1,
      name: "Ramesh Gurung",
      nameLocal: "रमेश गुरुङ",
      location: "Kathmandu",
      image: "https://plus.unsplash.com/premium_photo-1664475586214-7d924cefa2e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGF0aWVudCUyMHByb2ZpbGVzfGVufDB8fDB8fHww",
      rating: 5,
      testimonial:
        "This platform helped me find the right cardiologist when I was having chest pain. The symptom checker guided me perfectly, and I got immediate consultation.",
      testimonialLocal: "यो प्लेटफर्मले मलाई छातीमा दुखाइ हुँदा सही हृदय रोग विशेषज्ञ भेट्न मद्दत गर्यो।",
      isInitial: true,
    },
    {
      id: 2,
      name: "Sita Rai",
      nameLocal: "सीता राई",
      location: "Pokhara",
      image: "https://media.istockphoto.com/id/1706275526/photo/close-up-of-an-old-womans-pensive-eyes-staring-into-the-distance.webp?a=1&b=1&s=612x612&w=0&k=20&c=LHi1TuPyoMrtnLrF1vuj2JMxOYUsjuN9OHSdXgxJg78=",
      rating: 5,
      testimonial:
        "As a mother, having access to pediatricians online has been life-saving. My daughter got quick treatment for her fever at midnight.",
      testimonialLocal: "आमाको हैसियतमा अनलाइन बाल चिकित्सकहरूको पहुँच जीवनरक्षक भएको छ।",
      isInitial: true,
    },
    {
      id: 3,
      name: "Krishna Shrestha",
      nameLocal: "कृष्ण श्रेष्ठ",
      location: "Chitwan",
      image: "https://plus.unsplash.com/premium_photo-1664478214797-c3c932160cef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhdGllbnQlMjBwcm9maWxlc3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
      testimonial:
        "The cost comparison feature saved me thousands of rupees. I found affordable treatment for my diabetes management.",
      testimonialLocal: "लागत तुलना सुविधाले मलाई हजारौं रुपैयाँ बचत गरायो।",
      isInitial: true,
    },
    // Additional patient stories (initially hidden)
    {
      id: 4,
      name: "Maya Tamang",
      nameLocal: "माया तामाङ",
      location: "Lalitpur",
      image: "https://media.istockphoto.com/id/1311594929/photo/happy-mature-latin-female-looking-at-camera-with-white-smile.webp?a=1&b=1&s=612x612&w=0&k=20&c=fz5hYumpuXRGTakZJk8aHNv96Dcw3jNckwApRHB3VYo=",
      rating: 5,
      testimonial:
        "The health reminders feature is amazing! I never miss my blood pressure medication now. The doctors are very caring and professional.",
      testimonialLocal: "स्वास्थ्य रिमाइन्डर सुविधा अद्भुत छ! अब म मेरो रक्तचापको औषधि कहिल्यै छुटाउँदिन।",
      isInitial: false,
    },
    {
      id: 5,
      name: "Bikash Thapa",
      nameLocal: "विकास थापा",
      location: "Butwal",
      image: "https://images.unsplash.com/photo-1625738675523-10c8e564ad6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhdGllbnQlMjBwcm9maWxlc3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
      testimonial:
        "I was worried about my skin condition. The dermatologist consultation was excellent and the treatment plan worked perfectly. Highly recommended!",
      testimonialLocal: "मेरो छालाको समस्याको बारेमा चिन्तित थिएँ। छाला रोग विशेषज्ञको परामर्श उत्कृष्ट थियो।",
      isInitial: false,
    },
    {
      id: 6,
      name: "Sunita Karki",
      nameLocal: "सुनिता कार्की",
      location: "Dharan",
      image: "https://plus.unsplash.com/premium_photo-1729580893142-c7abfbe48bb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBhdGllbnQlMjBwcm9maWxlc3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
      testimonial:
        "The 24/7 availability saved my life during pregnancy complications. The gynecologist guided me through emergency care at 3 AM.",
      testimonialLocal: "२४/७ उपलब्धताले गर्भावस्थाको जटिलताको समयमा मेरो जीवन बचायो।",
      isInitial: false,
    },
  ]

  const initialStories = patientStories.filter((story) => story.isInitial)
  const additionalStories = patientStories.filter((story) => !story.isInitial)

  const handleViewAllClick = () => {
    setShowAllStories(!showAllStories)
  }

  const PatientCard = ({ story }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
      {/* Patient Image and Basic Info */}
      <div className="flex items-center mb-6">
        <img
          src={story.image || "/placeholder.svg"}
          alt={story.name}
          className="w-16 h-16 rounded-full object-cover border-3 border-blue-100 mr-4"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
          <p className="text-blue-600 text-sm font-medium">{story.nameLocal}</p>
          <p className="text-gray-500 text-sm">{story.location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(story.rating)].map((_, index) => (
          <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Testimonial */}
      <div className="space-y-3">
        <p className="text-gray-700 leading-relaxed italic">"{story.testimonial}"</p>
        <p className="text-blue-600 text-sm font-medium">{story.testimonialLocal}</p>
      </div>
    </div>
  )

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Patient Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from people who found better healthcare through our platform
          </p>
        </div>

        {/* Initial Patient Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {initialStories.map((story) => (
            <PatientCard key={story.id} story={story} />
          ))}
        </div>

        {/* Additional Patient Stories Grid (with animation) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-500 ease-in-out ${
            showAllStories
              ? "opacity-100 max-h-full transform translate-y-0"
              : "opacity-0 max-h-0 overflow-hidden transform -translate-y-4"
          }`}
        >
          {additionalStories.map((story, index) => (
            <div
              key={story.id}
              className={`transition-all duration-500 ease-in-out ${
                showAllStories ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
              style={{
                transitionDelay: showAllStories ? `${index * 150}ms` : "0ms",
              }}
            >
              <PatientCard story={story} />
            </div>
          ))}
        </div>

        {/* View All Stories Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllClick}
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2"
          >
            <span>{showAllStories ? "Show Less Stories" : "View All Stories"}</span>
            <ChevronUp
              className={`h-5 w-5 transition-transform duration-300 ${showAllStories ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          {!showAllStories && (
            <p className="mt-3 text-gray-600 text-sm">
              Click to read {additionalStories.length} more inspiring patient stories
            </p>
          )}
        </div>

        {/* Trust Indicators */}
        {showAllStories && (
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-700 font-medium">Patient Satisfaction</div>
                <div className="text-gray-500 text-sm">Based on 10,000+ reviews</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">4.9</div>
                <div className="text-gray-700 font-medium">Average Rating</div>
                <div className="text-gray-500 text-sm">Across all specialties</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Emergency Support</div>
                <div className="text-gray-500 text-sm">Always here when you need us</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
