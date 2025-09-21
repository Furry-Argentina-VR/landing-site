type StaffItem = {
  name: string;
  role: string;
  avatar_url: string;
  social_handles: {
    twitter?: string;
  };
}

type GalleryCollectionItem = {
  name: string;
  pictures: { url: string }[];
}