'use client'

import { EXP_INFO_LIST } from "@/constant";
import * as React from "react"

type EXPInfoKey = keyof typeof EXP_INFO_LIST;
interface TabProps {
  activeTab: EXPInfoKey
  setActiveTab: (tab: EXPInfoKey) => void
}

export function DateTab({ activeTab, setActiveTab }: TabProps) {

  return (
    <div className={"p-1 mx-4 bg-gray-50 rounded-full"}>
      <nav className="flex w-full" role="tablist">
        {(["2022", "2023", "2024", "전체"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={activeTab === tab}
            className={`
              flex-1 py-2 text-sm font-medium transition-colors rounded-full
          ${activeTab === tab
                ? "text-white bg-black"
                : "text-gray-400 hover:text-gray-900"
              }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div >
  )
}

