import React, { useState } from 'react';
import { Terminal, Check, Copy, Code2, Database, Workflow, Cpu } from 'lucide-react';

interface TabItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  content: {
    command: string;
    outputs: { text: string; color?: string; type?: 'info' | 'success' | 'warn' | 'code' }[];
  };
}

export const TerminalVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('deluge-crm');
  const [copied, setCopied] = useState<boolean>(false);

  const tabs: TabItem[] = [
    {
      id: 'deluge-crm',
      name: 'zoho_automation.dg',
      icon: <Workflow className="w-3.5 h-3.5 text-accent-cyan" />,
      content: {
        command: 'run zoho.crm.automation.reconcileWarehouse()',
        outputs: [
          { text: '→ Initializing Deluge Scripting Runtime v4.2...', color: 'text-text-secondary' },
          { text: '→ Querying Zoho CRM: iterating Vehicle Detail Subforms...', color: 'text-text-secondary' },
          { text: '✓ Duplicate serial IDs checked: 0 collisions found.', color: 'text-accent-emerald', type: 'success' },
          { text: '→ Executing invokeurl GET to Zoho Books inventory...', color: 'text-accent-cyan' },
          { text: '✓ Reconciled positive balance across active warehouse bins.', color: 'text-accent-emerald', type: 'success' },
          { text: '★ Status: Production Automation Active [200 OK]', color: 'text-accent-blue', type: 'info' },
        ]
      }
    },
    {
      id: 'react-gas',
      name: 'TripLockEngine.ts',
      icon: <Code2 className="w-3.5 h-3.5 text-accent-blue" />,
      content: {
        command: 'npm run test:concurrency -- --suite=AvinashRoadways',
        outputs: [
          { text: '→ Testing Google Apps Script LockService integration...', color: 'text-text-secondary' },
          { text: '→ Simulating 50 concurrent dispatch requests...', color: 'text-text-secondary' },
          { text: '✓ LockService.getScriptLock(30000) acquired atomically.', color: 'text-accent-emerald', type: 'success' },
          { text: '✓ Verified Trip ID padStart formatting [54/54 tests passed].', color: 'text-accent-emerald', type: 'success' },
          { text: '✓ Supabase RLS policies enforced for client dispatch.', color: 'text-accent-emerald', type: 'success' },
          { text: '★ Build Status: Clean (0 errors, 0 warnings)', color: 'text-accent-blue', type: 'info' }
        ]
      }
    },
    {
      id: 'zoho-widget',
      name: 'crm_widget.js',
      icon: <Workflow className="w-3.5 h-3.5 text-accent-purple" />,
      content: {
        command: 'node -e "ZOHO.embeddedApp.init().then(mountWidget)"',
        outputs: [
          { text: '→ Initializing Zoho CRM Embedded JS SDK (ZDK)...', color: 'text-text-secondary' },
          { text: '→ Listening for ZOHO.CRM.INTERACTION events...', color: 'text-text-secondary' },
          { text: '✓ Connected to parent record context [PageLoad Event]', color: 'text-accent-emerald', type: 'success' },
          { text: '✓ Subform dynamic validation & auto-formatting active.', color: 'text-accent-cyan' },
          { text: '★ Widget State: Mounted & Live in Zoho CRM UI [200 OK]', color: 'text-accent-emerald', type: 'success' }
        ]
      }
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    try {
      const rawText = `${currentTab.content.command}\n${currentTab.content.outputs.map(o => o.text).join('\n')}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(rawText);
      }
    } catch {
      // Fallback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden glass-panel border border-border-subtle shadow-card text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-bg-surface1/90 border-b border-border-subtle">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600/50" />
          <span className="ml-2 text-xs font-mono text-text-muted hidden sm:inline-block">
            bash — 80x24 — dev-workspace
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all ${
                activeTab === tab.id
                  ? 'bg-bg-surface2 text-text-primary border border-border-highlight shadow-sm'
                  : 'text-text-muted hover:text-text-secondary hover:bg-bg-surface1'
              }`}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          aria-label="Copy terminal text"
          className="text-text-muted hover:text-text-primary p-1 rounded hover:bg-bg-surface2 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm bg-bg-base/90 min-h-[260px] flex flex-col justify-between">
        <div className="space-y-2.5">
          {/* Active Command */}
          <div className="flex items-center space-x-2 text-text-secondary">
            <span className="text-accent-blue font-bold">$</span>
            <span className="text-text-primary font-semibold">{currentTab.content.command}</span>
          </div>

          {/* Outputs */}
          <div className="space-y-1.5 pt-1">
            {currentTab.content.outputs.map((out, idx) => (
              <div key={idx} className={`leading-relaxed ${out.color || 'text-text-secondary'}`}>
                {out.text}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Footer Status */}
        <div className="mt-4 pt-3 border-t border-border-subtle/50 flex flex-wrap items-center justify-between text-xs text-text-muted">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-ping" />
            <span className="text-text-secondary">Live Engineering Environment</span>
          </div>
          <span className="text-[11px] font-mono text-text-muted">UTF-8 • Node v24 • Python 3.10</span>
        </div>
      </div>
    </div>
  );
};
