"use client"



export function TopNavigation() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span>info@namsa.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>+264 81 232 0168</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">Empowering Artists to Control Their Music in Namibia</span>
          </div>
        </div>
      </div>
    </div>
  )
}
