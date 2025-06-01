import { Sparkles } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mb-4 animate-spin">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <p className="text-xl font-bold text-gray-600">📖 正在准备完整故事页面...</p>
      </div>
    </div>
  )
}
