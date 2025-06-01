
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

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    usEducation: "",
    currentRole: "",
    company: "",
    bio: "",
    membershipType: "member",
    agreeToTerms: false,
    agreeToNewsletter: false,
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
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Error",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Registration data:", { ...formData, skills });
    
    toast({
      title: "Registration Successful!",
      description: "Welcome to ABTC Bulgaria. You will receive a confirmation email shortly.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Join ABTC Bulgaria</h1>
            <p className="mt-2 text-gray-600">
              Connect with a community of professionals bridging the U.S. and Bulgaria
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>
                Please fill out all required fields to complete your registration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <Label htmlFor="usEducation">U.S. Education Background</Label>
                  <Input
                    id="usEducation"
                    name="usEducation"
                    type="text"
                    placeholder="e.g., MBA Harvard Business School, BS Computer Science MIT"
                    value={formData.usEducation}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentRole">Current Role</Label>
                    <Input
                      id="currentRole"
                      name="currentRole"
                      type="text"
                      placeholder="e.g., Software Engineer"
                      value={formData.currentRole}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="e.g., Tech Company Inc."
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <Label>Skills & Expertise</Label>
                  <div className="mt-2">
                    <SkillSelector
                      skills={skills}
                      onSkillsChange={setSkills}
                      placeholder="Add your skills and areas of expertise..."
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Brief Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    rows={4}
                    placeholder="Tell us about yourself, your interests, and what you hope to gain from the ABTC Bulgaria community..."
                    value={formData.bio}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Membership Type */}
                <div>
                  <Label className="text-base font-medium">Membership Type *</Label>
                  <RadioGroup
                    value={formData.membershipType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, membershipType: value }))}
                    className="mt-3"
                  >
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="member" id="member" />
                          <Label htmlFor="member" className="font-medium">Member</Label>
                        </div>
                        <p className="text-sm text-gray-600 mt-2 ml-6">
                          For U.S.-educated Bulgarians and young professionals. Access to networking events, 
                          resources, and community features. You will have an interview with a member from the club 
                          to understand better your needs and to verify all the information. The first 3 months will be free, 
                          after that you will need to pay a monthly subscription of $45 and part of the money will go for charity.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="supporter" id="supporter" />
                          <Label htmlFor="supporter" className="font-medium">Supporter</Label>
                        </div>
                        <p className="text-sm text-gray-600 mt-2 ml-6">
                          Support our mission and get updates about our community and events. You will have an interview with a member from the club 
                          to understand better your needs and to verify all the information. The first 3 months will be free, 
                          after that you will need to pay a monthly subscription of $45 and part of the money will go for charity.
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={handleCheckboxChange("agreeToTerms")}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the Terms and Conditions *
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        By checking this box, you agree to our terms of service and privacy policy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="newsletter"
                      checked={formData.agreeToNewsletter}
                      onCheckedChange={handleCheckboxChange("agreeToNewsletter")}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="newsletter"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subscribe to newsletter and updates
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Receive updates about events, news, and community activities.
                      </p>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
