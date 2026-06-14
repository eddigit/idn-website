# Raphael IDN Webchat Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Raphael as a public commercial chatbot on the IDN Advisory website.

**Architecture:** Keep public Raphael separate from internal CMB LUX memory and tools. The browser widget calls a local Next.js API route, and the route uses a public commercial response engine that explains IDN, qualifies the situation, and collects contact details without exposing confidential systems.

**Tech Stack:** Next.js App Router, React client component, TypeScript, Node assert smoke tests, existing CSS.

---

### Task 1: Public Raphael Brain

**Files:**
- Create: `lib/raphaelPublic.ts`
- Create: `scripts/smoke/raphael-public-brain.test.mjs`

- [x] **Step 1: Write failing tests**

Run: `node scripts/smoke/raphael-public-brain.test.mjs`
Expected: fail while `lib/raphaelPublic.ts` does not exist.

- [x] **Step 2: Implement public-only response engine**

The engine must return commercial qualification responses, detect contact details, and refuse confidential/internal data requests.

- [x] **Step 3: Run tests**

Run: `node scripts/smoke/raphael-public-brain.test.mjs`
Expected: pass.

### Task 2: Webchat API

**Files:**
- Create: `app/api/raphael-chat/route.ts`

- [x] **Step 1: Add POST route**

Accept `{ messages, lang }`, sanitize input, call `replyAsRaphaelPublic`, return `{ reply, lead }`.

- [x] **Step 2: Verify TypeScript**

Run: `npm run build`
Expected: route compiles.

### Task 3: Website Widget

**Files:**
- Create: `components/RaphaelWebChat.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [x] **Step 1: Add client widget**

Floating button, open panel, messages, form input, quick prompts, and contact summary.

- [x] **Step 2: Add to root layout**

Render widget across all public pages.

- [x] **Step 3: Style responsively**

Match IDN visual language and keep it usable on mobile.

### Task 4: Verification

**Files:**
- Modify: `package.json`

- [x] **Step 1: Add smoke script**

Run: `npm run smoke:raphael`
Expected: pass.

- [x] **Step 2: Build**

Run: `npm run build`
Expected: production build passes.
