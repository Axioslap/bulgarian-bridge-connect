import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Star, Users, CheckCircle, Crown, Sparkles } from "lucide-react";

const JoinUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mb-8 shadow-lg">
              <Crown className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Exclusive Membership
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                By Invitation Only
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ABTC Bulgaria is an elite community of accomplished professionals. 
              Membership is carefully curated to ensure the highest quality networking and opportunities.
            </p>
          </div>

          {/* Exclusivity Statement */}
          <Card className="mb-12 border-2 border-amber-200 bg-gradient-to-br from-amber-50/50 to-yellow-50/30">
            <CardContent className="p-8 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Invitation-Only?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We maintain an exclusive community to ensure every member receives exceptional value, 
                meaningful connections, and access to premium opportunities. This selective approach 
                creates a trusted network of high-caliber professionals.
              </p>
            </CardContent>
          </Card>

          {/* Membership Tiers */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Premium Member */}
            <Card className="relative border-2 border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Most Popular
                </div>
              </div>
              
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Premium Member</CardTitle>
                <CardDescription className="text-lg">Invitation by existing member</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>Direct access to premium events & masterclasses</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>Exclusive networking with C-level executives</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>Priority access to investment opportunities</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>Private member directory & messaging</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>Invitation privileges for new members</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-3xl font-bold text-center text-gray-900">$200<span className="text-lg font-normal text-gray-600">/year</span></p>
                  <p className="text-sm text-center text-gray-500 mt-2">Invitation required</p>
                </div>
              </CardContent>
            </Card>

            {/* Elite Member */}
            <Card className="relative border-2 border-amber-200 bg-gradient-to-br from-amber-50/50 to-yellow-50/30 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <Crown className="w-4 h-4 inline mr-2" />
                  Ultra Exclusive
                </div>
              </div>
              
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <Crown className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-amber-800">Elite Member</CardTitle>
                <CardDescription className="text-lg">By committee review only</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>Everything in Premium membership</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>Private dinners with industry leaders</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>First access to exclusive deals & partnerships</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>Board advisory opportunities</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <span>Annual elite retreat (all expenses paid)</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-amber-200">
                  <p className="text-3xl font-bold text-center text-gray-900">$750<span className="text-lg font-normal text-gray-600">/year</span></p>
                  <p className="text-sm text-center text-amber-700 mt-2">By committee approval</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How to Join Section */}
          <Card className="mb-12 border-2 border-primary/20">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-2xl">How to Join Our Community</CardTitle>
              <CardDescription className="text-lg">Two paths to exclusive membership</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Member Invitation */}
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Member Invitation</h3>
                  <p className="text-gray-600 mb-6">
                    Get recommended by an existing ABTC member who can vouch for your professional credentials and character.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    "The fastest and most common way to join"
                  </p>
                </div>

                {/* Application Review */}
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Application Review</h3>
                  <p className="text-gray-600 mb-6">
                    Submit a detailed application showcasing your achievements, leadership experience, and community contributions.
                  </p>
                  <Link to="/request-invitation">
                    <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                      Request Invitation
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-600 mb-8 text-lg">
              Ready to join an exclusive community of high-achieving professionals?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-invitation">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg">
                  Request Invitation
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Questions? Contact our membership team at{" "}
              <a href="mailto:membership@abtcbulgaria.org" className="text-primary hover:underline">
                membership@abtcbulgaria.org
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JoinUs;