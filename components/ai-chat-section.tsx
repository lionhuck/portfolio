"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function AIChatSection() {
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: t("chat.welcome"),
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)


  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      })

      const data = await res.json()

      const replyText =
        typeof data.reply === "string"
          ? data.reply
          : data.reply?.content || "No pude generar una respuesta 😅"

      const assistantMessage: Message = {
        role: "assistant",
        content: replyText,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      const assistantMessage: Message = {
        role: "assistant",
        content: "Hubo un problema al conectarme con la IA 😕",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <section
      id="chat"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 px-4 py-2 rounded-full mb-4">
              <Bot className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">{t("chat.subtitle")}</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-4">{t("chat.title")}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t("IA Personal - Hugging Face + Deep Seek")}</p>
          </div>
          <Card className="border-0 shadow-2xl bg-white/5 backdrop-blur-xl overflow-hidden">
            <CardContent className="p-0">

              {/* Chat messages */}
              <div className="h-[400px] overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-600 to-teal-600"
                          : "bg-gradient-to-r from-purple-600 to-pink-600"
                      }`}
                    >
                      {message.role === "user" ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                    </div>
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white"
                          : "bg-white/10 backdrop-blur-sm text-gray-100 border border-white/10"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-2 ${message.role === "user" ? "text-blue-100" : "text-gray-400"}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-purple-600 to-pink-600">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick questions buttons - just above input */}
              <div className="flex flex-wrap gap-2 p-4 border-t border-white/10 bg-white/5">
                {[
                  "Cuentame sobre ti",
                  "Estudios",
                  "Proyectos destacados",
                  "Dato curioso",
                  "Intereses musicales",
                ].map((q, i) => (
                  <Button
                    key={i}
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setInputValue(q)
                      handleSendMessage()
                    }}
                  >
                    {q}
                  </Button>
                ))}
              </div>

              {/* Input area */}
              <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex gap-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t("chat.placeholder")}
                    className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {t("poweredBy DeepSeek-V3-0324 on Hugging Face")}
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
