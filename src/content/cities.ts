export interface CityData {
  slug: string;
  name: string;
  province: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  heroHeadline: string;
  marketSummary: string;
  popularSolutions: {
    title: string;
    description: string;
    highlight: string;
  }[];
  localChallenges: string[];
  recommendedCaseStudy: {
    id: string;
    title: string;
    category: string;
    metric: string;
  };
}

export const citiesData: Record<string, CityData> = {
  lahore: {
    slug: "lahore",
    name: "Lahore",
    province: "Punjab",
    metaTitle: "Web Design & Retail POS Software in Lahore | Digital Dukaan",
    metaDescription:
      "Modern business websites, high-speed retail POS systems, and WhatsApp e-commerce stores designed for ambitious businesses in Lahore.",
    tagline: "E-Commerce, Gulberg & DHA Property Portals, and Retail POS",
    heroHeadline: "Websites and retail software for businesses in Lahore.",
    marketSummary:
      "From high-traffic retail outlets in MM Alam Road to property brokerages in DHA and commercial wholesalers in Shah Alam Market, Lahore businesses require digital systems that withstand high volume and convert mobile traffic into cash flow.",
    popularSolutions: [
      {
        title: "Retail POS & Barcode Billing",
        description:
          "Sub-2-second cashier checkout with thermal slip printing and automated inventory deduction for supermarkets and boutiques.",
        highlight: "60% Faster Checkout",
      },
      {
        title: "Real Estate Property Portals",
        description:
          "Searchable property listings by Marla/Kanal and budget, integrated with direct WhatsApp routing for local and overseas DHA buyers.",
        highlight: "3x Overseas Inquiries",
      },
      {
        title: "WhatsApp Direct Commerce",
        description:
          "Searchable online catalogs with zero monthly Shopify fees and automatic pre-formatted order dispatch.",
        highlight: "0% Commission",
      },
    ],
    localChallenges: [
      "Heavy mobile traffic needing sub-second 4G loading speeds",
      "Cash on Delivery (COD) friction and cart abandonment",
      "Manual ledger Khata mistakes during evening rush hours",
    ],
    recommendedCaseStudy: {
      id: "pos-inventory",
      title: "Retail POS & Smart Inventory System",
      category: "Retail POS Software",
      metric: "< 2s Checkout Speed",
    },
  },

  islamabad: {
    slug: "islamabad",
    name: "Islamabad & Rawalpindi",
    province: "Federal / Punjab",
    metaTitle: "Corporate Web Design & Property Portals in Islamabad | Digital Dukaan",
    metaDescription:
      "Executive corporate websites, Bahria Town & DHA property portals, and custom business software for Islamabad and Rawalpindi companies.",
    tagline: "Corporate Brand Flagships & Overseas Investor Portals",
    heroHeadline: "Web design and digital systems for Islamabad & Rawalpindi.",
    marketSummary:
      "Islamabad companies demand an elevated, trustworthy digital presence that appeals to international partners, diplomatic agencies, and overseas Pakistani real estate investors.",
    popularSolutions: [
      {
        title: "Executive Corporate Websites",
        description:
          "Bespoke typography, fast cloud hosting, and institutional credibility for professional service firms and tech companies.",
        highlight: "High Trust Factor",
      },
      {
        title: "Overseas Buyer Property Portals",
        description:
          "Interactive society master plans, high-resolution galleries, and 1-tap WhatsApp consultation for UK & UAE diaspora buyers.",
        highlight: "Direct Overseas Routing",
      },
      {
        title: "Custom Booking & Scheduling Engines",
        description:
          "Streamlined appointment booking and paperwork approval workflows for clinics and professional consultancies.",
        highlight: "Zero Friction",
      },
    ],
    localChallenges: [
      "Overseas inquiries dropping off due to slow international loading",
      "Low lead-to-call conversion on generic agency WordPress templates",
      "Need for multi-device tablet and desktop responsiveness",
    ],
    recommendedCaseStudy: {
      id: "real-estate",
      title: "Subhania Real Estate Portal",
      category: "Property Portal & Lead Generation",
      metric: "3x Inquiries Increase",
    },
  },

  sargodha: {
    slug: "sargodha",
    name: "Sargodha",
    province: "Punjab",
    metaTitle: "Website Developer & Retail POS Software in Sargodha | Digital Dukaan",
    metaDescription:
      "Local website design, retail POS barcode billing counters, and mandi wholesale inventory software for Sargodha and Khushab businesses.",
    tagline: "Retail Barcode Billing, Wholesalers, and Local Business Websites",
    heroHeadline: "Websites and retail billing software in Sargodha.",
    marketSummary:
      "Located in the agricultural and commercial heartland of Punjab, Sargodha retailers, wholesalers, and real estate consultants need pragmatic, dependable software that non-technical staff can use effortlessly.",
    popularSolutions: [
      {
        title: "Supermarket POS & Cashier Counter",
        description:
          "Offline-resilient barcode billing, 80mm thermal receipt printing, and customer Khata ledger for busy retail grocery stores.",
        highlight: "Simple for Staff",
      },
      {
        title: "Wholesale & Distributor Portals",
        description:
          "Digitize your product lines and allow retailers to order directly through WhatsApp without printing paper catalogs.",
        highlight: "Instant WhatsApp Orders",
      },
      {
        title: "Local Business Websites",
        description:
          "A clean, fast website with Google Maps verification and direct WhatsApp calling that drives foot traffic into your store.",
        highlight: "Top Local Ranking",
      },
    ],
    localChallenges: [
      "Staff difficulty with complex English-only software",
      "Frequent internet downtime requiring offline cashier continuity",
      "Cash register shortages and uncollected customer Khata dues",
    ],
    recommendedCaseStudy: {
      id: "pos-inventory",
      title: "Retail POS & Smart Inventory System",
      category: "Retail POS & Billing",
      metric: "95% Error Reduction",
    },
  },

  faisalabad: {
    slug: "faisalabad",
    name: "Faisalabad",
    province: "Punjab",
    metaTitle: "Textile E-Commerce & Retail POS in Faisalabad | Digital Dukaan",
    metaDescription:
      "High-speed websites, fabric catalog stores, and factory-to-retail POS billing systems for Faisalabad enterprises.",
    tagline: "Textile Catalogs, Wholesale Distribution, and POS Billing",
    heroHeadline: "Digital commerce and software for Faisalabad industry.",
    marketSummary:
      "As Pakistan's textile capital, Faisalabad manufacturers, wholesalers, and retail fabric shops require fast digital catalogs and automated bulk ordering pipelines.",
    popularSolutions: [
      {
        title: "Fabric & Garment E-Commerce",
        description:
          "High-res pattern zoom, category filtering, and pre-formatted WhatsApp order cart payloads for quick customer checkout.",
        highlight: "Zero Commission Fees",
      },
      {
        title: "Multi-Counter Billing POS",
        description:
          "Support for multiple cashier terminals, thermal invoice printing, and daily gross profit summaries.",
        highlight: "Sub-2s Checkout",
      },
      {
        title: "B2B Wholesale Ordering",
        description:
          "Allow nationwide retailers to browse wholesale pricing and submit bulk inquiries directly to your sales desk.",
        highlight: "Faster B2B Sales",
      },
    ],
    localChallenges: [
      "High volume of WhatsApp photo inquiries slowing down sales reps",
      "High monthly Shopify app costs cutting into margins",
      "Need for bulk thermal slip printing during sale events",
    ],
    recommendedCaseStudy: {
      id: "whatsapp-integration",
      title: "Digital Store with WhatsApp Integration",
      category: "Digital Commerce",
      metric: "Direct WhatsApp Checkout",
    },
  },

  karachi: {
    slug: "karachi",
    name: "Karachi",
    province: "Sindh",
    metaTitle: "Web Design & Custom Software in Karachi | Digital Dukaan",
    metaDescription:
      "High-converting e-commerce websites, API automation, and custom business software for Karachi enterprises.",
    tagline: "High-Traffic E-Commerce & Custom Software Solutions",
    heroHeadline: "Web design and custom software for Karachi businesses.",
    marketSummary:
      "Pakistan's commercial nerve center requires edge-hosted websites that load instantly during peak campaigns and scale without recurring platform transaction fees.",
    popularSolutions: [
      {
        title: "Edge-Hosted E-Commerce",
        description:
          "Sub-second page speeds, Cash on Delivery support, and WhatsApp routing that minimizes abandoned carts.",
        highlight: "Edge CDN Speeds",
      },
      {
        title: "Custom Automation Pipelines",
        description:
          "Automate order fulfillment notices, shipping label dispatch, and customer support routing.",
        highlight: "Save Hours Daily",
      },
      {
        title: "Bespoke Web Software",
        description:
          "Custom customer portals, inventory tracking, and database architecture built specifically for your team.",
        highlight: "100% Code Ownership",
      },
    ],
    localChallenges: [
      "Fierce competitive landscape demanding superior visual branding",
      "High customer drop-off on slow checkout forms",
      "Expensive monthly SaaS fees eating profit margins",
    ],
    recommendedCaseStudy: {
      id: "whatsapp-integration",
      title: "Digital Store with WhatsApp Integration",
      category: "Digital Commerce",
      metric: "Zero Commission",
    },
  },

  overseas: {
    slug: "overseas",
    name: "Overseas Pakistani Businesses",
    province: "UAE · UK · USA · Global",
    metaTitle: "Real Estate Portals & Software for Overseas Pakistani Businesses",
    metaDescription:
      "High-converting property portals and business websites designed for overseas Pakistani business owners and diaspora investors in the UAE, UK, and US.",
    tagline: "Connecting Overseas Diaspora Buyers to Local Pakistani Assets",
    heroHeadline: "Digital portals designed for overseas Pakistani markets.",
    marketSummary:
      "Overseas Pakistani entrepreneurs in Dubai, London, Manchester, and the US require reliable digital bridges to manage real estate developments, import/export networks, and remote business operations with complete transparency.",
    popularSolutions: [
      {
        title: "Diaspora Property Portals",
        description:
          "Currency display, high-definition society master plans, video tours, and instant WhatsApp chat for overseas buyers.",
        highlight: "3x Overseas Lead Volume",
      },
      {
        title: "Remote Business Dashboards",
        description:
          "Real-time daily revenue, stock levels, and cashier reports accessible securely from any phone or laptop abroad.",
        highlight: "Live Remote Oversight",
      },
      {
        title: "Interactive Digital Event Suites",
        description:
          "Bespoke digital wedding invitations and RSVP systems allowing international guests to view itineraries and RSVP online.",
        highlight: "Global Access",
      },
    ],
    localChallenges: [
      "Time-zone differences requiring instant pre-formatted WhatsApp inquiries",
      "Lack of trust on outdated, broken local websites",
      "Overseas buyers needing transparent pricing and verified listings",
    ],
    recommendedCaseStudy: {
      id: "real-estate",
      title: "Subhania Real Estate Portal",
      category: "Real Estate & Lead Generation",
      metric: "3x Overseas Inquiries",
    },
  },
};
