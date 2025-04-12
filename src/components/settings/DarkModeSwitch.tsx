"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export const DarkModeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const handleCheckedChange = (checked: boolean) => {
    setIsDarkMode(checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="dark-mode-switch">Dark Mode</Label>
      <Switch
        checked={isDarkMode}
        onCheckedChange={handleCheckedChange}
        id="dark-mode-switch"
      />
    </div>
  );
};
