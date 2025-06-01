"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Sparkles, Heart, Star, Cloud, Smile, Rainbow } from "lucide-react"

export default function Homepage() {
  const [storyInput, setStoryInput] = useState("")
  const router = useRouter()

  const handleStartCreating = () => {
    if (storyInput.trim()) {
      // 跳转到故事大纲页面，并传递用户输入
      router.push(`/story-outline?theme=${encodeURIComponent(storyInput)}`)
    }
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

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* 主标题区域 */}
          <div className="mb-10">
            {/* 可爱的logo */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 rounded-full mb-6 shadow-lg animate-bounce relative">
              <BookOpen className="w-12 h-12 text-white" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              </div>
            </div>

            {/* 主标题 - 修复显示问题的艺术可爱字体 */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text transform -rotate-1 mb-2 relative">
                为你的孩子
                {/* 装饰性星星 */}
                <span className="absolute -top-4 -right-4 text-yellow-400 animate-pulse text-2xl">⭐</span>
              </h1>
              <h1 className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text transform rotate-1 relative">
                创作专属故事绘本
                {/* 装饰性爱心和闪光 */}
                <span className="absolute -top-6 -left-6 text-pink-400 animate-bounce text-2xl">💖</span>
                <span className="absolute -bottom-2 -right-8 text-purple-400 animate-pulse text-2xl">✨</span>
              </h1>

              {/* 添加可爱的装饰边框 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-3xl opacity-20 -z-10 transform rotate-2"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-3xl opacity-15 -z-20 transform -rotate-1"></div>
            </div>

            {/* 可爱的副标题 */}
            <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
              <Rainbow className="w-6 h-6 text-pink-400" />
              <p className="text-xl md:text-2xl text-gray-700 font-bold">✨ 让想象力飞翔，创造属于你的魔法故事 ✨</p>
              <Rainbow className="w-6 h-6 text-purple-400" />
            </div>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              🌟 只需要一个小小的想法，AI魔法师就能为你创作出超棒的故事绘本！
              <br />📚 配有美美的图片和温柔的声音哦～
            </p>
          </div>

          {/* 输入区域 - 更可爱的设计 */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-pink-200 relative overflow-hidden">
              {/* 装饰性背景 */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-200 to-pink-200 rounded-bl-full opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-tr-full opacity-50"></div>

              <div className="relative z-10">
                <label
                  htmlFor="story-input"
                  className="flex items-center gap-2 text-left text-xl font-black text-gray-700 mb-4"
                >
                  <Smile className="w-6 h-6 text-yellow-500" />
                  告诉我们你想要什么样的故事：
                </label>
                <Textarea
                  id="story-input"
                  placeholder="🐱 比如：一只超级勇敢的小猫咪去冒险&#10;🐰 或者：小兔子学会了分享玩具的故事&#10;🌈 还有：关于友谊和快乐的温暖故事..."
                  value={storyInput}
                  onChange={(e) => setStoryInput(e.target.value)}
                  className="min-h-[140px] text-lg border-2 border-pink-300 focus:border-purple-400 rounded-2xl resize-none font-medium bg-gradient-to-br from-white to-pink-50 placeholder:text-gray-400 placeholder:opacity-60"
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="text-sm text-gray-500 font-medium">💭 发挥你的想象力吧！</div>
                  <div className="text-sm text-gray-500 font-medium">{storyInput.length}/200</div>
                </div>
              </div>
            </div>
          </div>

          {/* 开始创作按钮 - 更可爱 */}
          <div className="mb-12">
            <Button
              onClick={handleStartCreating}
              disabled={!storyInput.trim()}
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white font-black text-xl md:text-2xl px-12 md:px-16 py-4 md:py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-4 border-white"
            >
              <Sparkles className="w-6 md:w-8 h-6 md:h-8 mr-3 animate-spin" />🎨 开始创作魔法故事 ✨
            </Button>
          </div>

          {/* 特色说明 - 更可爱的卡片 */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-pink-200 transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-3">🌟 个性化故事</h3>
              <p className="text-gray-600 font-medium">根据你的奇思妙想创作独一无二的故事情节</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-purple-200 transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-3">🎨 精美插图</h3>
              <p className="text-gray-600 font-medium">AI画家为你绘制超级美丽的插图</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-3">🎵 温馨朗读</h3>
              <p className="text-gray-600 font-medium">温柔的AI声音为宝贝朗读美妙故事</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
