import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="grid h-[100vh] place-items-center">
      <Card className="py-10 px-20">
        <CardContent className="text-center space-y-8">
          <h1 className="text-6xl">Vero Design Coming Soon</h1>
          <p className="text-3xl">Releasing July 2025</p>
        </CardContent>
      </Card>
    </div>
  );
}
