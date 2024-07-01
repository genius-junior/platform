'use client';

import { Card, CardContent } from '@repo/ui/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export function CarouselDemo() {
  const featuredImages = [
    'https://next.vohoangphuc.com/genius-junior/banner-1.png',
    'https://next.vohoangphuc.com/genius-junior/banner-2.png',
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {featuredImages.map((src, index) => (
          <CarouselItem key={index}>
            <div className="rounded-lg p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center rounded-lg p-0">
                  <Image
                    src={src}
                    width={1920}
                    height={1080}
                    alt={`Banner ${index + 1}`}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
