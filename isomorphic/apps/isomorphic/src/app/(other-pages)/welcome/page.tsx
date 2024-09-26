'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Title, Text } from 'rizzui';
import { routes } from '@/config/routes';
import { useRouter } from 'next/navigation';
import LaptopImg from '@public/welcome-laptop.png';
import MobileImg from '@public/welcome-mobile.png';

export default function WelcomePage() {
  const [fadeOut, setFadeOut] = useState(false); // For controlling the fade-out effect
  const [hideSplash, setHideSplash] = useState(false); // For removing splash screen after fade-out
  const router = useRouter();

  useEffect(() => {
    // Start fade-out after 4 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); // Start fading out after 4 seconds

    // Remove splash screen and navigate after 5 seconds (fade duration + 1 second)
    const removeSplashAndNavigate = setTimeout(() => {
      setHideSplash(true);
    }, 5000); // Completely hide after 5 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(removeSplashAndNavigate);
    };
  }, []);

  // Navigate to the dashboard when the splash screen is hidden
  useEffect(() => {
    if (hideSplash) {
      router.push(routes.eCommerce.dashboard); // Navigate to eCommerce dashboard after splash screen
    }
  }, [hideSplash, router]);

  // If splash is hidden, don't render anything
  if (hideSplash) {
    return null;
  }

  return (
    <div className={`splash-fade ${fadeOut ? 'hidden' : ''}`}>
      <div className="flex grow items-center px-6 xl:px-10">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col-reverse items-center justify-between text-center lg:flex-row lg:gap-5 lg:text-start 3xl:max-w-[1520px]">
          <div>
            <Title
              as="h2"
              className="mb-3 text-[22px] font-bold leading-snug sm:text-2xl md:mb-5 md:text-3xl md:leading-snug xl:mb-7 xl:text-4xl xl:leading-normal 2xl:text-[40px] 3xl:text-5xl 3xl:leading-snug"
            >
              Welcome to Treetherium <br />
              Staff Dashboard.
            </Title>
            <Text className="mb-6 max-w-[612px] text-sm leading-loose text-gray-500 md:mb-8 xl:mb-10 xl:text-base xl:leading-loose">
              Get ready to embark on this journey together!
              <br className="hidden sm:inline-block lg:hidden" /> We are one.
            </Text>
            <div className="mt-8 flex flex-col justify-center gap-4 lg:flex-row lg:justify-start xl:gap-6">
              <Button
                color="primary"
                size="lg"
                className="h-12 px-4 xl:h-14 xl:px-6"
              >
                Start Installation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-4 xl:h-14 xl:px-6"
              >
                User Guide
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={LaptopImg}
              alt="coming-soon"
              className="aspect-[632/630] max-w-[256px] sm:max-w-xs lg:max-w-lg 2xl:max-w-xl 3xl:max-w-[632px]"
            />
            <Image
              src={MobileImg}
              alt="coming-soon"
              className="absolute left-0 top-1/2 z-10 aspect-[275/390] max-w-[100px] -translate-y-1/2 lg:max-w-[210px]"
            />
            <div className="mx-auto h-20 w-32 bg-gray-1000/50 blur-[57px] [transform:rotateX(80deg)]"></div>
            <div className="absolute bottom-10 left-3 mx-auto h-20 w-32 bg-gray-1000/50 blur-[57px] [transform:rotateX(80deg)] lg:left-7"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
