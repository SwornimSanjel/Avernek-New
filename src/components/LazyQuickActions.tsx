"use client";

import dynamic from "next/dynamic";

const QuickActions = dynamic(() => import("./QuickActions"), {
  ssr: false,
});

export default function LazyQuickActions() {
  return <QuickActions />;
}
