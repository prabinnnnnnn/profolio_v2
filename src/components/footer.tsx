"use client";

import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { config } from "@/config";

export default function Footer() {
  return (
    <div className="py-10" id="contact">
      <div className="flex flex-col items-center gap-6 text-center text-sm">
        <h1>Contacts</h1>
        <div className="flex gap-4">
          <Link
            href={config.social.github.url}
            target="_blank"
            aria-label={config.social.github.ariaLabel}
          >
            <SiGithub className="hover:text-gray-400 transition-colors size-5" />
          </Link>
          <Link
            href={config.social.linkedin.url}
            target="_blank"
            aria-label={config.social.linkedin.ariaLabel}
          >
            <SiLinkedin className="hover:text-blue-400 transition-colors size-5" />
          </Link>
          <Link
            href={config.social.instagram.url}
            target="_blank"
            aria-label={config.social.instagram.ariaLabel}
            title={config.social.instagram.ariaLabel}
          >
            <SiInstagram className="hover:text-blue-400 transition-colors size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
