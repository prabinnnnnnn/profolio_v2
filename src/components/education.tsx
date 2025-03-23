"use client";

import { GraduationCap } from "lucide-react";
import HeaderTitle from "./util/header-title";
import { config } from "@/config";
import { Card } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

export function Education() {
  return (
    <section className="py-16 md:py-32" id="education">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <HeaderTitle>{config.certifications.title}</HeaderTitle>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {config.certifications.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2">
          {config.certifications.items.map((certificate) => (
            <Card
              key={certificate.platform}
              className="group relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {certificate.platform}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <Link href={certificate.certificateLink || ""}>
                        <span className="text-sm font-medium">
                          {certificate.degree}
                        </span>
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {certificate.description}
                    </p>
                  </div>
                  <div className="relative h-10 w-20 overflow-hidden rounded-lg ">
                    <img
                      src={certificate.logo}
                      alt={certificate.platform}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
