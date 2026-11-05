import React from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon, MessageCircle } from "lucide-react";
import { ArrowUpRightIcon } from "@/components/business/EndcapIcons";
import { businessData } from "@/content/business";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-16 text-ink selection:bg-ink selection:text-acid font-sans">
      <div className="max-w-md w-full border border-ink bg-paper-light p-8 sm:p-10 text-center">
        <div className="inline-block border border-ink bg-acid px-3 py-1 font-mono text-xs font-bold text-ink mb-4">
          404 / NOT FOUND
        </div>
        <h1 className="font-display text-3xl font-bold text-ink tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          The page you are looking for may have been relocated or the URL might be mistyped.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 border border-ink bg-ink text-paper px-5 py-3 text-xs font-bold rounded-sm hover:bg-neutral-800 transition-colors"
          >
            <HomeIcon className="h-4 w-4" />
            <span>Return to Studio Home</span>
          </Link>

          <a
            href={`https://wa.me/${businessData.profile.whatsappNumber}?text=${encodeURIComponent(
              "Hi Ali, I was browsing your website and wanted to inquire about a digital solution for my business."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 border border-ink bg-paper hover:bg-paper-dark text-ink text-xs font-bold px-5 py-3 rounded-sm transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Direct WhatsApp Inquiry</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
