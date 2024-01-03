import Navbar from "@/components/navbar"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Logo from "@/logo.png"

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center pt-[5%]">
      <div id="name" className="space-y-3">
        <div className="pb-[5%]">
          <Navbar />
        </div>
        <h1 className="font-extrabold text-4xl">Mattis Hüttenrauch</h1>
        <p>Fullstack developer from Sweden interested in a learning a lot of different technologies. Currently working on these projects.</p>
        <p></p>
        <span>👇</span>
        
        <div id="projects" className="pt-[5%]">
          <h1 className="font-bold text-3xl flex">Projects</h1>
          
          <div id="card" className="pt-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">VoiceClone</CardTitle>
                <CardDescription>November 2023 - Now</CardDescription>
                <p>Creating Ai generated voiceovers for content creation.</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
