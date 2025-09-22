type StaffItem = {
  name: string;
  role: string;
  avatar_url: string;
  social_handles: {
    twitter?: string;
    twitch?: string;
  };
  external_sites?: string[];
};

type GalleryCollectionItem = {
  name: string;
  pictures: { url: string }[];
};