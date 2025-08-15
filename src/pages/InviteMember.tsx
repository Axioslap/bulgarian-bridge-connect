import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Send, UserPlus, Crown, Star, CheckCircle, Info } from "lucide-react";

const InviteMember = () => {
  const [formData, setFormData] = useState({
    inviteeName: "",
    inviteeEmail: "",
    inviteeRole: "",
    inviteeCompany: "",
    membershipLevel: "premium",
    personalMessage: "",
    relationship: "",
    whyRecommend: "",
  });
  
  const [invitationsSent, setInvitationsSent] = useState(2); // Mock data
  const [remainingInvitations, setRemainingInvitations] = useState(3); // Mock data
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (remainingInvitations <= 0) {
      toast({
        title: "No invitations remaining",
        description: "You have used all your available invitations for this period.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the invitation
    console.log("Invitation data:", formData);
    
    setRemainingInvitations(prev => prev - 1);
    setInvitationsSent(prev => prev + 1);
    
    // Reset form
    setFormData({
      inviteeName: "",
      inviteeEmail: "",
      inviteeRole: "",
      inviteeCompany: "",
      membershipLevel: "premium",
      personalMessage: "",
      relationship: "",
      whyRecommend: "",
    });
    
    toast({
      title: "Invitation Sent!",
      description: `Invitation has been sent to ${formData.inviteeName}. They will receive an email with your recommendation.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Invite a New Member</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recommend exceptional professionals to join our exclusive community
          </p>
        </div>

        {/* Invitation Status */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{invitationsSent}</div>
                <p className="text-sm text-gray-600">Invitations Sent</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{remainingInvitations}</div>
                <p className="text-sm text-gray-600">Remaining This Quarter</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">5</div>
                <p className="text-sm text-gray-600">Total Quarterly Limit</p>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Invitation Privileges</p>
                  <p>As a Premium member, you can invite up to 5 new members per quarter. Elite members receive unlimited invitations.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Invitation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Member Invitation Form</CardTitle>
                <CardDescription>
                  Provide details about the person you'd like to recommend for membership
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Invitee Information */}
                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Invitee Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="inviteeName">Full Name *</Label>
                        <Input
                          id="inviteeName"
                          name="inviteeName"
                          type="text"
                          required
                          value={formData.inviteeName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="inviteeEmail">Email Address *</Label>
                        <Input
                          id="inviteeEmail"
                          name="inviteeEmail"
                          type="email"
                          required
                          value={formData.inviteeEmail}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="inviteeRole">Current Role/Title *</Label>
                        <Input
                          id="inviteeRole"
                          name="inviteeRole"
                          type="text"
                          required
                          placeholder="e.g., CEO, VP of Engineering"
                          value={formData.inviteeRole}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="inviteeCompany">Company *</Label>
                        <Input
                          id="inviteeCompany"
                          name="inviteeCompany"
                          type="text"
                          required
                          value={formData.inviteeCompany}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Membership Level */}
                  <div className="border-b pb-6">
                    <Label className="text-lg font-semibold mb-4 block">Recommended Membership Level</Label>
                    <RadioGroup
                      value={formData.membershipLevel}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, membershipLevel: value }))}
                      className="space-y-4"
                    >
                      <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                        <RadioGroupItem value="premium" id="premium" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="premium" className="flex items-center text-base font-medium mb-2">
                            <Star className="w-5 h-5 text-blue-600 mr-2" />
                            Premium Member - $200/year
                          </Label>
                          <p className="text-sm text-gray-600">
                            Perfect for professionals seeking premium networking and exclusive events
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 p-4 border border-amber-200 rounded-lg bg-amber-50/30">
                        <RadioGroupItem value="elite" id="elite" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="elite" className="flex items-center text-base font-medium mb-2">
                            <Crown className="w-5 h-5 text-amber-600 mr-2" />
                            Elite Member - $750/year
                          </Label>
                          <p className="text-sm text-gray-600">
                            For senior executives and industry leaders seeking the highest level of access
                          </p>
                          <div className="mt-2">
                            <Badge variant="secondary" className="text-xs">
                              Requires committee approval
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Relationship & Recommendation */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="relationship">Your relationship with this person *</Label>
                      <Input
                        id="relationship"
                        name="relationship"
                        type="text"
                        required
                        placeholder="e.g., Former colleague, Business partner, Mentor"
                        value={formData.relationship}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="whyRecommend">Why do you recommend this person for membership? *</Label>
                      <Textarea
                        id="whyRecommend"
                        name="whyRecommend"
                        rows={4}
                        required
                        placeholder="Describe their professional achievements, leadership qualities, and why they would be a valuable addition to our community..."
                        value={formData.whyRecommend}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="personalMessage">Personal message to include (optional)</Label>
                      <Textarea
                        id="personalMessage"
                        name="personalMessage"
                        rows={3}
                        placeholder="Add a personal note that will be included in the invitation email..."
                        value={formData.personalMessage}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={remainingInvitations <= 0}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Invitation
                    </Button>
                    
                    {remainingInvitations <= 0 && (
                      <p className="text-sm text-red-600 mt-3">
                        You have used all your invitations for this quarter
                      </p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Invitation Guidelines */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Invitation Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Quality over quantity</p>
                    <p className="text-gray-600">Recommend exceptional professionals who align with our community values</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Professional relationship required</p>
                    <p className="text-gray-600">You should know them professionally, not just socially</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Clear value proposition</p>
                    <p className="text-gray-600">Explain what they bring to the community and what they seek</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Leadership experience</p>
                    <p className="text-gray-600">Look for proven track record of leadership and achievement</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs mr-3">1</div>
                  <span>Invitee receives personalized email</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs mr-3">2</div>
                  <span>They complete application form</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs mr-3">3</div>
                  <span>Membership committee reviews</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs mr-3">4</div>
                  <span>Decision within 5-7 business days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteMember;