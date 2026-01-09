
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  category: 'Audio' | 'Wearable' | 'Mobile' | 'Home' | 'Fashion' | 'Accessories';
  imageUrl: string;
  gallery?: string[];
  features: string[];
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode; 
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'product', product: Product }
  | { type: 'journal', article: JournalArticle }
  | { type: 'checkout' }
  | { type: 'dashboard' };

// Campaign Types for 2026 Strategy
export interface Campaign {
  id: string;
  name: string;
  type: 'Neural-Search' | 'Ambient-Display' | 'Biometric-Video';
  status: 'active' | 'paused' | 'archived';
  budget: number;
  adGroups: AdGroup[];
}

export interface AdGroup {
  id: string;
  name: string;
  targeting: {
    keywords: { text: string; matchType: 'Exact' | 'Neural-Broad' | 'Semantic' }[];
    negativeKeywords: string[];
    audiences: string[];
    locations: string[];
    languages: string[];
  };
}
