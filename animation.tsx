'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

type CellData = {
  x: number;
  y: number;
  char: string;
  color: string;
  bgColor?: string;
};

type Frame = {
  duration: number;
  cells: CellData[];
};

type AsciiMotionComponentProps = {
  showControls?: boolean;
  autoPlay?: boolean;
  onReady?: (api: {
    play: () => void;
    pause: () => void;
    togglePlay: () => void;
    restart: () => void;
  }) => void;
};

const FRAMES: Frame[] = [
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 3,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 4,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 6,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 18,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 19,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 20,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 3,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 4,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 6,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 18,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 19,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 20,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 79,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 12,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 12,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 15,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 16,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 20,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 79,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 12,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 12,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 15,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 16,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 20,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 5,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 20,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 5,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 20,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 60,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 79,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 79,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 14,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 20,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 60,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 79,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 79,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 0,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 14,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 20,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 6,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 14,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 16,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 6,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 14,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 16,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 6,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 6,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 14,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 16,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 19,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 20,
        "char": ".",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 8,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 4,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 79,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 12,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 15,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 8,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 4,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 4,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 79,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 12,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 13,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 15,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 12,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 16,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 12,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 14,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 14,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 15,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 16,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 3,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 4,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 8,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 17,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 18,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 18,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 7,
        "y": 3,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 4,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 8,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 17,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 18,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 18,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  },
  {
    "duration": 33,
    "cells": [
      {
        "x": 5,
        "y": 3,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 3,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 3,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 3,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 4,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 4,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 5,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 5,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 5,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 6,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 6,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 6,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 6,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 7,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 7,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 7,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 7,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 7,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 8,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 8,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 8,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 8,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 8,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 1,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 2,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 3,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 4,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 5,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 6,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 7,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 8,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 9,
        "y": 9,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 10,
        "y": 9,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 9,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 9,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 73,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 74,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 75,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 76,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 77,
        "y": 9,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 78,
        "y": 9,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 10,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 10,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 10,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 10,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 69,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 70,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 71,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 72,
        "y": 10,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 11,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 11,
        "char": "*",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 11,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 11,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 66,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 67,
        "y": 11,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 68,
        "y": 11,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 12,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 26,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 27,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 28,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 29,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 30,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 31,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 32,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 62,
        "y": 12,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 63,
        "y": 12,
        "char": "+",
        "color": "#ffffff"
      },
      {
        "x": 64,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 65,
        "y": 12,
        "char": "#",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 13,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 33,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 13,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 53,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 54,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 55,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 56,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 57,
        "y": 13,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 59,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 60,
        "y": 13,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 61,
        "y": 13,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 17,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 18,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 14,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 42,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 14,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 51,
        "y": 14,
        "char": ":",
        "color": "#ffffff"
      },
      {
        "x": 52,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 58,
        "y": 14,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 16,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 19,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 20,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 15,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 34,
        "y": 15,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 35,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 43,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 44,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 45,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 15,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 11,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 21,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 22,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 23,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 24,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 16,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 46,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 47,
        "y": 16,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 16,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 16,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 12,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 17,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 25,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 17,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 17,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 17,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 13,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 14,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 18,
        "char": ".",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 18,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 41,
        "y": 18,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 18,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 18,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 15,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 19,
        "char": " ",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 19,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 40,
        "y": 19,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 19,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 36,
        "y": 20,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 37,
        "y": 20,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 38,
        "y": 20,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 39,
        "y": 20,
        "char": ";",
        "color": "#ffffff"
      },
      {
        "x": 48,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 50,
        "y": 20,
        "char": "@",
        "color": "#ffffff"
      },
      {
        "x": 49,
        "y": 21,
        "char": " ",
        "color": "#ffffff"
      }
    ]
  }
];

const CANVAS_WIDTH = 864;
const CANVAS_HEIGHT = 432;
const CELL_WIDTH = 10.8;
const CELL_HEIGHT = 18;
const FONT_SIZE = 18;
const FONT_FAMILY = "SF Mono, Monaco, Cascadia Code, Consolas, JetBrains Mono, Fira Code, Monaspace Neon, Geist Mono, Courier New, monospace";
const BACKGROUND_COLOR = "#000000";

const AsciiMotionAnimation = (props: AsciiMotionComponentProps = {}) => {
  const { showControls = true, autoPlay = true, onReady } = props;
  const controlsVisible = showControls !== false;
  const initialAutoPlay = autoPlay !== false;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const frameIndexRef = useRef<number>(0);
  const frameElapsedRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(0);
  const restartRef = useRef<() => void>(() => {});
  const isPlayingRef = useRef<boolean>(initialAutoPlay);
  const [isPlaying, setIsPlaying] = useState<boolean>(initialAutoPlay);
  const [activeFrame, setActiveFrame] = useState<number>(0);
  const updatePlayingState = useCallback((value: boolean) => {
    isPlayingRef.current = value;
    setIsPlaying(value);
  }, []);
  const play = useCallback(() => {
    updatePlayingState(true);
  }, [updatePlayingState]);
  const pause = useCallback(() => {
    updatePlayingState(false);
  }, [updatePlayingState]);
  const togglePlay = useCallback(() => {
    updatePlayingState(!isPlayingRef.current);
  }, [updatePlayingState]);
  const restart = useCallback(() => {
    if (restartRef.current) {
      restartRef.current();
    }
  }, []);

  useEffect(() => {
    if (isPlayingRef.current !== initialAutoPlay) {
      updatePlayingState(initialAutoPlay);
    }
  }, [initialAutoPlay, updatePlayingState]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * devicePixelRatio;
    canvas.height = CANVAS_HEIGHT * devicePixelRatio;
    canvas.style.width = CANVAS_WIDTH + 'px';
    canvas.style.height = CANVAS_HEIGHT + 'px';
    context.resetTransform();
    context.scale(devicePixelRatio, devicePixelRatio);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = FONT_SIZE + 'px ' + FONT_FAMILY;
    context.imageSmoothingEnabled = false;

    frameIndexRef.current = 0;
    frameElapsedRef.current = 0;
    lastTimestampRef.current = 0;

    const drawFrame = (index: number) => {
      const frame = FRAMES[index];

      if (BACKGROUND_COLOR) {
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      } else {
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      }

      if (!frame) {
        return;
      }

      for (const cell of frame.cells) {
        if (cell.bgColor) {
          context.fillStyle = cell.bgColor;
          context.fillRect(cell.x * CELL_WIDTH, cell.y * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
        }

        context.fillStyle = cell.color || '#ffffff';
        context.fillText(
          cell.char,
          cell.x * CELL_WIDTH + CELL_WIDTH / 2,
          cell.y * CELL_HEIGHT + CELL_HEIGHT / 2
        );
      }

      setActiveFrame(index);
    };

    drawFrame(frameIndexRef.current);

    if (FRAMES.length === 0) {
      restartRef.current = () => {
        drawFrame(0);
        setActiveFrame(0);
      };
      return;
    }

    const step = (timestamp: number) => {
      if (FRAMES.length === 0) {
        return;
      }

      if (lastTimestampRef.current === 0) {
        lastTimestampRef.current = timestamp;
      }

      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (isPlayingRef.current) {
        frameElapsedRef.current += delta;

        let nextIndex = frameIndexRef.current;
        let remaining = frameElapsedRef.current;
        let duration = FRAMES[nextIndex]?.duration ?? 16;

        while (remaining >= duration && FRAMES.length > 0) {
          remaining -= duration;
          nextIndex = (nextIndex + 1) % FRAMES.length;
          duration = FRAMES[nextIndex]?.duration ?? duration;
        }

        frameElapsedRef.current = remaining;

        if (nextIndex !== frameIndexRef.current) {
          frameIndexRef.current = nextIndex;
          drawFrame(nextIndex);
        } else {
          drawFrame(frameIndexRef.current);
        }
      } else {
        drawFrame(frameIndexRef.current);
      }

      animationFrameRef.current = window.requestAnimationFrame(step);
    };

    animationFrameRef.current = window.requestAnimationFrame(step);

    restartRef.current = () => {
      frameIndexRef.current = 0;
      frameElapsedRef.current = 0;
      lastTimestampRef.current = 0;
      drawFrame(0);
      setActiveFrame(0);
    };

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (typeof onReady === "function") {
      onReady({
        play,
        pause,
        togglePlay,
        restart,
      });
    }
  }, [onReady, play, pause, togglePlay, restart]);

  const hasFrames = FRAMES.length > 0;

  const handleTogglePlay = () => {
    if (!hasFrames) {
      return;
    }
    togglePlay();
  };

  const handleRestart = () => {
    if (!hasFrames) {
      return;
    }
    restart();
    updatePlayingState(true);
  };

  const playLabel = isPlaying ? 'Pause' : 'Play';
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{
          width: CANVAS_WIDTH + 'px',
          height: CANVAS_HEIGHT + 'px',
          backgroundColor: BACKGROUND_COLOR || 'transparent',
          imageRendering: 'pixelated'
        }}
      />
      {controlsVisible && (
        <div
          style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <button
            type="button"
            onClick={handleTogglePlay}
            disabled={!hasFrames}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid rgba(0, 0, 0, 0.2)',
              background: isPlaying ? '#f1f5f9' : '#111827',
              color: isPlaying ? '#111827' : '#f9fafb',
              cursor: hasFrames ? 'pointer' : 'not-allowed'
            }}
          >
            {playLabel}
          </button>
          <button
            type="button"
            onClick={handleRestart}
            disabled={!hasFrames}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid rgba(0, 0, 0, 0.2)',
              background: '#0f172a',
              color: '#f9fafb',
              cursor: hasFrames ? 'pointer' : 'not-allowed'
            }}
          >
            Restart
          </button>
          <span
            style={{ fontFamily: 'monospace', fontSize: '12px', color: '#475569' }}
          >
            {hasFrames ? 'Frame ' + (activeFrame + 1) + ' / ' + FRAMES.length : 'No frames'}
          </span>
        </div>
      )}
    </div>
  );
};

export default AsciiMotionAnimation;
