import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Barcode,
  Building2,
  Check,
  CheckCircle2,
  Cpu,
  Globe2,
  Layers,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  Monitor,
  Plus,
  Printer,
  Search,
  ShoppingBag,
  Sparkles,
  Terminal,
  TrendingUp,
} from "lucide-react";

interface HeroSystemPreviewProps {
  activeSlide: number;
  onSelectSlide: (index: number) => void;
}

const SLIDE_TABS = [
  {
    id: "web-portal",
    index: "01",
    label: "Web Architecture",
    domain: "subhania.vercel.app",
    status: "99.98% Uptime · Edge CDN",
    liveUrl: "https://subhania.vercel.app",
    icon: Globe2,
  },
  {
    id: "pos-engine",
    index: "02",
    label: "POS & Inventory",
    domain: "pos-demo.alitaqi.dev",
    status: "< 18ms Checkout Latency",
    liveUrl: "https://pos-demo.alitaqi.dev",
    icon: Monitor,
  },
  {
    id: "commerce-flow",
    index: "03",
    label: "Commerce & Automation",
    domain: "alitaqiecom.vercel.app",
    status: "WhatsApp API · 0% Fee",
    liveUrl: "https://alitaqiecom.vercel.app",
    icon: ShoppingBag,
  },
  {
    id: "digital-cards",
    index: "04",
    label: "Interactive Suites",
    domain: "weddingcardah.vercel.app",
    status: "60fps Motion · Instant RSVP",
    liveUrl: "https://weddingcardah.vercel.app/",
    icon: Mail,
  },
];

const PORTAL_LISTINGS = [
  {
    id: "L-101",
    title: "10 Marla Contemporary Corner Residence",
    zone: "DHA Phase 6 · Lahore",
    city: "Lahore",
    price: "PKR 4.85 Cr",
    specs: "5 Bed · 6 Bath · Verified NOC",
    tag: "Direct Mandate",
    yield: "+14.2% YoY",
  },
  {
    id: "L-102",
    title: "4 Marla Commercial Boulevard Plot",
    zone: "University Town · Sargodha",
    city: "Sargodha",
    price: "PKR 1.25 Cr",
    specs: "Corner · TMA Approved · High Footfall",
    tag: "Commercial",
    yield: "+18.5% ROI",
  },
  {
    id: "L-103",
    title: "1 Kanal Designer Villa with Basement",
    zone: "Bahria Enclave · Islamabad",
    city: "Islamabad",
    price: "PKR 8.40 Cr",
    specs: "6 Bed · Smart Automation · Solar",
    tag: "Overseas Preferred",
    yield: "Ready Possession",
  },
];

const POS_ITEMS = [
  { id: "sku-1", sku: "896401", name: "Super Kernel Basmati (5kg)", price: 1850, stock: 42 },
  { id: "sku-2", sku: "896402", name: "Pure Canola Cooking Oil (1L)", price: 540, stock: 19 },
  { id: "sku-3", sku: "896403", name: "Premium Danedar Tea (450g)", price: 680, stock: 6 },
  { id: "sku-4", sku: "896404", name: "Full Cream Milk Powder (900g)", price: 1250, stock: 28 },
];

const STORE_ITEMS = [
  { id: "c-1", name: "Handloom Raw Silk Kurta Set", category: "Apparel", price: 4200, tag: "Bestseller" },
  { id: "c-2", name: "Artisan Pashmina Shawl", category: "Winter Edit", price: 3600, tag: "Limited" },
  { id: "c-3", name: "Handcrafted Leather Peshawari", category: "Footwear", price: 2800, tag: "In Stock" },
];

export function HeroSystemPreview({ activeSlide, onSelectSlide }: HeroSystemPreviewProps) {
  const currentTab = SLIDE_TABS[activeSlide] || SLIDE_TABS[0];

  // Interactive states for Slide 0 (Portal)
  const [cityFilter, setCityFilter] = useState<string>("All");
  const [selectedListing, setSelectedListing] = useState<string>("L-101");

  // Interactive states for Slide 1 (POS)
  const [posCart, setPosCart] = useState<Record<string, number>>({ "sku-1": 1, "sku-2": 2, "sku-3": 1 });
  const [receiptPrinted, setReceiptPrinted] = useState(false);

  // Interactive states for Slide 2 (Commerce)
  const [selectedStoreIds, setSelectedStoreIds] = useState<string[]>(["c-1", "c-2"]);

  // Interactive states for Slide 3 (Digital Suite)
  const [rsvpConfirmed, setRsvpConfirmed] = useState(true);
  const [guestCount, setGuestCount] = useState(2);

  const filteredListings =
    cityFilter === "All" ? PORTAL_LISTINGS : PORTAL_LISTINGS.filter((item) => item.city === cityFilter);

  const posTotal = Object.entries(posCart).reduce((acc, [id, qty]) => {
    const item = POS_ITEMS.find((p) => p.id === id);
    return acc + (item ? item.price * qty : 0);
  }, 0);

  const storeTotal = selectedStoreIds.reduce((acc, id) => {
    const item = STORE_ITEMS.find((s) => s.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const toggleStoreItem = (id: string) => {
    setSelectedStoreIds((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((item) => item !== id) : prev) : [...prev, id]
    );
  };

  const adjustPosQty = (id: string, delta: number) => {
    setPosCart((prev) => {
      const next = { ...prev };
      const updated = (next[id] || 0) + delta;
      if (updated <= 0) {
        delete next[id];
      } else {
        next[id] = updated;
      }
      return next;
    });
  };

  const triggerReceipt = () => {
    setReceiptPrinted(true);
    setTimeout(() => setReceiptPrinted(false), 1800);
  };

  return (
    <div className="relative w-full">
      {/* Subtle ambient backlight behind window */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-white/[0.04] via-zinc-500/[0.05] to-transparent blur-2xl"
      />

      <div className="surface-window relative overflow-hidden rounded-2xl border border-white/[0.09]">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] bg-zinc-950/90 px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700/80" />
            </div>
            <div className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-zinc-900/90 px-2.5 py-1 text-[11px] font-mono text-zinc-400 truncate">
              <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
              <span className="truncate">{currentTab.domain}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {currentTab.status}
            </span>
            <a
              href={currentTab.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <span>Inspect</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Module Switcher Tabs inside Window */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-white/[0.07] bg-zinc-950/50">
          {SLIDE_TABS.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = idx === activeSlide;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectSlide(idx)}
                className={`group relative flex items-center gap-2 px-3.5 py-2.5 text-left text-xs transition-all border-r border-white/[0.05] last:border-r-0 ${
                  isActive
                    ? "bg-white/[0.06] text-white font-medium"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-400"}`} />
                <span className="truncate">{tab.label}</span>
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-white" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active System Canvas */}
        <div className="p-4 sm:p-5 min-h-[370px] flex flex-col justify-between bg-gradient-to-b from-zinc-950/40 to-zinc-950">
          {/* SLIDE 0: WEB ARCHITECTURE & PROPERTY PORTAL */}
          {activeSlide === 0 && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      PORTAL ENGINE v2.4
                    </span>
                    <span className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-zinc-300">
                      SSR + Local SEO
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm font-semibold text-zinc-100">
                    Subhania Real Estate & Asset Directory
                  </h3>
                </div>

                <div className="flex items-center gap-1 rounded-lg border border-white/[0.07] bg-zinc-900/80 p-1">
                  {["All", "Lahore", "Islamabad", "Sargodha"].map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setCityFilter(city)}
                      className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                        cityFilter === city
                          ? "bg-white text-zinc-950"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                {filteredListings.map((item) => {
                  const isSelected = selectedListing === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedListing(item.id)}
                      className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                        isSelected
                          ? "border-white/25 bg-white/[0.05]"
                          : "border-white/[0.06] bg-zinc-900/40 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-zinc-500">{item.id}</span>
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                              {item.tag}
                            </span>
                            <span className="font-mono text-[10px] text-emerald-400">{item.yield}</span>
                          </div>
                          <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-100 truncate">
                            {item.title}
                          </p>
                          <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-zinc-400">
                            <MapPin className="h-3 w-3 text-zinc-500 shrink-0" />
                            <span>{item.zone}</span>
                            <span className="text-zinc-600">·</span>
                            <span>{item.specs}</span>
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="block font-mono text-xs sm:text-sm font-semibold text-white">
                            {item.price}
                          </span>
                          <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                            <MessageCircle className="h-3 w-3" /> 1-Tap Lead Routing
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="rounded-lg border border-white/[0.06] bg-zinc-900/40 px-3 py-2">
                  <span className="block font-mono text-[10px] text-zinc-500">QUALIFIED LEADS</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-white">3.2× Lift</span>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-zinc-900/40 px-3 py-2">
                  <span className="block font-mono text-[10px] text-zinc-500">CMS UPDATE TIME</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-white">&lt; 45 Secs</span>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-zinc-900/40 px-3 py-2">
                  <span className="block font-mono text-[10px] text-zinc-500">MOBILE FCP</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-emerald-400">0.8s (4G)</span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 1: RETAIL POS & SMART INVENTORY */}
          {activeSlide === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
              <div className="sm:col-span-7 space-y-2.5">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Barcode className="h-3.5 w-3.5 text-zinc-300" /> BARCODE SKU CATALOG (CLICK TO SCAN)
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">F1: SCAN</span>
                </div>

                <div className="space-y-2">
                  {POS_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => adjustPosQty(item.id, 1)}
                      className="w-full flex items-center justify-between rounded-xl border border-white/[0.06] bg-zinc-900/50 px-3 py-2.5 text-left hover:border-white/20 hover:bg-white/[0.04] transition-all"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-zinc-500">#{item.sku}</span>
                          {item.stock <= 10 ? (
                            <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 font-mono text-[9px] text-amber-300">
                              <AlertTriangle className="h-2.5 w-2.5" /> LOW: {item.stock}
                            </span>
                          ) : (
                            <span className="font-mono text-[9px] text-zinc-500">{item.stock} units</span>
                          )}
                        </div>
                        <p className="text-xs font-medium text-zinc-100 truncate mt-0.5">{item.name}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono text-xs font-semibold text-white">
                          PKR {item.price.toLocaleString()}
                        </span>
                        <span className="block text-[10px] text-zinc-500">+ Add to bill</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-5 flex flex-col justify-between rounded-xl border border-white/[0.08] bg-zinc-900/70 p-3.5">
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                    <span className="font-mono text-[11px] font-semibold text-zinc-200">
                      INVOICE #PK-849
                    </span>
                    <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400">
                      LIVE LEDGER
                    </span>
                  </div>

                  <div className="mt-2.5 space-y-2 max-h-[165px] overflow-y-auto pr-1">
                    {Object.entries(posCart).map(([id, qty]) => {
                      const item = POS_ITEMS.find((p) => p.id === id);
                      if (!item) return null;
                      return (
                        <div key={id} className="flex items-center justify-between text-xs">
                          <div className="min-w-0 flex-1 pr-2">
                            <p className="truncate text-zinc-200 text-[11px]">{item.name}</p>
                            <span className="font-mono text-[10px] text-zinc-500">
                              {qty} × {item.price.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              aria-label={`Decrease ${item.name}`}
                              onClick={() => adjustPosQty(id, -1)}
                              className="h-5 w-5 rounded border border-white/10 bg-zinc-800 grid place-items-center text-zinc-300 hover:bg-zinc-700"
                            >
                              <Minus className="h-2.5 w-2.5" />
                            </button>
                            <button
                              type="button"
                              aria-label={`Increase ${item.name}`}
                              onClick={() => adjustPosQty(id, 1)}
                              className="h-5 w-5 rounded border border-white/10 bg-zinc-800 grid place-items-center text-zinc-300 hover:bg-zinc-700"
                            >
                              <Plus className="h-2.5 w-2.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-3 border-t border-white/[0.08] pt-3 space-y-2.5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] uppercase text-zinc-400">Net Payable</span>
                    <span className="font-mono text-base font-bold text-white">
                      PKR {posTotal.toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={triggerReceipt}
                    className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-white py-2 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition-colors"
                  >
                    {receiptPrinted ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Thermal Slip Dispatched</span>
                      </>
                    ) : (
                      <>
                        <Printer className="h-3.5 w-3.5" />
                        <span>Print 80mm Receipt (F9)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: COMMERCE & WHATSAPP AUTOMATION */}
          {activeSlide === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
              {/* Left: Clean Storefront Selector */}
              <div className="sm:col-span-6 space-y-2.5">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    1. SELECT CATALOG ITEMS
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">
                    {selectedStoreIds.length} selected
                  </span>
                </div>

                <div className="space-y-2">
                  {STORE_ITEMS.map((item) => {
                    const selected = selectedStoreIds.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleStoreItem(item.id)}
                        className={`w-full flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                          selected
                            ? "border-white/25 bg-white/[0.06]"
                            : "border-white/[0.06] bg-zinc-900/40 hover:border-white/15"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`h-4 w-4 rounded flex items-center justify-center border ${
                              selected
                                ? "border-white bg-white text-zinc-950"
                                : "border-zinc-700 bg-transparent"
                            }`}
                          >
                            {selected && <Check className="h-3 w-3 stroke-[2.5]" />}
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-zinc-100 truncate">{item.name}</p>
                            <span className="font-mono text-[10px] text-zinc-500">
                              {item.category} · {item.tag}
                            </span>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-semibold text-white shrink-0 ml-2">
                          PKR {item.price.toLocaleString()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: Automated WhatsApp Order Payload */}
              <div className="sm:col-span-6 flex flex-col justify-between rounded-xl border border-white/[0.08] bg-zinc-900/75 p-3.5">
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Terminal className="h-3.5 w-3.5" /> 2. AUTO-GENERATED WHATSAPP PAYLOAD
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">0% FEE</span>
                  </div>

                  <div className="mt-2.5 rounded-lg border border-white/[0.06] bg-zinc-950/90 p-3 font-mono text-[11px] text-zinc-300 space-y-1.5">
                    <div className="flex items-center justify-between text-emerald-400">
                      <span>NEW ORDER #DD-409</span>
                      <span>COD · VERIFIED</span>
                    </div>
                    <div className="border-t border-white/[0.06] pt-1.5 space-y-1 text-zinc-400">
                      {selectedStoreIds.map((id) => {
                        const item = STORE_ITEMS.find((s) => s.id === id);
                        if (!item) return null;
                        return (
                          <div key={id} className="flex justify-between">
                            <span className="truncate pr-2">1x {item.name}</span>
                            <span className="text-zinc-200">PKR {item.price.toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="border-t border-white/[0.06] pt-1.5 flex justify-between font-semibold text-white">
                      <span>Total Payable (COD)</span>
                      <span className="text-emerald-400">PKR {storeTotal.toLocaleString()}</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 pt-1">
                      Dest: Gulberg III, Lahore · Dispatch: &lt; 24h
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-white/[0.06]">
                  <span>No login friction · Instant merchant alert</span>
                  <span className="font-mono text-emerald-400 font-medium">+45% Conversion</span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 3: DIGITAL INVITATION & INTERACTIVE SUITES */}
          {activeSlide === 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-zinc-300">
                  <Sparkles className="h-3 w-3 text-zinc-200" />
                  <span>BESPOKE INTERACTIVE WEB SUITE</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                  A &amp; H — Interactive Digital Event &amp; RSVP Experience
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Engineered with smooth 60fps envelope physics, personalized guest routing, live Google Maps venue navigation, and instant RSVP telemetry.
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="rounded-xl border border-white/[0.07] bg-zinc-900/50 p-3">
                    <span className="font-mono text-[10px] text-zinc-500 block">GUEST ACCESS</span>
                    <span className="text-xs font-semibold text-zinc-100 mt-0.5 block">
                      Instant Mobile Link
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/[0.07] bg-zinc-900/50 p-3">
                    <span className="font-mono text-[10px] text-zinc-500 block">INTERACTION</span>
                    <span className="text-xs font-semibold text-zinc-100 mt-0.5 block">
                      Animated Wax Seal &amp; Audio
                    </span>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-5 rounded-xl border border-white/[0.09] bg-zinc-900/70 p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                  <span className="font-mono text-[10px] text-zinc-400">LIVE RSVP TELEMETRY</span>
                  <span className="font-mono text-[10px] text-emerald-400">ACTIVE</span>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] text-zinc-400">Attendance Status</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setRsvpConfirmed(true)}
                      className={`rounded-lg py-1.5 text-xs font-medium transition-colors ${
                        rsvpConfirmed
                          ? "bg-white text-zinc-950"
                          : "border border-white/10 text-zinc-400"
                      }`}
                    >
                      Attending
                    </button>
                    <button
                      type="button"
                      onClick={() => setRsvpConfirmed(false)}
                      className={`rounded-lg py-1.5 text-xs font-medium transition-colors ${
                        !rsvpConfirmed
                          ? "bg-white text-zinc-950"
                          : "border border-white/10 text-zinc-400"
                      }`}
                    >
                      Regrets
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-zinc-400">Party Size</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="h-6 w-6 rounded border border-white/10 bg-zinc-800 text-xs text-zinc-200"
                    >
                      -
                    </button>
                    <span className="font-mono text-xs font-semibold text-white">{guestCount} Guests</span>
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.min(6, guestCount + 1))}
                      className="h-6 w-6 rounded border border-white/10 bg-zinc-800 text-xs text-zinc-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                <a
                  href="https://weddingcardah.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.05] py-2 text-xs font-medium text-white hover:bg-white/[0.1] transition-colors"
                >
                  <span>Open Live Experience</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Window Footer Status Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3 text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-zinc-400" />
              <span>ENGINEERED IN PAKISTAN · DEPLOYED GLOBALLY</span>
            </div>
            <div>
              <span className="text-zinc-300">{currentTab.index}</span>
              <span> / 04</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
