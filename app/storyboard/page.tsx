"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Star, Cloud, ArrowLeft, Film, ImageIcon, Play, Home } from "lucide-react"

interface StoryboardScene {
  id: number
  title: string
  script: string
  imageUrl: string
}

function StoryboardContent() {
  const [scenes, setScenes] = useState<StoryboardScene[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const character = searchParams.get("character") || ""
  const story = searchParams.get("story") || ""

  // 模拟AI生成分镜脚本
  const generateStoryboard = () => {
    setIsGenerating(true)
    // 模拟API调用延迟
    setTimeout(() => {
      const sampleScenes: StoryboardScene[] = [
        {
          id: 1,
          title: "第一幕：温馨的早晨",
          script:
            "在一个阳光明媚的早晨，小猫咪咪从温暖的小床上醒来。咪咪有着雪白的毛发和一双闪闪发光的蓝眼睛，它住在村庄里最温馨的小房子里。阳光透过窗户洒在咪咪的脸上，它伸了个懒腰，准备开始新的一天。",
          imageUrl: "/placeholder.svg?height=200&width=300&text=咪咪醒来的温馨场景",
        },
        {
          id: 2,
          title: "第二幕：决定冒险",
          script:
            "咪咪收拾好小背包，装上了一些小鱼干和清水，还有奶奶给它的幸运铃铛。它站在门口，望着远方的神秘森林，眼中闪烁着勇敢的光芒。'我要去寻找那个传说中的宝藏！'咪咪勇敢地说道。",
          imageUrl: "/placeholder.svg?height=200&width=300&text=咪咪准备出发冒险",
        },
        {
          id: 3,
          title: "第三幕：遇见小兔跳跳",
          script:
            "咪咪走出村庄，来到了一片绿油油的草地。突然，它听到了一阵轻微的哭声。循着声音，咪咪发现了一只小兔子躲在大树后面。小兔子眼睛红红的，看起来很伤心。咪咪温柔地走向前去。",
          imageUrl: "/placeholder.svg?height=200&width=300&text=咪咪发现哭泣的跳跳",
        },
        {
          id: 4,
          title: "第四幕：成为朋友",
          script:
            "'你好，我叫咪咪。你为什么哭呀？'咪咪温柔地问道。小兔子抬起头：'我叫跳跳，我迷路了。''别担心！我正要去神秘森林探险，要不要一起走？'咪咪安慰道。跳跳擦干眼泪，点点头。",
          imageUrl: "/placeholder.svg?height=200&width=300&text=咪咪和跳跳成为朋友",
        },
        {
          id: 5,
          title: "第五幕：遇见大熊大力",
          script:
            "走着走着，他们遇到了一只看起来很凶的大熊。跳跳害怕得躲到了咪咪身后。但咪咪勇敢地走向前：'你好，大熊先生，我们只是路过，请问可以让我们通过吗？'大熊停下脚步，仔细看了看这两个小家伙。",
          imageUrl: "/placeholder.svg?height=200&width=300&text=遇见看起来凶猛的大熊",
        },
        {
          id: 6,
          title: "第六幕：发现真相",
          script:
            "大熊突然笑了：'哈哈，你们真有礼貌！我叫大力，其实我一点也不凶，只是长得比较大而已。'咪咪和跳跳惊讶地发现，大力其实是个很友善的朋友。'原来外表并不能代表一切呢！'跳跳恍然大悟。",
          imageUrl: "/placeholder.svg?height=200&width=300&text=发现大力其实很友善",
        },
        {
          id: 7,
          title: "第七幕：到达神秘森林",
          script:
            "在大力的指引下，咪咪和跳跳终于来到了传说中的神秘森林深处。那里有一个美丽的小湖，湖水清澈见底，周围开满了五颜六色的花朵。阳光透过树叶洒在湖面上，波光粼粼，美得像仙境一样。",
          imageUrl: "/placeholder.svg?height=200&width=300&text=美丽的神秘森林湖泊",
        },
        {
          id: 8,
          title: "第八幕：发现真正的宝藏",
          script:
            "'宝藏在哪里呢？'跳跳好奇地问。咪咪看着眼前的美景，又看看身边的好朋友跳跳，突然明白了什么。'我找到了！真正的宝藏就是我们的友谊，还有这一路上学到的勇气和善良！'",
          imageUrl: "/placeholder.svg?height=200&width=300&text=发现友谊是真正的宝藏",
        },
      ]
      setScenes(sampleScenes)
      setIsGenerating(false)
    }, 3000)
  }

  // 页面加载时自动生成分镜
  useEffect(() => {
    if (story) {
      generateStoryboard()
    }
  }, [story])

  const handleStartGeneration = () => {
    // 跳转到最终绘本预览页面
    router.push(`/book-preview`)
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
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-full mb-6 shadow-lg animate-bounce relative">
              <Film className="w-12 h-12 text-white" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              </div>
            </div>

            {/* 标题 - 艺术字体风格 */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text transform -rotate-1 relative">
                故事分镜
                <span className="absolute -top-4 -right-6 text-yellow-400 animate-pulse text-3xl">🎬</span>
                <span className="absolute -bottom-2 -left-4 text-indigo-400 animate-bounce text-2xl">✨</span>
              </h1>

              {/* 装饰性背景 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-3xl opacity-20 -z-10 transform rotate-1"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-200 via-indigo-200 to-purple-200 rounded-3xl opacity-15 -z-20 transform -rotate-1"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 font-bold">✨ AI导演为你的故事制作了精美的分镜脚本！ ✨</p>
          </div>

          {/* 分镜展示区域 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-indigo-200 relative overflow-hidden mb-8">
            {/* 装饰性背景 */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-200 to-purple-200 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-200 to-yellow-200 rounded-tr-full opacity-50"></div>

            <div className="relative z-10">
              <label className="flex items-center gap-2 text-left text-xl font-black text-gray-700 mb-8">
                <Film className="w-6 h-6 text-indigo-500" />
                故事分镜脚本：
              </label>

              {isGenerating ? (
                <div className="min-h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6 animate-spin">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-700 mb-2">🎬 AI导演正在制作分镜...</h3>
                    <p className="text-lg text-gray-500 font-medium">正在为你的故事设计精美的分镜脚本！</p>
                    <div className="flex justify-center gap-1 mt-4">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {scenes.map((scene, index) => (
                    <div
                      key={scene.id}
                      className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-3xl border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="grid md:grid-cols-3 gap-6 items-center">
                        {/* 分镜编号和标题 */}
                        <div className="md:col-span-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-black text-lg">
                              {scene.id}
                            </div>
                            <h3 className="text-lg font-black text-gray-700">{scene.title}</h3>
                          </div>

                          {/* 图片预览区域 */}
                          <div className="relative group">
                            <img
                              src={scene.imageUrl || "/placeholder.svg"}
                              alt={scene.title}
                              className="w-full h-40 object-cover rounded-2xl border-2 border-indigo-200 shadow-md"
                            />
                            <div className="absolute inset-0 bg-indigo-500 bg-opacity-0 group-hover:bg-opacity-10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                              <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-80 transition-all duration-300" />
                            </div>
                          </div>
                        </div>

                        {/* 脚本文本 */}
                        <div className="md:col-span-2">
                          <div className="bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                              <span className="text-sm font-bold text-gray-600">场景脚本</span>
                            </div>
                            <p className="text-base leading-relaxed text-gray-700 font-medium">{scene.script}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-center items-center mt-8">
                <div className="text-sm text-gray-500 font-medium">🎭 共 {scenes.length} 个分镜场景</div>
              </div>
            </div>
          </div>

          {/* 开始生成按钮 */}
          <div className="flex justify-center items-center mb-8">
            <Button
              onClick={handleStartGeneration}
              disabled={isGenerating || scenes.length === 0}
              className="bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-2xl px-16 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-4 border-white"
            >
              <Play className="w-8 h-8 mr-4" />🎨 开始生成绘本
            </Button>
          </div>

          {/* 提示信息 */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg inline-block">
              <p className="text-lg text-gray-600 font-bold">📚 点击开始生成，AI将为每个分镜创作精美的插图和音频</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function StoryboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-4 animate-spin">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <p className="text-xl font-bold text-gray-600">🎬 正在准备分镜脚本页面...</p>
          </div>
        </div>
      }
    >
      <StoryboardContent />
    </Suspense>
  )
}
