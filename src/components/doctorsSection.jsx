import { MapPin, Clock, Star, Languages, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function DoctorsSection() {
  const [showAllDoctors, setShowAllDoctors] = useState(false)

  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Hamal",
      specialty: "Cardiologist",
      specialtyLocal: "हृदय रोग विशेषज्ञ",
      image: "https://media.istockphoto.com/id/537738697/photo/heroes-are-ordinary-people-who-make-themselves-extraordinary.webp?a=1&b=1&s=612x612&w=0&k=20&c=M3FDYlrxyp1F9lMTcdBqwIJdKAZsOoM_nHox13HpKHE=",
      location: "Kathmandu, Nepal",
      experience: "15 years experience",
      rating: "4.9",
      consultations: "2,500+",
      languages: "English, Nepali, Hindi",
      isInitial: true,
    },
    {
      id: 2,
      name: "Dr. Sunita Sharma",
      specialty: "Pediatrician",
      specialtyLocal: "बाल रोग विशेषज्ञ",
      image: "https://media.istockphoto.com/id/1313720249/photo/profile-of-a-female-doctor.webp?a=1&b=1&s=612x612&w=0&k=20&c=y0LeSi9OifJY5bT6jzkmMTfN2lqprjPzGvtN4kimH6w=",
      location: "Pokhara, Nepal",
      experience: "12 years experience",
      rating: "4.8",
      consultations: "1,800+",
      languages: "English, Nepali",
      isInitial: true,
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      specialtyLocal: "न्यूरोलोजिस्ट",
      image: "https://images.unsplash.com/photo-1659353887804-fc7f9313021a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9ycyUyMHByb2ZpbGVzfGVufDB8fDB8fHww",
      location: "Singapore (Available Online)",
      experience: "20 years experience",
      rating: "4.9",
      consultations: "3,200+",
      languages: "English, Mandarin",
      isInitial: true,
    },
    // Additional doctors (initially hidden)
    {
      id: 4,
      name: "Dr. Priya Patel",
      specialty: "Dermatologist",
      specialtyLocal: "छाला रोग विशेषज्ञ",
      image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9ycyUyMHByb2ZpbGVzfGVufDB8fDB8fHww",
      location: "Mumbai, India",
      experience: "18 years experience",
      rating: "4.7",
      consultations: "2,100+",
      languages: "English, Hindi, Gujarati",
      isInitial: false,
    },
    {
      id: 5,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      specialtyLocal: "हड्डी रोग विशेषज्ञ",
      image: "https://images.unsplash.com/photo-1612363584451-cd060fb62018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9ycyUyMHByb2ZpbGVzfGVufDB8fDB8fHww",
      location: "London, UK (Available Online)",
      experience: "25 years experience",
      rating: "4.9",
      consultations: "4,000+",
      languages: "English, French",
      isInitial: false,
    },
    {
      id: 6,
      name: "Dr. Anita Gurung",
      specialty: "Gynecologist",
      specialtyLocal: "स्त्री रोग विशेषज्ञ",
      image: "https://media.istockphoto.com/id/924846584/photo/beautiful-blonde-woman-doctor.webp?a=1&b=1&s=612x612&w=0&k=20&c=_oCZ9Iz9Iqcb4aE8uNaBHpT8WieNMYjzfnaaYJzEYrw=",
      location: "Chitwan, Nepal",
      experience: "14 years experience",
      rating: "4.8",
      consultations: "1,900+",
      languages: "English, Nepali",
      isInitial: false,
    },
  ]

  const initialDoctors = doctors.filter((doctor) => doctor.isInitial)
  const additionalDoctors = doctors.filter((doctor) => !doctor.isInitial)
  const displayedDoctors = showAllDoctors ? doctors : initialDoctors

  const handleViewAllClick = () => {
    setShowAllDoctors(!showAllDoctors)
  }

  const DoctorCard = ({ doctor }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Doctor Image and Basic Info */}
      <div className="text-center mb-6">
        <img
          src={doctor.image || "/placeholder.svg"}
          alt={doctor.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
        <p className="text-blue-600 font-semibold mb-1">{doctor.specialty}</p>
        <p className="text-gray-500 text-sm">{doctor.specialtyLocal}</p>
      </div>

      {/* Doctor Details */}
      <div className="space-y-3 mb-6">
        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
          <span>{doctor.location}</span>
        </div>

        {/* Experience */}
        <div className="flex items-center text-gray-600 text-sm">
          <Clock className="h-4 w-4 mr-2 text-gray-400" />
          <span>{doctor.experience}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center text-gray-600 text-sm">
          <Star className="h-4 w-4 mr-2 text-yellow-400 fill-current" />
          <span>
            {doctor.rating} ({doctor.consultations} consultations)
          </span>
        </div>

        {/* Languages */}
        <div className="flex items-center text-gray-600 text-sm">
          <Languages className="h-4 w-4 mr-2 text-gray-400" />
          <span>{doctor.languages}</span>
        </div>
      </div>

      {/* Book Consultation Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-200">
        Book Consultation
      </button>
    </div>
  )

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted specialists from Nepal and around the world, ready to help you
          </p>
        </div>

        {/* Initial Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {initialDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* Additional Doctors Grid (with animation) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-500 ease-in-out ${
            showAllDoctors
              ? "opacity-100 max-h-full transform translate-y-0"
              : "opacity-0 max-h-0 overflow-hidden transform -translate-y-4"
          }`}
        >
          {additionalDoctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`transition-all duration-500 ease-in-out ${
                showAllDoctors ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
              style={{
                transitionDelay: showAllDoctors ? `${index * 150}ms` : "0ms",
              }}
            >
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>

        {/* View All Doctors Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllClick}
            className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2"
          >
            <span>{showAllDoctors ? "Show Less Doctors" : "View All Doctors"}</span>
            <ChevronUp
              className={`h-5 w-5 transition-transform duration-300 ${showAllDoctors ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          {!showAllDoctors && (
            <p className="mt-3 text-gray-600 text-sm">
              Click to see {additionalDoctors.length} more specialist doctors
            </p>
          )}
        </div>

        {/* Statistics Section */}
        {showAllDoctors && (
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600">Expert Doctors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Available Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
