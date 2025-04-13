import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DarkModeSwitch } from "@/components/settings/DarkModeSwitch";
import { Label } from "@/components/ui/label";

export default async function Settings() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how the app looks and feels.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <DarkModeSwitch />
          </div>
        </CardContent>
      </Card>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Advanced</CardTitle>
          <CardDescription>Does nothing right now.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Label htmlFor="dev-mode">Developer Mode</Label>
            <Switch id="dev-mode" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
