"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Home,
} from "lucide-react"

// 模拟绘本页面数据
const bookPages = [
  {
    id: 0,
    title: "勇敢的小猫咪咪",
    image: "/placeholder.svg?height=400&width=600&text=封面：勇敢的小猫咪咪",
    text: "一个关于勇气、友谊和成长的温馨故事",
    audio: "/audio-placeholder.mp3",
  },
  {
    id: 1,
    title: "第一章：温馨的早晨",
    image: "/placeholder.svg?height=400&width=600&text=咪咪醒来的温馨场景",
    text: "在一个阳光明媚的早晨，小猫咪咪从温暖的小床上醒来。咪咪有着雪白的毛发和一双闪闪发光的蓝眼睛，它住在村庄里最温馨的小房子里。阳光透过窗户洒在咪咪的脸上，它伸了个懒腰，准备开始新的一天。",
    audio: "/audio-placeholder.mp3",
  },
  {
    id: 2,
    title: "第二章：决定冒险",
    image: "/placeholder.svg?height=400&width=600&text=咪咪准备出发冒险",
    text: "咪咪收拾好小背包，装上了一些小鱼干和清水，还有奶奶给它的幸运铃铛。它站在门口，望着远方的神秘森林，眼中闪烁着勇敢的光芒。"我要去寻找那个传说中的宝藏！"咪咪勇敢地说道。",
    audio: "/audio-placeholder.mp3",
  },
  {
    id: 3,
    title: "第三章：遇见小兔跳跳",
    image: "/placeholder.svg?height=400&width=600&text=咪咪发现哭泣的跳跳",
    text: "咪咪走出村庄，来到了一片绿油油的草地。突然，它听到了一阵轻微的哭声。循着声音，咪咪发现了一只小兔子躲在大树后面。小兔子眼睛红红的，看起来很伤心。咪咪温柔地走向前去。",
    audio: "/audio-placeholder.mp3",
  },
  {
    id: 4,
    title: "第四章：成为朋友",
    image: "/placeholder.svg?height=400&width=600&text=咪咪和跳跳成为朋友",
    text: '"你好，我叫咪咪。你为什么哭呀？\"咪咪温柔地问道。小兔子抬起头："我叫跳跳，我迷路了。","别担心！我要去寻找那个传说中的宝藏！"咪咪安慰道。跳跳擦干眼泪，点点头。',
    audio: "/audio-placeholder.mp3",
  },
  {
    id: 5,
    title: "第五章：遇见大熊大力",
    image: "/placeholder.svg?height=400&width=600&text=遇见看起来凶猛的大熊",
    text: "走着走着，他们遇到了一只看起来很凶的大熊。跳跳害怕得躲到了咪咪身后。但咪咪勇敢地走向前："你好，大熊先生，我们只是路过，请问可以让我们通过吗？"大熊停下脚步，仔细看了看这两个小家伙。",
    audio: "/audio-placeholder.mp3",
  },
  {
    id: 6,
    title: "第六章：发现真相",
    image: "/placeholder.svg?height=400&width=600&text=发现大力其实很友善",
    text: '大熊突然笑了："哈哈，你们真有礼貌！我叫大力，其实我一点也不凶，只是长得比较大而已。"咪咪和跳跳惊讶地发现，大力其实是个很友善的朋友。"原来外表并不能代表一切呢！"跳跳恍然大悟。',
    audio: "/audio-placeholder.mp3",
  },
  {
    id: 7,
    title: "第七章：到达神秘森林",
    image: "/placeholder.svg?height=400&width=600&text=美丽的神秘森林湖泊",
    text: "在大力的指引下，咪咪和跳跳终于来到了传说中的神秘森林深处。那里有一个美丽的小湖，湖水清澈见底，周围开满了五颜六色的花朵。阳光透过树叶洒在湖面上，波光粼粼，美得像仙境一样。",
    audio: "/audio-placeholder.mp3",
  },
  {
    id: 8,
    title: "第八章：发现真正的宝藏",
    image: "/placeholder.svg?height=400&width=600&text=发现友谊是真正的宝藏",
    text: '"宝藏在哪里呢？"跳跳好奇地问。咪咪看着眼前的美景，又看看身边的好朋友跳跳，突然明白了什么。"我找到了！真正的宝藏就是我们的友谊，还有这一路上学到的勇气和善良！"',
    audio: "/audio-placeholder.mp3",
  },
  {
    id: 9,
    title: "故事结束",
    image: "/placeholder.svg?height=400&width=600&text=故事结束：咪咪、跳跳和大力成为好朋友",
    text: "从那以后，咪咪、跳跳和大力成为了最好的朋友。他们经常一起在森林里探险，分享彼此的故事。这个冒险教会了他们：真正的宝藏不是金银财宝，而是友谊、勇气和一颗善良的心。",
    audio: "/audio-placeholder.mp3",
  },
]

export default function BookPreviewPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const bookContainerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const totalPages = bookPages.length

  // 处理翻页
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
      setIsPlaying(false)
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      setIsPlaying(false)
    }
  }

  // 处理音频播放
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => {
          console.log("音频播放失败:", error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  // 处理静音
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // 处理全屏
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (bookContainerRef.current?.requestFullscreen) {
        bookContainerRef.current.requestFullscreen().catch((err) => {
          console.log(`全屏请求失败: ${err.message}`)
        })
        setIsFullScreen(true)
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullScreen(false)
      }
    }
  }

  // 处理键盘事件
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextPage()
      } else if (e.key === "ArrowLeft") {
        goToPrevPage()
      } else if (e.key === " ") {
        e.preventDefault()
        toggleAudio()
      } else if (e.key === "f") {
        toggleFullScreen()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentPage, isPlaying])

  // 监听全屏变化
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullScreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange)
    }
  }, [])

  // 返回上一页
  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-red-100">
      {/* 返回按钮 - 非全屏时显示 */}
      {!isFullScreen && (
        <div className="container mx-auto px-4 py-4 space-y-3">
          <div>
            <Button
              onClick={handleGoBack}
              variant="outline"
              className="bg-white border-2 border-amber-300 text-amber-600 hover:bg-amber-50 rounded-full px-6 py-2 font-bold w-32"
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
      )}

      {/* 绘本容器 */}
      <div
        ref={bookContainerRef}
        className={`container mx-auto px-4 py-4 ${isFullScreen ? "h-screen flex flex-col" : ""}`}
      >
        {/* 绘本标题 - 非全屏时显示 */}
        {!isFullScreen && (
          <div className="text-center mb-8">
            {/* 可爱的图标 */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 rounded-full mb-6 shadow-lg animate-bounce relative">
              <BookOpen className="w-12 h-12 text-white" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              </div>
            </div>

            {/* 标题 - 艺术字体风格 */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text transform -rotate-1 relative">
                绘本预览
                <span className="absolute -top-4 -right-6 text-yellow-400 animate-pulse text-3xl">📚</span>
                <span className="absolute -bottom-2 -left-4 text-amber-400 animate-bounce text-2xl">✨</span>
              </h1>

              {/* 装饰性背景 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 rounded-3xl opacity-20 -z-10 transform rotate-1"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 rounded-3xl opacity-15 -z-20 transform -rotate-1"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 font-bold">✨ 你的专属故事绘本已经准备好啦！ ✨</p>
          </div>
        )}

        {/* 绘本主体 */}
        <div
          className={`bg-white rounded-3xl shadow-2xl overflow-hidden ${isFullScreen ? "flex-1" : "max-w-5xl mx-auto"}`}
        >
          {/* 绘本内容 */}
          <div className="relative h-full flex flex-col">
            {/* 书本装饰 */}
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-amber-200 via-orange-200 to-red-200"></div>

            {/* 当前页内容 */}
            <div className="flex-1 p-6 md:p-10 flex flex-col">
              {/* 页面标题 */}
              <h2 className="text-2xl md:text-3xl font-black text-amber-800 mb-6 text-center">
                {bookPages[currentPage].title}
              </h2>

              {/* 图片和文本区域 */}
              <div className="flex-1 flex flex-col md:flex-row gap-6 items-center">
                {/* 图片区域 */}
                <div className="w-full md:w-1/2">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-2xl border-2 border-amber-200 shadow-lg">
                    <img
                      src={bookPages[currentPage].image || "/placeholder.svg"}
                      alt={bookPages[currentPage].title}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>

                {/* 文本区域 */}
                <div className="w-full md:w-1/2">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-200 shadow-lg h-full">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">{bookPages[currentPage].text}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 控制面板 */}
            <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 p-4 border-t-2 border-amber-200">
              <div className="flex flex-wrap justify-between items-center gap-4">
                {/* 翻页控制 */}
                <div className="flex items-center gap-2">
                  <Button
                    onClick={goToPrevPage}
                    disabled={currentPage === 0}
                    variant="outline"
                    size="icon"
                    className="bg-white border-2 border-amber-300 text-amber-600 hover:bg-amber-50 disabled:opacity-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  <span className="text-sm font-bold text-gray-700">
                    第 {currentPage + 1} / {totalPages} 页
                  </span>

                  <Button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages - 1}
                    variant="outline"
                    size="icon"
                    className="bg-white border-2 border-amber-300 text-amber-600 hover:bg-amber-50 disabled:opacity-50"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* 页面指示器 */}
                <div className="hidden md:flex items-center gap-1">
                  {bookPages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentPage === index ? "bg-amber-500 w-4" : "bg-amber-300 hover:bg-amber-400"
                      }`}
                      aria-label={`跳转到第${index + 1}页`}
                    />
                  ))}
                </div>

                {/* 音频控制 */}
                <div className="flex items-center gap-2">
                  <Button
                    onClick={toggleAudio}
                    variant="outline"
                    size="icon"
                    className="bg-white border-2 border-amber-300 text-amber-600 hover:bg-amber-50"
                  >
                    {isPlaying ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="4" height="12" x="6" y="6" />
                        <rect width="4" height="12" x="14" y="6" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    )}
                  </Button>

                  <Button
                    onClick={toggleMute}
                    variant="outline"
                    size="icon"
                    className="bg-white border-2 border-amber-300 text-amber-600 hover:bg-amber-50"
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>

                  <Button
                    onClick={toggleFullScreen}
                    variant="outline"
                    size="icon"
                    className="bg-white border-2 border-amber-300 text-amber-600 hover:bg-amber-50"
                  >
                    {isFullScreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 快捷键提示 - 非全屏时显示 */}
        {!isFullScreen && (
          <div className="max-w-5xl mx-auto mt-6 bg-white rounded-2xl p-4 border-2 border-amber-200 shadow-lg">
            <h3 className="text-lg font-bold text-gray-700 mb-2">⌨️ 快捷键：</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono">←</span>
                <span className="text-gray-600">上一页</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono">→</span>
                <span className="text-gray-600">下一页</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono">空格</span>
                <span className="text-gray-600">播放/暂停</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono">F</span>
                <span className="text-gray-600">全屏模式</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 隐藏的音频元素 */}
      <audio ref={audioRef} src={bookPages[currentPage].audio} onEnded={() => setIsPlaying(false)} />
    </div>
  )
}
