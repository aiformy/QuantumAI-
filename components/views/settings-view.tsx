"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Settings, Bell, Shield, Database, Zap } from "lucide-react"

export function SettingsView() {
  return (
    <div className="space-y-6">
      {/* General Settings */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            General Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Dashboard Refresh Rate</label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-slate-200">
                <option>1 second</option>
                <option>5 seconds</option>
                <option>10 seconds</option>
                <option>30 seconds</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Default Chart Timeframe</label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-slate-200">
                <option>1 minute</option>
                <option>5 minutes</option>
                <option>15 minutes</option>
                <option>1 hour</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-slate-200">Trade Notifications</div>
              <div className="text-sm text-slate-400">Get notified when trades are executed</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-slate-200">Risk Alerts</div>
              <div className="text-sm text-slate-400">Alerts for risk limit breaches</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-slate-200">Strategy Updates</div>
              <div className="text-sm text-slate-400">Notifications for strategy changes</div>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-slate-200">Market News</div>
              <div className="text-sm text-slate-400">Important market news and events</div>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* AI Assistant Settings */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            AETHEL AI Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-slate-200">Auto-Analysis</div>
              <div className="text-sm text-slate-400">Automatic market analysis and insights</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-slate-200">Local Inference Mode</div>
              <div className="text-sm text-slate-400">Process AI requests locally for privacy</div>
            </div>
            <Switch />
          </div>
          <div>
            <label className="text-sm text-slate-400 mb-2 block">Preferred AI Model</label>
            <select className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-slate-200">
              <option>GPT-4</option>
              <option>Claude</option>
              <option>Gemini</option>
              <option>Local Model</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Risk Management */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Risk Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Max Daily Loss ($)</label>
              <Input defaultValue="5000" className="bg-slate-800 border-slate-700" />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Max Position Size (%)</label>
              <Input defaultValue="10" className="bg-slate-800 border-slate-700" />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Max Leverage</label>
              <Input defaultValue="2.0" className="bg-slate-800 border-slate-700" />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Stop Loss (%)</label>
              <Input defaultValue="2" className="bg-slate-800 border-slate-700" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Information */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200 flex items-center gap-2">
            <Database className="w-5 h-5" />
            System Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Version</span>
                <Badge>v2.1.0</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Last Update</span>
                <span className="text-slate-300">2024-01-15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">License</span>
                <Badge className="bg-emerald-900 text-emerald-300">Professional</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">CPU Usage</span>
                <span className="text-slate-300">12%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Memory Usage</span>
                <span className="text-slate-300">2.1 GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Uptime</span>
                <span className="text-slate-300">7d 12h 34m</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <Button variant="outline">Check for Updates</Button>
            <Button variant="outline">Export Settings</Button>
            <Button variant="outline">Reset to Defaults</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
