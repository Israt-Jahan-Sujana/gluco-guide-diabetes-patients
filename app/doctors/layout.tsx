import { Navigation } from "@/components"

export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <div className="ml-auto md:w-[calc(100%-72px)] xl:w-[calc(100%-240px)] min-h-[calc(100vh-64px)] flex items-center justify-center">
        {children}
      </div>
    </>
  )
}
