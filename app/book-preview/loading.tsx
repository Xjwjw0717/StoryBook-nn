import { BookOpen } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-4 animate-spin">
          <BookOpen className="w-10 h-10 text-white" />
        </div>
        <p className="text-xl font-bold text-gray-600">📚 正在准备绘本预览...</p>
        <div className="flex justify-center gap-1 mt-4">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}
