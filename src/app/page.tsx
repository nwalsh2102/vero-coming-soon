import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="grid min-h-screen place-items-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-200">
      <Card className="w-full max-w-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-zinc-200/50 dark:border-zinc-800/50 py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 transition-colors duration-200 shadow-lg">
        <CardContent className="text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100 bg-clip-text text-transparent transition-colors duration-200 tracking-tight">
            Vero Design Coming Soon
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 transition-colors duration-200 font-light">
            Releasing July 2025
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
