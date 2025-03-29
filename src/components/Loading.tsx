import { SparklesCore } from './ui/sparkles'

const Loading = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
    <SparklesCore
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      className="w-full h-full absolute"
      particleColor='#fab1a0'
    />
    <div className="text-2xl font-bold text-white z-10">
      Loading...
    </div>
  </div>
  )
}

export default Loading