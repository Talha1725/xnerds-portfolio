import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Welcome to Xnerds. How can I help you today?",
      sender: "bot",
      isTyping: false,
      isWelcomeMessage: true,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, sender: "user", isTyping: false, isWelcomeMessage: false };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          text: "Thank you for your message. This is a demo chat interface.",
          sender: "bot",
          isTyping: false,
          isWelcomeMessage: false
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Interface */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 lg:w-[500px] lg:h-[500px] bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5 text-white" />
              <h3 className="text-white font-semibold">NerdBot</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="h-[calc(100%-10rem)] p-6">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-4 max-w-[80%] ${
                      message.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <Avatar className="w-10 h-10 border-2 border-slate-600/50">
                      <AvatarFallback
                        className={`${
                          message.sender === "user"
                            ? "bg-gradient-to-br from-blue-500 to-purple-600"
                            : "bg-gradient-to-br from-cyan-500 to-purple-600"
                        } text-white`}
                      >
                        {message.sender === "user" ? (
                          <User className="w-5 h-5" />
                        ) : (
                          <Bot className="w-5 h-5" />
                        )}
                      </AvatarFallback>
                    </Avatar>

                    <div
                      className={`flex flex-col gap-2 ${
                        message.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        {message.sender === "user" ? "You" : "Nerd Bot"}
                        {message.sender === "bot" && (
                          <Sparkles className="w-3 h-3" />
                        )}
                      </div>

                      <div
                        className={`relative p-4 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg"
                            : "bg-slate-800/80 text-slate-100 border border-slate-700/50 shadow-lg"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">
                          {message.text}
                        </p>

                        {/* Message tail */}
                        <div
                          className={`absolute top-4 ${
                            message.sender === "user"
                              ? "right-0 translate-x-1/2"
                              : "left-0 -translate-x-1/2"
                          }`}
                        >
                          <div
                            className={`w-3 h-3 rotate-45 ${
                              message.sender === "user"
                                ? "bg-gradient-to-br from-blue-600 to-purple-600"
                                : "bg-slate-800/80 border-l border-t border-slate-700/50"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="p-6 border-t border-slate-700/50 bg-slate-800/50">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <div className="relative flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="bg-slate-800/80 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20 pr-12 h-12 rounded-xl"
                />
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white h-12 px-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!input.trim()}
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default ChatBot; 