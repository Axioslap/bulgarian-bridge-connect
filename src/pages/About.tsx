
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const boardMembers = [
    {
      name: "Maria Dimitrova",
      position: "Chairman of the Board",
      country: "United States",
      organization: "Tech Innovation Labs, Senior Director",
      quote: "Bridging cultures through innovation and entrepreneurship."
    },
    {
      name: "Alexander Petrov",
      position: "Vice Chairman",
      country: "Bulgaria",
      organization: "Sofia Tech Park, CEO",
      quote: "Building tomorrow's tech ecosystem in Bulgaria."
    },
    {
      name: "Dr. Elena Stoyanova",
      position: "Board Member",
      country: "United States",
      organization: "MIT Research Lab, Principal Scientist",
      quote: "Advancing science and technology for global impact."
    },
    {
      name: "Dimitar Georgiev",
      position: "Board Member",
      country: "Bulgaria",
      organization: "Bulgarian-American Chamber of Commerce, Director",
      quote: "Fostering business partnerships across continents."
    },
    {
      name: "Kristina Marinova",
      position: "Board Member",
      country: "United States",
      organization: "Google, Senior Product Manager",
      quote: "Empowering the next generation of Bulgarian tech leaders."
    },
    {
      name: "Plamen Todorov",
      position: "Board Member",
      country: "Bulgaria",
      organization: "Innovation Capital, Managing Partner",
      quote: "Investing in Bulgaria's future through strategic partnerships."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About ABTC Bulgaria</h1>
            <p className="text-xl text-gray-600 mb-4">
              The American Business & Tech Club Bulgaria is an initiative designed to connect U.S.-educated Bulgarians, young professionals, and innovation partners.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-gray-600 mb-6">
                The American Business & Tech Club Bulgaria aims to foster a dynamic community that strengthens ties between the United States and Bulgaria through business innovation, knowledge sharing, and professional development.
              </p>
              <p className="text-gray-600">
                We are dedicated to creating a pro-democracy, pro-education space that enables meaningful connections and opportunities for those who have studied in the U.S. and wish to contribute to Bulgaria's growing innovation ecosystem.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-gray-600 mb-6">
                We envision a thriving network of professionals that bridges Bulgarian and American business cultures, fostering innovation, entrepreneurship, and lasting partnerships between the two countries.
              </p>
              <p className="text-gray-600">
                Through our platform, we aim to establish Bulgaria as a regional hub for U.S.-inspired innovation and democratic values in business and technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Board Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Board Members</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Location:</span> {member.country}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Organization:</span> {member.organization}
                  </p>
                </div>
                {member.quote && (
                  <blockquote className="text-sm text-gray-700 italic border-l-4 border-primary pl-4">
                    "{member.quote}"
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
