import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { config } from "@/config";
import HeaderTitle from "./util/header-title";

export default function Testimonials() {
  return (
    <section className="py-12 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center">
          <HeaderTitle>{config.testimonials.title}</HeaderTitle>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {config.testimonials.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-2">
          {config.testimonials.items.map((testimonial, index) => (
            <Card
              key={index}
              className={
                index % 3 === 0
                  ? "grid grid-rows-[auto_1fr] sm:col-span-2  lg:row-span-1 dark:bg-[var(--bg-card-custom)] border dark:border-white/10"
                  : "dark:bg-[var(--bg-card-custom)] border dark:border-white/10"
              }
            >
              <CardContent className="">
                <blockquote className="grid h-full gap-6">
                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <cite className="text-sm font-medium">
                        {testimonial.name}
                      </cite>
                      {testimonial.company && (
                        <span className="text-muted-foreground block text-sm">
                          {testimonial.company}
                        </span>
                      )}
                    </div>
                  </div>
                  <CardDescription>{testimonial.quote}</CardDescription>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
