import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { reactive } from 'vue';
import { useInspirationStore } from '../stores/inspirationStore';
import { useMoodboardStore } from '../stores/moodboardStore';
import { DecorStyle, InspirationImage, RoomType } from '../types';

function makeReactiveImage(img: InspirationImage): InspirationImage {
  return reactive({ ...img, tags: reactive([...img.tags]) }) as InspirationImage;
}

describe('连续收藏图片到最新灵感板', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('连续收藏两张响应式图片后，最新灵感板里两张图都在，且无 DataCloneError', async () => {
    const consoleErrors: unknown[] = [];
    const errorSpy = vi.spyOn(console, 'error').mockImplementation((...args) => {
      consoleErrors.push(...args);
    });

    const imgA: InspirationImage = {
      id: 'img-test-a',
      imageUrl: 'https://example.com/a.jpg',
      style: DecorStyle.Nordic,
      roomType: RoomType.LivingRoom,
      tags: ['浅木', '自然光'],
      sourceDescription: '测试图 A'
    };
    const imgB: InspirationImage = {
      id: 'img-test-b',
      imageUrl: 'https://example.com/b.jpg',
      style: DecorStyle.Modern,
      roomType: RoomType.Kitchen,
      tags: ['岛台', '黑白'],
      sourceDescription: '测试图 B'
    };

    const reactiveA = makeReactiveImage(imgA);
    const reactiveB = makeReactiveImage(imgB);

    const inspirations = useInspirationStore();
    const moodboards = useMoodboardStore();

    await inspirations.seed();
    await moodboards.load();

    expect(moodboards.boards.length).toBeGreaterThan(0);
    const latestBefore = moodboards.boards[0];
    expect(latestBefore.imageIds).toEqual([]);

    await inspirations.collect(reactiveA);
    await moodboards.addImageToLatestBoard(reactiveA.id);

    await inspirations.collect(reactiveB);
    await moodboards.addImageToLatestBoard(reactiveB.id);

    const latestAfter = moodboards.boards[0];
    expect(latestAfter.id).toBe(latestBefore.id);
    expect(latestAfter.imageIds).toEqual(['img-test-a', 'img-test-b']);
    expect(latestAfter.imageIds.length).toBe(2);

    const savedA = await inspirations.images.find((i) => i.id === 'img-test-a');
    const savedB = await inspirations.images.find((i) => i.id === 'img-test-b');
    expect(savedA?.collectedAt).toBeTruthy();
    expect(savedB?.collectedAt).toBeTruthy();

    const hasDataCloneError = consoleErrors.some(
      (e) => e instanceof Error && e.name === 'DataCloneError'
    );
    expect(hasDataCloneError).toBe(false);

    errorSpy.mockRestore();
  });
});
