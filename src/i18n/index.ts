import type { Locale } from '../config';
import { en, type Dict } from './en';
import { tr } from './tr';

const dicts: Record<Locale, Dict> = { en, tr };

export function t(locale: Locale): Dict {
  return dicts[locale];
}

export type { Dict };
