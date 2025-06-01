"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Star, Cloud, ArrowLeft, RefreshCw, CheckCircle, Book, Home } from "lucide-react"

function FullStoryContent() {
  const [story, setStory] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const outline = searchParams.get("outline") || ""

  // 模拟AI生成完整故事
  const generateStory = () => {
    setIsGenerating(true)
    // 模拟API调用延迟
    setTimeout(() => {
      const sampleStory = `第一章：开始的冒险

在一个阳光明媚的早晨，小猫咪咪从温暖的小床上醒来。咪咪有着雪白的毛发和一双闪闪发光的蓝眼睛，它住在村庄里最温馨的小房子里。

"今天是个特别的日子！"咪咪兴奋地想着。昨天晚上，它听奶奶讲了一个关于神秘森林的故事，那里据说藏着一个神奇的宝藏。

咪咪收拾好小背包，装上了一些小鱼干和清水，还有奶奶给它的幸运铃铛。"我要去寻找那个传说中的宝藏！"咪咪勇敢地说道。

第二章：遇见新朋友

咪咪走出村庄，来到了一片绿油油的草地。突然，它听到了一阵轻微的哭声。循着声音，咪咪发现了一只小兔子躲在大树后面。

"你好，我叫咪咪。你为什么哭呀？"咪咪温柔地问道。

小兔子抬起头，眼睛红红的："我叫跳跳，我迷路了，找不到回家的路了。"

"别担心！"咪咪安慰道，"我正要去神秘森林探险，要不要一起走？说不定路上能找到你回家的路呢！"

跳跳擦干眼泪，点点头："好的，谢谢你，咪咪！"

从此，两个小伙伴开始了一起的冒险之旅。

第三章：克服困难

走着走着，他们遇到了一只看起来很凶的大熊。跳跳害怕得躲到了咪咪身后。

"不要害怕，"咪咪勇敢地走向前，"你好，大熊先生，我们只是路过，请问可以让我们通过吗？"

大熊停下脚步，仔细看了看这两个小家伙，突然笑了："哈哈，你们真有礼貌！我叫大力，其实我一点也不凶，只是长得比较大而已。你们要去哪里呀？"

咪咪和跳跳惊讶地发现，大力其实是个很友善的朋友。大力还告诉他们通往神秘森林的正确路线。

"原来外表并不能代表一切呢！"跳跳恍然大悟。

第四章：发现真正的宝藏

在大力的指引下，咪咪和跳跳终于来到了传说中的神秘森林深处。那里有一个美丽的小湖，湖水清澈见底，周围开满了五颜六色的花朵。

"宝藏在哪里呢？"跳跳好奇地问。

咪咪看着眼前的美景，又看看身边的好朋友跳跳，突然明白了什么。

"我找到了！"咪咪开心地说，"真正的宝藏就是我们的友谊，还有这一路上学到的勇气和善良！"

跳跳也笑了："是的！而且我也不再害怕了，因为有你这样的好朋友！"

两个小伙伴手拉手，在美丽的湖边唱起了快乐的歌。后来，大力也找到了他们，三个好朋友一起度过了美好的时光。

最后，咪咪帮助跳跳找到了回家的路，而它们的友谊也将永远持续下去。

故事的结尾：

从那以后，咪咪明白了一个道理：最珍贵的宝藏不是金银财宝，而是友谊、勇气和一颗善良的心。每当遇到困难时，咪咪都会想起这次冒险，变得更加勇敢和坚强。

而跳跳也变得更加自信，它经常来找咪咪一起玩耍。大力也成了他们的好朋友，三个小伙伴经常一起在森林里探险。

这个故事告诉我们：真正的宝藏就在我们身边，那就是友谊和爱。`

      setStory(sampleStory)
      setIsGenerating(false)
    }, 3000)
  }

  // 页面加载时自动生成故事
  useEffect(() => {
    if (outline) {
      generateStory()
    }
  }, [outline])

  const handleRegenerateStory = () => {
    generateStory()
  }

  const handleConfirmStory = () => {
    if (story.trim()) {
      // 跳转到角色形象页面
      router.push(`/characters?story=${encodeURIComponent(story)}`)
    }
  }

  const handleGoBack = () => {
    router.back()
  }

  // 将故事分段
  const storyParagraphs = story.split("\n\n").filter((p) => p.trim())

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
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 rounded-full mb-6 shadow-lg animate-bounce relative">
              <Book className="w-12 h-12 text-white" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              </div>
            </div>

            {/* 标题 - 艺术字体风格 */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text transform -rotate-1 relative">
                完整故事
                <span className="absolute -top-4 -right-6 text-yellow-400 animate-pulse text-3xl">📚</span>
                <span className="absolute -bottom-2 -left-4 text-green-400 animate-bounce text-2xl">✨</span>
              </h1>

              {/* 装饰性背景 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 rounded-3xl opacity-20 -z-10 transform rotate-1"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 rounded-3xl opacity-15 -z-20 transform -rotate-1"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 font-bold">
              ✨ AI魔法师为你创作了完整的故事，快来阅读吧！ ✨
            </p>
          </div>

          {/* 故事内容展示区域 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-green-200 relative overflow-hidden mb-8">
            {/* 装饰性背景 */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-200 to-blue-200 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-tr-full opacity-50"></div>

            <div className="relative z-10">
              <label className="flex items-center gap-2 text-left text-xl font-black text-gray-700 mb-6">
                <Book className="w-6 h-6 text-green-500" />
                你的专属故事：
              </label>

              {isGenerating ? (
                <div className="min-h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mb-6 animate-spin">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-700 mb-2">📖 AI魔法师正在编写故事...</h3>
                    <p className="text-lg text-gray-500 font-medium">精彩的冒险即将开始，请耐心等待！</p>
                    <div className="flex justify-center gap-1 mt-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {storyParagraphs.map((paragraph, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border-2 border-green-200 shadow-sm"
                    >
                      <p className="text-lg leading-relaxed text-gray-700 font-medium whitespace-pre-line">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-500 font-medium">📖 故事已生成完成，请仔细阅读</div>
                <div className="text-sm text-gray-500 font-medium">{story.length} 字符</div>
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              onClick={handleRegenerateStory}
              disabled={isGenerating}
              className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-black text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-4 border-white"
            >
              <RefreshCw className={`w-6 h-6 mr-3 ${isGenerating ? "animate-spin" : ""}`} />🔄 重新生成故事
            </Button>

            <Button
              onClick={handleConfirmStory}
              disabled={!story.trim() || isGenerating}
              className="bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white font-black text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-4 border-white"
            >
              <CheckCircle className="w-6 h-6 mr-3" />✅ 确认故事并继续
            </Button>
          </div>

          {/* 提示信息 */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg inline-block">
              <p className="text-lg text-gray-600 font-bold">🎨 确认故事后，AI将为你设计可爱的角色形象</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FullStoryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mb-4 animate-spin">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <p className="text-xl font-bold text-gray-600">📖 正在准备故事页面...</p>
          </div>
        </div>
      }
    >
      <FullStoryContent />
    </Suspense>
  )
}
