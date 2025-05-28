
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { mockMessages } from "@/data/mockData";

interface Message {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  fullContent: string;
  time: string;
  unread: boolean;
}

const MessagesTab = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [messages] = useState<Message[]>(mockMessages);

  const handleMessageClick = (messageId: number) => {
    setSelectedMessage(messageId);
    const message = messages.find(m => m.id === messageId);
    if (message && message.unread) {
      message.unread = false;
    }
  };

  const handleBackToMessages = () => {
    setSelectedMessage(null);
  };

  const selectedMessageData = messages.find(m => m.id === selectedMessage);

  return (
    <div className="space-y-6">
      {!selectedMessage ? (
        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
            <CardDescription>
              Connect with other ABTC Bulgaria members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-50 ${message.unread ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                  onClick={() => handleMessageClick(message.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className={`font-medium text-sm ${message.unread ? 'font-semibold' : ''}`}>
                          {message.sender}
                        </h4>
                        {message.unread && (
                          <Badge variant="secondary" className="text-xs">New</Badge>
                        )}
                      </div>
                      <p className={`text-sm ${message.unread ? 'font-medium' : 'text-gray-600'}`}>
                        {message.subject}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {message.preview}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">Compose New Message</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleBackToMessages}
                className="p-1"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <CardTitle className="text-lg">{selectedMessageData?.subject}</CardTitle>
                <CardDescription>
                  From: {selectedMessageData?.sender} • {selectedMessageData?.time}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-line text-sm">
              {selectedMessageData?.fullContent}
            </div>
            <div className="mt-6 flex space-x-2">
              <Button size="sm">Reply</Button>
              <Button variant="outline" size="sm">Forward</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MessagesTab;
