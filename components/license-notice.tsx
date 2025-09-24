export function LicenseNotice() {
  return (
    <section className="py-16 px-4 bg-primary/10 border-y border-primary/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 animate-pulse-glow">
          <span className="text-2xl font-bold text-primary-foreground">!</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-fade-in-up">Important Notice</h3>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-slide-in-left">
          All music users are required to apply for a license to use registered music publicly, including event shows,
          commercial broadcasts, and public performances. Ensure compliance with Namibian music copyright laws.
        </p>
      </div>
    </section>
  )
}
