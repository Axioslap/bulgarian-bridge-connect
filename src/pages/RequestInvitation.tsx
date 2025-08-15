import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillSelector from "@/components/SkillSelector";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Crown, Shield, Star, CheckCircle } from "lucide-react";

const RequestInvitation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentRole: "",
    company: "",
    usEducation: "",
    linkedinProfile: "",
    yearsExperience: "",
    annualRevenue: "",
    teamSize: "",
    achievements: "",
    whyJoin: "",
    membershipLevel: "premium",
    referralSource: "",
    agreeToTerms: false,
    agreeToBackgroundCheck: false,
  });
  
  const [skills, setSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string) => (checked: boolean | string) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Error",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeToBackgroundCheck) {
      toast({
        title: "Error",
        description: "Background verification consent is required for membership review",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Invitation request data:", { ...formData, skills });
    
    toast({
      title: "Application Submitted!",
      description: "Your invitation request has been submitted. Our membership committee will review your application within 5-7 business days.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link to="/join-us">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Membership Information
              </Button>
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mb-6 shadow-lg">
                <Crown className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Membership Invitation</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Submit your application for exclusive ABTC Bulgaria membership. 
                Our committee carefully reviews each application.
              </p>
            </div>
          </div>

          {/* Membership Level Selection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Membership Level</CardTitle>
              <CardDescription>Choose the membership tier you're applying for</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.membershipLevel}
                onValueChange={(value) => setFormData(prev => ({ ...prev, membershipLevel: value }))}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Premium Member */}
                <div className="relative">
                  <RadioGroupItem value="premium" id="premium" className="peer sr-only" />
                  <Label
                    htmlFor="premium"
                    className="flex flex-col p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-lg font-semibold">Premium Member</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">$200/yr</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Premium events & masterclasses</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Executive networking access</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Investment opportunities</span>
                      </div>
                    </div>
                  </Label>
                </div>

                {/* Elite Member */}
                <div className="relative">
                  <RadioGroupItem value="elite" id="elite" className="peer sr-only" />
                  <Label
                    htmlFor="elite"
                    className="flex flex-col p-6 border-2 border-amber-200 rounded-lg cursor-pointer hover:border-amber-400 peer-checked:border-amber-400 peer-checked:bg-amber-50/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Crown className="w-6 h-6 text-amber-600 mr-3" />
                        <span className="text-lg font-semibold text-amber-800">Elite Member</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">$750/yr</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>All Premium benefits</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Private dinners with leaders</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Annual elite retreat</span>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-amber-100 rounded text-xs text-amber-800">
                      <Shield className="w-3 h-3 inline mr-1" />
                      Requires committee approval & higher qualification standards
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>Application Details</CardTitle>
              <CardDescription>
                Please provide comprehensive information for our membership committee to review
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Professional Background</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="currentRole">Current Role/Title *</Label>
                      <Input
                        id="currentRole"
                        name="currentRole"
                        type="text"
                        required
                        placeholder="e.g., CEO, VP of Engineering"
                        value={formData.currentRole}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company/Organization *</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="yearsExperience">Years of Experience *</Label>
                      <Input
                        id="yearsExperience"
                        name="yearsExperience"
                        type="number"
                        required
                        min="1"
                        value={formData.yearsExperience}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedinProfile">LinkedIn Profile *</Label>
                      <Input
                        id="linkedinProfile"
                        name="linkedinProfile"
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedinProfile}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="usEducation">U.S. Education Background</Label>
                    <Input
                      id="usEducation"
                      name="usEducation"
                      type="text"
                      placeholder="e.g., MBA Harvard, BS Computer Science MIT"
                      value={formData.usEducation}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Business Information */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Business Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="annualRevenue">Company Annual Revenue</Label>
                      <Input
                        id="annualRevenue"
                        name="annualRevenue"
                        type="text"
                        placeholder="e.g., $1M-$10M, $10M+, Pre-revenue"
                        value={formData.annualRevenue}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="teamSize">Team Size</Label>
                      <Input
                        id="teamSize"
                        name="teamSize"
                        type="text"
                        placeholder="e.g., 1-10, 50+, Solo"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Skills & Expertise</Label>
                    <div className="mt-2">
                      <SkillSelector
                        skills={skills}
                        onSkillsChange={setSkills}
                        placeholder="Add your key skills and areas of expertise..."
                      />
                    </div>
                  </div>
                </div>

                {/* Qualitative Information */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Additional Information</h3>
                  
                  <div className="mb-4">
                    <Label htmlFor="achievements">Major Achievements & Recognition *</Label>
                    <Textarea
                      id="achievements"
                      name="achievements"
                      rows={4}
                      required
                      placeholder="Describe your most significant professional achievements, awards, media coverage, or industry recognition..."
                      value={formData.achievements}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="whyJoin">Why do you want to join ABTC Bulgaria? *</Label>
                    <Textarea
                      id="whyJoin"
                      name="whyJoin"
                      rows={4}
                      required
                      placeholder="What specific value do you hope to gain from membership? How do you plan to contribute to our community?"
                      value={formData.whyJoin}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="referralSource">How did you hear about ABTC Bulgaria?</Label>
                    <Input
                      id="referralSource"
                      name="referralSource"
                      type="text"
                      placeholder="e.g., Referred by [Name], LinkedIn, Website, Event"
                      value={formData.referralSource}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Terms and Agreements */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={handleCheckboxChange("agreeToTerms")}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label 
                        htmlFor="agreeToTerms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <a href="/terms" className="text-primary hover:underline" target="_blank">
                          terms and conditions
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-primary hover:underline" target="_blank">
                          privacy policy
                        </a>
                      </Label>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToBackgroundCheck"
                      checked={formData.agreeToBackgroundCheck}
                      onCheckedChange={handleCheckboxChange("agreeToBackgroundCheck")}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label 
                        htmlFor="agreeToBackgroundCheck"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I consent to background verification as part of the membership review process
                      </Label>
                      <p className="text-xs text-gray-500">
                        This includes professional credentials, LinkedIn verification, and reference checks
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-4 text-lg"
                  >
                    Submit Application
                  </Button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    Our membership committee will review your application within 5-7 business days.
                    You'll receive an email with the decision and next steps.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestInvitation;