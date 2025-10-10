"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50 md:bottom-8 md:left-auto md:right-8 md:max-w-md">
      <div className="relative animate-slide-up rounded-2xl bg-white p-6 shadow-2xl border border-gray-200">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Cookie className="h-8 w-8 text-yellow-500" />
          </div>
          <div className="flex-1 pr-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Cookie Notice
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We use cookies to improve your experience on our site. By using our site you consent to cookies.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 rounded-full bg-yellow-500 text-white font-medium text-sm hover:bg-yellow-600 transition-colors"
              >
                Accept
              </button>
              {/* <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 font-medium text-sm hover:bg-gray-200 transition-colors"
              >
                Decline
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
