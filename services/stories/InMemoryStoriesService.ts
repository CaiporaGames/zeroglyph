import type { IStoriesService, Story, StoryMeta } from "@/domain/stories";
import { storiesIndex, loadStoryBySlug } from "@/data/stories";

export class InMemoryStoriesService implements IStoriesService 
{
  async listStories(): Promise<StoryMeta[]> 
  {
    return storiesIndex.map(({ slug, title, tagline, coverEmoji }) => ({ slug, title, tagline, coverEmoji }));
  }
  async getStory(slug: string): Promise<Story | null> {
    return loadStoryBySlug(slug);
  }
}
