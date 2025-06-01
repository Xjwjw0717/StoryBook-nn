"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Sparkles, Heart, Star, Cloud, ArrowLeft, RefreshCw, CheckCircle } from "lucide-react"

export default function OutlinePage() {
  const [outline, setOutline] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const theme = searchParams.get("theme") || ""

  // 模拟AI生成大纲
  const generateOutline = () => {
    setIsGenerating(true)
    // 模拟API调用延迟
    setTimeout(() => {
      const sampleOutline = `📖 故事标题：${theme}

🌟 故事大纲：

第一章：开始的冒险
• 介绍主角小猫咪咪，它住在一个温馨的小村庄
• 咪咪听说了远方神秘森林里的传说
• 决定踏上寻找传说中宝藏的冒险之旅

第二章：遇见新朋友
• 在路上遇到了胆小但善良的小兔子跳跳
• 两个小伙伴决定一起前行
• 学会了团队合作的重要性

第三章：克服困难
• 遇到了看起来很凶的大熊，但发现它其实很友善
• 通过智慧和勇气解决了路上的难题
• 明白了外表并不能代表一切

第四章：发现真正的宝藏
• 找到了传说中的地方
• 发现真正的宝藏是友谊和成长
• 开心地回到家，分享这次美妙的经历

💝 故事主题：勇气、友谊、成长`

      setOutline(sampleOutline)
      setIsGenerating(false)
    }, 2000)
  }

  // 页面加载时自动生成大纲
  useEffect(() => {
    if (theme) {
      generateOutline()
    }
  }, [theme])

  const handleRegenerateOutline = () => {
    generateOutline()
  }

  const handleConfirmOutline = () => {
    if (outline.trim()) {
      // 跳转到下一步（故事生成页面）
      router.push(`/story?outline=${encodeURIComponent(outline)}`)
    }
  }

  const handleGoBack = () => {
    router.push("/")
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
        <div className="max-w-4xl mx-auto">
          {/* 返回按钮 */}
          <div className="mb-6">
            <Button
              onClick={handleGoBack}
              variant="outline"
              className="bg-white border-2 border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full px-6 py-2 font-bold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
          </div>

          {/* 页面标题 */}
          <div className="text-center mb-8">
            {/* 可爱的图标 */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full mb-4 shadow-lg animate-bounce relative">
              <BookOpen className="w-10 h-10 text-white" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
              </div>
            </div>

            {/* 标题 */}
            <h1 className="text-4xl md:text-6xl font-black tracking-wider text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text mb-4 relative">
              故事大纲
              <span className="absolute -top-3 -right-6 text-yellow-400 animate-pulse text-2xl">📝</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 font-medium">
              ✨ AI魔法师为你创作了故事大纲，你可以自由编辑哦！
            </p>
          </div>

          {/* 用户输入的主题显示 */}
          {theme && (
            <div className="bg-white rounded-2xl p-4 mb-6 border-3 border-yellow-200 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-gray-700">你的故事主题：</span>
              </div>
              <p className="text-gray-600 font-medium">{theme}</p>
            </div>
          )}

          {/* 大纲编辑区域 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-purple-200 relative overflow-hidden mb-8">
            {/* 装饰性背景 */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-200 to-purple-200 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-200 to-yellow-200 rounded-tr-full opacity-50"></div>

            <div className="relative z-10">
              <label
                htmlFor="outline-input"
                className="flex items-center gap-2 text-left text-xl font-black text-gray-700 mb-4"
              >
                <BookOpen className="w-6 h-6 text-purple-500" />
                故事大纲（可编辑）：
              </label>

              {isGenerating ? (
                <div className="min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4 animate-spin">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg font-bold text-gray-600">🎨 AI魔法师正在创作中...</p>
                    <p className="text-sm text-gray-500 mt-2">请稍等片刻，精彩故事即将呈现！</p>
                  </div>
                </div>
              ) : (
                <Textarea
                  id="outline-input"
                  placeholder="故事大纲将在这里显示..."
                  value={outline}
                  onChange={(e) => setOutline(e.target.value)}
                  className="min-h-[400px] text-base border-2 border-purple-300 focus:border-pink-400 rounded-2xl resize-none font-medium bg-gradient-to-br from-white to-purple-50 placeholder:text-gray-400 placeholder:opacity-60"
                />
              )}

              <div className="flex justify-between items-center mt-3">
                <div className="text-sm text-gray-500 font-medium">💡 你可以随意修改大纲内容</div>
                <div className="text-sm text-gray-500 font-medium">{outline.length} 字符</div>
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleRegenerateOutline}
              disabled={isGenerating}
              className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white font-black text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-3 border-white"
            >
              <RefreshCw className={`w-6 h-6 mr-3 ${isGenerating ? "animate-spin" : ""}`} />🔄 重新生成大纲
            </Button>

            <Button
              onClick={handleConfirmOutline}
              disabled={!outline.trim() || isGenerating}
              className="bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white font-black text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-3 border-white"
            >
              <CheckCircle className="w-6 h-6 mr-3" />✅ 确认大纲并继续
            </Button>
          </div>

          {/* 提示信息 */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 font-medium">💝 确认大纲后，AI将为你创作完整的故事内容和精美插图</p>
          </div>
        </div>
      </div>
    </div>
  )
}
