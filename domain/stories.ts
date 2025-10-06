export type NightId = string;

export interface Night {
  id: NightId;
  title: string;      // e.g., "🌒 Night 1: The Pile That Eats Itself"
  contentMd: string;  // markdown content of the night
}

export interface StoryMeta {
  slug: string;       // "set-theory"
  title: string;      // "Set Theory"
  tagline?: string;   // short blurb for cards
  coverEmoji?: string;
}

export interface Story extends StoryMeta {
  nights: Night[];
}

export interface IStoriesService {
  listStories(): Promise<StoryMeta[]>;
  getStory(slug: string): Promise<Story | null>;
}
