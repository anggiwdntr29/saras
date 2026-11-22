import type { CSSProperties } from 'react'

/** Stagger helper for `.reveal` animations. */
export const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties

/** Shared container width — every section aligns to the same column. */
export const CONTAINER = 'mx-auto w-full max-w-[76rem] px-5 sm:px-8 lg:px-10'
