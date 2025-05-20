
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About ABTC Bulgaria</h1>
            <p className="text-xl text-gray-600 mb-4">
              The American Business & Tech Club Bulgaria is an initiative funded by the U.S. Embassy designed to connect U.S.-educated Bulgarians, young professionals, and innovation partners.
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
      
      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Core Values</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace creative thinking and new approaches to solving business and societal challenges, fostering an environment where innovation can thrive.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of working together, sharing knowledge, and creating partnerships that benefit both individuals and the wider community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our activities, promoting transparency, honesty, and fairness in professional relationships.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in everything we do, continuously improving our programs and services to deliver exceptional value to our members.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Perspective</h3>
              <p className="text-gray-600">
                We value diversity of thought and experience, recognizing that international exposure enriches our community and drives innovation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Adaptability</h3>
              <p className="text-gray-600">
                We embrace change and remain flexible in our approach, constantly evolving to meet the needs of our members in a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* U.S. Embassy Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">U.S. Embassy Support</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-600 mb-6">
              The American Business & Tech Club Bulgaria is proudly funded by the U.S. Embassy, 
              reflecting the United States' commitment to fostering economic ties, innovation, 
              and democratic values in the region.
            </p>
            <p className="text-gray-600">
              This support enables us to develop impactful programs, create valuable networking 
              opportunities, and establish a sustainable platform for long-term collaboration 
              between professionals in both countries.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
