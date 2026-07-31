'use client';
import { useState, useEffect } from 'react';

export const useFrameSequence = () => {
  const [scene1Frames, setScene1Frames] = useState<HTMLImageElement[]>([]);
  const [scene2Frames, setScene2Frames] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const preloadSequence = async () => {
      const s1Count = 96;
      const s2Count = 96;
      const totalToLoad = s1Count + s2Count;
      let loadedCount = 0;

      const s1List: HTMLImageElement[] = [];
      const s2List: HTMLImageElement[] = [];

      // 1. Prioritized Load: Load first 20 frames of Scene 1 to display immediately
      const initialBatch = 20;
      for (let i = 1; i <= initialBatch; i++) {
        const img = new Image();
        img.src = `/cinematic/desktop/scene-01/frame_${i.toString().padStart(4, '0')}.webp`;
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
        s1List.push(img);
        loadedCount++;
        if (isMounted) {
          setScene1Frames([...s1List]);
          setLoadingProgress(loadedCount / totalToLoad);
        }
      }

      // 2. Background Load: Load remaining frames of Scene 1
      const loadRemainingScene1 = async () => {
        for (let i = initialBatch + 1; i <= s1Count; i++) {
          if (!isMounted) return;
          const img = new Image();
          img.src = `/cinematic/desktop/scene-01/frame_${i.toString().padStart(4, '0')}.webp`;
          await new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
          s1List.push(img);
          loadedCount++;
          if (isMounted && i % 10 === 0) {
            setScene1Frames([...s1List]);
            setLoadingProgress(loadedCount / totalToLoad);
          }
        }
        if (isMounted) {
          setScene1Frames([...s1List]);
        }
      };

      // 3. Background Load: Load all frames of Scene 2
      const loadScene2 = async () => {
        for (let i = 1; i <= s2Count; i++) {
          if (!isMounted) return;
          const img = new Image();
          img.src = `/cinematic/desktop/scene-02/frame_${i.toString().padStart(4, '0')}.webp`;
          await new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
          s2List.push(img);
          loadedCount++;
          if (isMounted && i % 10 === 0) {
            setScene2Frames([...s2List]);
            setLoadingProgress(loadedCount / totalToLoad);
          }
        }
        if (isMounted) {
          setScene2Frames([...s2List]);
        }
      };

      // Run sequentially to prioritize Scene 1
      await loadRemainingScene1();
      await loadScene2();

      if (isMounted) {
        setIsLoaded(true);
        setLoadingProgress(1);
      }
    };

    preloadSequence();

    return () => {
      isMounted = false;
    };
  }, []);

  return { scene1Frames, scene2Frames, progress: loadingProgress, isLoaded };
};
