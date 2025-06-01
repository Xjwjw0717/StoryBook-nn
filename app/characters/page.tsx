"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Star, Cloud, ArrowLeft, RefreshCw, CheckCircle, Users, Palette, Home } from "lucide-react"

function CharactersContent() {
  const [characters, setCharacters] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)
  const searchParams = useSearchParams()
  const router = useRouter()
  const story = searchParams.get("story") || ""

  // 模拟AI生成角色形象
  const generateCharacters = () => {
    setIsGenerating(true)
    setSelectedCharacter(null)
    // 模拟API调用延迟
    setTimeout(() => {
      // 使用占位符图片
      const newCharacters = [
        "/placeholder.svg?height=300&width=300&text=小猫咪咪",
        "/placeholder.svg?height=300&width=300&text=小兔跳跳",
      ]
      setCharacters(newCharacters)
      setIsGenerating(false)
    }, 2500)
  }

  // 页面加载时自动生成角色形象
  useEffect(() => {
    if (story) {
      generateCharacters()
    }
  }, [story])

  const handleRegenerateCharacters = () => {
    generateCharacters()
  }

  const handleSelectCharacter = (index: number) => {
    setSelectedCharacter(index)
  }

  const handleConfirmCharacter = () => {
    if (selectedCharacter !== null) {
      // 跳转到分镜脚本页面
      router.push(
        `/storyboard?character=${encodeURIComponent(characters[selectedCharacter])}&story=${encodeURIComponent(story)}`,
      )
    }
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 relative overflow-hidden">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 云朵装饰 */}
        <div className="absolute top-10 left-10 text-white opacity-80">
          <Cloud size={60} className="fill-current" />
        </div>
        <div className="absolute top-20 right-20 text-white opacity-70">
          <Cloud size={40} className="fill-current" />
        </div>
        <div className="absolute bottom-40 left-16 text-white opacity-75">
          <Cloud size={50} className="fill-current" />
        </div>

        {/* 星星装饰 */}
        <div className="absolute top-32 left-1/4 text-yellow-400 opacity-80 animate-pulse">
          <Star size={24} className="fill-current" />
        </div>
        <div className="absolute top-16 right-1/3 text-pink-400 opacity-70 animate-pulse">
          <Star size={20} className="fill-current" />
        </div>
        <div className="absolute bottom-32 right-1/4 text-purple-400 opacity-80 animate-pulse">
          <Star size={28} className="fill-current" />
        </div>

        {/* 爱心装饰 */}
        <div className="absolute top-40 right-10 text-red-300 opacity-60 animate-bounce">
          <Heart size={20} className="fill-current" />
        </div>
        <div className="absolute bottom-20 left-1/3 text-pink-300 opacity-70 animate-bounce">
          <Heart size={24} className="fill-current" />
        </div>

        {/* 闪光装饰 */}
        <div className="absolute top-60 left-20 text-yellow-300 opacity-60 animate-spin">
          <Sparkles size={20} />
        </div>
        <div className="absolute bottom-60 right-16 text-blue-300 opacity-70 animate-spin">
          <Sparkles size={24} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 返回按钮 */}
          <div className="mb-6 space-y-3">
            <div>
              <Button
                onClick={handleGoBack}
                variant="outline"
                className="bg-white border-2 border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full px-6 py-2 font-bold w-32"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回上一步
              </Button>
            </div>
            <div>
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="bg-white border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-6 py-2 font-bold w-32"
              >
                <Home className="w-4 h-4 mr-2" />
                返回首页
              </Button>
            </div>
          </div>

          {/* 页面标题 */}
          <div className="text-center mb-8">
            {/* 可爱的图标 */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 rounded-full mb-6 shadow-lg animate-bounce relative">
              <Users className="w-12 h-12 text-white" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              </div>
            </div>

            {/* 标题 - 艺术字体风格 */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text transform -rotate-1 relative">
                角色形象
                <span className="absolute -top-4 -right-6 text-yellow-400 animate-pulse text-3xl">🎭</span>
                <span className="absolute -bottom-2 -left-4 text-pink-400 animate-bounce text-2xl">✨</span>
              </h1>

              {/* 装饰性背景 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 rounded-3xl opacity-20 -z-10 transform rotate-1"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-200 via-purple-200 to-pink-200 rounded-3xl opacity-15 -z-20 transform -rotate-1"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 font-bold">✨ AI画家为你的故事角色设计了可爱的形象！ ✨</p>
          </div>

          {/* 角色形象展示区域 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-purple-200 relative overflow-hidden mb-8">
            {/* 装饰性背景 */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-200 to-pink-200 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-200 to-yellow-200 rounded-tr-full opacity-50"></div>

            <div className="relative z-10">
              <label className="flex items-center gap-2 text-left text-xl font-black text-gray-700 mb-8">
                <Palette className="w-6 h-6 text-purple-500" />
                选择你喜欢的角色形象：
              </label>

              {isGenerating ? (
                <div className="min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6 animate-spin">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-700 mb-2">🎨 AI画家正在创作角色形象...</h3>
                    <p className="text-lg text-gray-500 font-medium">正在为你的故事角色设计可爱的外观！</p>
                    <div className="flex justify-center gap-1 mt-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {characters.map((character, index) => (
                    <div
                      key={index}
                      className={`relative group cursor-pointer transition-all duration-300 ${
                        selectedCharacter === index ? "transform scale-105" : "hover:transform hover:scale-102"
                      }`}
                      onClick={() => handleSelectCharacter(index)}
                    >
                      <div
                        className={`bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border-4 shadow-xl transition-all duration-300 ${
                          selectedCharacter === index
                            ? "border-purple-400 shadow-2xl"
                            : "border-purple-200 hover:border-purple-300"
                        }`}
                      >
                        {/* 角色图片 */}
                        <div className="relative mb-4">
                          <img
                            src={character || "/placeholder.svg"}
                            alt={`角色形象 ${index + 1}`}
                            className="w-full h-64 object-cover rounded-2xl border-2 border-purple-200"
                          />
                          {selectedCharacter === index && (
                            <div className="absolute inset-0 bg-purple-400 bg-opacity-20 rounded-2xl flex items-center justify-center">
                              <div className="bg-white rounded-full p-3 shadow-lg">
                                <CheckCircle className="w-8 h-8 text-purple-500" />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* 角色名称 */}
                        <div className="text-center">
                          <h3 className="text-xl font-black text-gray-700 mb-2">
                            {index === 0 ? "🐱 小猫咪咪" : "🐰 小兔跳跳"}
                          </h3>
                          <p className="text-sm text-gray-500 font-medium">
                            {index === 0 ? "勇敢的小冒险家" : "善良的小伙伴"}
                          </p>
                        </div>

                        {/* 选中指示器 */}
                        {selectedCharacter === index && (
                          <div className="absolute -top-2 -right-2">
                            <div className="bg-purple-500 text-white rounded-full p-2 shadow-lg animate-pulse">
                              <CheckCircle className="w-5 h-5" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-center items-center mt-6">
                <div className="text-sm text-gray-500 font-medium">💡 点击选择你最喜欢的角色形象</div>
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              onClick={handleRegenerateCharacters}
              disabled={isGenerating}
              className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-black text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-4 border-white"
            >
              <RefreshCw className={`w-6 h-6 mr-3 ${isGenerating ? "animate-spin" : ""}`} />🎨 重新生成形象
            </Button>

            <Button
              onClick={handleConfirmCharacter}
              disabled={selectedCharacter === null || isGenerating}
              className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-black text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-4 border-white"
            >
              <CheckCircle className="w-6 h-6 mr-3" />✅ 选择此形象
            </Button>
          </div>

          {/* 提示信息 */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg inline-block">
              <p className="text-lg text-gray-600 font-bold">🎬 确认角色形象后，AI将为你创作分镜脚本和插图</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CharactersPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4 animate-spin">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <p className="text-xl font-bold text-gray-600">🎨 正在准备角色形象页面...</p>
          </div>
        </div>
      }
    >
      <CharactersContent />
    </Suspense>
  )
}
