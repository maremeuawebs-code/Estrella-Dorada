'use client';
import { useState, useEffect } from 'react';

export const useFrameSequence = () => {
  const [scene1Frames, setScene1Frames] = useState<HTMLImageElement[]>([]);
  const [scene2Frames, setScene2Frames] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const hookMountTime = performance.now();
    
    const preloadSequence = async () => {
      const s1Count = 96;
      const s2Count = 96;
      const totalToLoad = s1Count + s2Count;
      let loadedCount = 0;

      const s1List = new Array(s1Count).fill(null) as HTMLImageElement[];
      const s2List = new Array(s2Count).fill(null) as HTMLImageElement[];

      const loadBatch = async (
        scene: 'scene-01' | 'scene-02',
        startIdx: number,
        endIdx: number,
        targetList: HTMLImageElement[],
        onBatchComplete: () => void
      ) => {
        const BATCH_SIZE = 24;
        for (let i = startIdx; i <= endIdx; i += BATCH_SIZE) {
          if (!isMounted) return;
          const chunkEnd = Math.min(i + BATCH_SIZE - 1, endIdx);
          const promises: Promise<void>[] = [];
          
          for (let j = i; j <= chunkEnd; j++) {
            const img = new Image();
            img.src = `/cinematic/desktop/${scene}/frame_${j.toString().padStart(4, '0')}.webp`;
            promises.push(new Promise<void>((resolve) => {
              img.onload = () => resolve();
              img.onerror = () => resolve();
            }).then(() => {
              targetList[j - 1] = img;
              loadedCount++;
            }));
          }
          await Promise.all(promises);
          if (isMounted) onBatchComplete();
        }
      };

      // 1. Prioritized Load: First 24 frames of Scene 1
      const initialBatch = 24;
      await loadBatch('scene-01', 1, initialBatch, s1List, () => {
        setScene1Frames([...s1List]);
        setLoadingProgress(loadedCount / totalToLoad);
      });

      const t1 = performance.now();

      // INITIAL LOAD COMPLETE - Release the UI immediately!
      if (isMounted) {
        setIsLoaded(true);
        // Force progress to 1 so the loading screen fades out gracefully
        setLoadingProgress(1);
        
        setTimeout(() => {
          const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paintEntries = performance.getEntriesByType('paint');
          const fp = paintEntries.find(p => p.name === 'first-paint');
          const fcp = paintEntries.find(p => p.name === 'first-contentful-paint');

          console.group('%c🚀 PERFORMANCE METRICS (FAST BOOT)', 'color: #00ff00; font-weight: bold; font-size: 14px;');
          console.log(`Initial HTML: ${navEntry ? Math.round(navEntry.responseEnd) : 'N/A'} ms`);
          console.log(`First Paint: ${fp ? Math.round(fp.startTime) : 'N/A'} ms`);
          console.log(`First Contentful Paint: ${fcp ? Math.round(fcp.startTime) : 'N/A'} ms`);
          console.log(`Time until loading screen disappears: ${Math.round(t1 - hookMountTime)} ms`);
          console.log(`Time until Scene 1 becomes interactive: ${Math.round(t1 - hookMountTime)} ms`);
          console.groupEnd();
        }, 100);
      }

      // 2. Background Load: Remaining Scene 1
      await loadBatch('scene-01', initialBatch + 1, s1Count, s1List, () => {
        setScene1Frames([...s1List]);
      });

      // 3. Background Load: Scene 2
      await loadBatch('scene-02', 1, s2Count, s2List, () => {
        setScene2Frames([...s2List]);
      });

      const t2 = performance.now();
      
      if (isMounted) {
        console.group('%c✅ BACKGROUND PRELOADING COMPLETE', 'color: #00bfff; font-weight: bold; font-size: 12px;');
        console.log(`Time until Scene 2 finishes background loading: ${Math.round(t2 - t1)} ms`);
        console.log(`Total loading time: ${Math.round(t2 - hookMountTime)} ms`);
        console.groupEnd();
      }
    };

    preloadSequence();

    return () => {
      isMounted = false;
    };
  }, []);

  return { scene1Frames, scene2Frames, progress: loadingProgress, isLoaded };
};
