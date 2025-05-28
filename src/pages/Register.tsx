
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [membershipType, setMembershipType] = useState("member");
  const [usConnection, setUsConnection] = useState("");
  const [yearsInUs, setYearsInUs] = useState("");
  const [usEducation, setUsEducation] = useState("");
  const [usEducationDetails, setUsEducationDetails] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "You must agree to the terms and conditions to register.",
        variant: "destructive",
      });
      return;
    }
    
    if (membershipType === "member" && !usConnection) {
      toast({
        title: "US Connection Required",
        description: "Please specify your connection to the United States.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // This is just a placeholder for registration logic
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: `Welcome to ABTC Bulgaria as a ${membershipType}!`,
        duration: 5000,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Card className="w-full max-w-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Join ABTC Bulgaria</CardTitle>
            <CardDescription>
              Become part of our community connecting Bulgaria and the United States
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Membership Type */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Membership Type</Label>
                <RadioGroup value={membershipType} onValueChange={setMembershipType}>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="member" id="member" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="member" className="font-medium cursor-pointer">
                          Member
                        </Label>
                        <p className="text-sm text-gray-600">
                          Full access to our community, events, and resources. Requires US connection.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="supporter" id="supporter" className="mt-1" />
                      <div className="space-y-1">
                        <Label htmlFor="supporter" className="font-medium cursor-pointer">
                          Supporter
                        </Label>
                        <p className="text-sm text-gray-600">
                          Support our mission and get updates about our community and events.
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* US Connection Questions (only for members) */}
              {membershipType === "member" && (
                <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900">US Connection Details</h3>
                  
                  <div className="space-y-2">
                    <Label className="font-medium">What is your connection to the United States?</Label>
                    <RadioGroup value={usConnection} onValueChange={setUsConnection}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="currently_living" id="currently_living" />
                        <Label htmlFor="currently_living" className="cursor-pointer">
                          Currently living in the US
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="previously_lived" id="previously_lived" />
                        <Label htmlFor="previously_lived" className="cursor-pointer">
                          Previously lived in the US
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="education" id="education" />
                        <Label htmlFor="education" className="cursor-pointer">
                          Studied in the US
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="work" id="work" />
                        <Label htmlFor="work" className="cursor-pointer">
                          Worked in the US
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {(usConnection === "currently_living" || usConnection === "previously_lived") && (
                    <div className="space-y-2">
                      <Label htmlFor="yearsInUs">How long have you lived/did you live in the US?</Label>
                      <Input
                        id="yearsInUs"
                        placeholder="e.g., 3 years, 6 months"
                        value={yearsInUs}
                        onChange={(e) => setYearsInUs(e.target.value)}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label className="font-medium">Do you have US education?</Label>
                    <RadioGroup value={usEducation} onValueChange={setUsEducation}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="us_education_yes" />
                        <Label htmlFor="us_education_yes" className="cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="us_education_no" />
                        <Label htmlFor="us_education_no" className="cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {usEducation === "yes" && (
                    <div className="space-y-2">
                      <Label htmlFor="usEducationDetails">Please specify your US education</Label>
                      <Textarea
                        id="usEducationDetails"
                        placeholder="e.g., MBA from Harvard Business School (2018-2020), BS Computer Science from MIT (2014-2018)"
                        value={usEducationDetails}
                        onChange={(e) => setUsEducationDetails(e.target.value)}
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600"
                >
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">terms of service</a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">privacy policy</a>.
                </label>
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : `Join as ${membershipType === "member" ? "Member" : "Supporter"}`}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
