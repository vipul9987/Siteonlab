/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  bulletColor: string;
}

export interface LatestShot {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  brandName: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  isHighlighted?: boolean;
}

export interface PortfolioAsset {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  gridSpan: string; // e.g., 'col-span-1 row-span-1', 'col-span-2 row-span-2', etc.
  aspectRatio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}
