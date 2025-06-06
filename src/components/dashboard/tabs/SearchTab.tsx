
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SkillTag from "@/components/SkillTag";
import { mockMembers } from "@/data/mockData";

const SearchTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    interest: "",
    education: "",
    businessInterest: ""
  });

  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         member.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLocation = !searchFilters.location || member.location.toLowerCase().includes(searchFilters.location.toLowerCase());
    const matchesInterest = !searchFilters.interest || member.interests.some(interest => interest.toLowerCase().includes(searchFilters.interest.toLowerCase()));
    const matchesEducation = !searchFilters.education || member.education.toLowerCase().includes(searchFilters.education.toLowerCase());
    const matchesBusinessInterest = !searchFilters.businessInterest || 
      (member.businessInterest && member.businessInterest === searchFilters.businessInterest);
    
    return matchesSearch && matchesLocation && matchesInterest && matchesEducation && matchesBusinessInterest;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Find Members</CardTitle>
          <CardDescription>
            Search and connect with other ABTC Bulgaria members
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <Input
                placeholder="Search by name, interests, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <Input
                placeholder="Filter by location..."
                value={searchFilters.location}
                onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
              />
              <Input
                placeholder="Filter by interest..."
                value={searchFilters.interest}
                onChange={(e) => setSearchFilters({...searchFilters, interest: e.target.value})}
              />
              <Input
                placeholder="Filter by education..."
                value={searchFilters.education}
                onChange={(e) => setSearchFilters({...searchFilters, education: e.target.value})}
              />
              <Select
                value={searchFilters.businessInterest}
                onValueChange={(value) => setSearchFilters({...searchFilters, businessInterest: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Business Interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Interests</SelectItem>
                  <SelectItem value="expand-existing">Want to Expand Company</SelectItem>
                  <SelectItem value="start-company">Looking to Start Company</SelectItem>
                  <SelectItem value="join-company">Looking to Join Company</SelectItem>
                  <SelectItem value="other">Other Interests</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                onClick={() => setSearchFilters({location: "", interest: "", education: "", businessInterest: ""})}
                className="whitespace-nowrap"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Members ({filteredMembers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredMembers.map((member) => (
              <div key={member.id} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium">{member.name}</h4>
                      <Badge variant="outline">{member.role}</Badge>
                      {member.businessInterest && (
                        <Badge variant="secondary" className="text-xs">
                          {member.businessInterest === "expand-existing" && "Expanding Company"}
                          {member.businessInterest === "start-company" && "Starting Company"}
                          {member.businessInterest === "join-company" && "Seeking to Join"}
                          {member.businessInterest === "other" && "Other Goals"}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">📍 {member.location}</p>
                    <p className="text-sm text-gray-600 mb-2">🎓 {member.education}</p>
                    <p className="text-sm text-gray-700 mb-3">{member.bio}</p>
                    {member.companyExpansionNeeds && (
                      <div className="mb-3">
                        <span className="text-xs font-medium text-gray-500">Business Goals:</span>
                        <p className="text-sm text-gray-700 mt-1 bg-blue-50 p-2 rounded">{member.companyExpansionNeeds}</p>
                      </div>
                    )}
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium text-gray-500">Interests:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {member.interests.map((interest, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500">Skills:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {member.skills.map((skill, index) => (
                            <SkillTag key={index} skill={skill} variant="outline" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">View Profile</Button>
                    <Button size="sm">Message</Button>
                  </div>
                </div>
              </div>
            ))}
            {filteredMembers.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No members found matching your search criteria.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchTab;
