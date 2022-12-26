import { Icon } from '@core/types';
import { useTheme } from 'styled-components';

export function SpeechBubble({ color, className }: Icon) {
  const theme = useTheme();
  return (
    <svg
      width="100%"
      height="100%"
      className={className}
      viewBox="423.97 293.633 1664.817 575.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="doodad" width="2" height="2" viewBox="0 0 5 5" patternUnits="userSpaceOnUse">
          <rect width="100%" height="100%" fill={theme.color.tertiary.main} />
          <rect width="1" height="1" fill={theme.color.tertiary.dark} />
        </pattern>

        <filter
          id="a"
          x="-100%"
          y="-100%"
          width="290"
          height="310"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feGaussianBlur />
          <feColorMatrix values="0 0 0 0 0.0 0 0 0 0 0.0 0 0 0 0 0.0 0 0 0 0.7529411764705882 0" />
        </filter>
      </defs>
      <g transform="matrix(5.011144, 0, 0, 2.596362, 429.406799, 329.872009)">
        <svg width="315.36" height="201.56" viewBox="0 0 315.36 201.56" filter="url(#a)">
          <path
            d="M296.71 199.06H55.82a16.15 16.15 0 0 1-16.15-16.15v-23.25l-37.17-24 37.17-23V18.65A16.15 16.15 0 0 1 55.82 2.5h240.89a16.15 16.15 0 0 1 16.15 16.15v164.26a16.15 16.15 0 0 1-16.15 16.15z"
            fill="black"
          />
          <path
            d="M296.71 201.56H55.82a18.68 18.68 0 0 1-18.65-18.65V161l-36-23.22a2.5 2.5 0 0 1 .05-4.23l36-22.23V18.65A18.68 18.68 0 0 1 55.82 0h240.89a18.68 18.68 0 0 1 18.65 18.65v164.26a18.68 18.68 0 0 1-18.65 18.65zM7.18 135.74 41 157.56a2.5 2.5 0 0 1 1.14 2.1v23.25a13.67 13.67 0 0 0 13.65 13.65h240.92a13.67 13.67 0 0 0 13.65-13.65V18.65A13.66 13.66 0 0 0 296.71 5H55.82a13.67 13.67 0 0 0-13.65 13.65v94.08a2.52 2.52 0 0 1-1.17 2.13z"
            fill={color ?? 'black'}
          />
        </svg>
      </g>
      <g transform="matrix(5.011144, 0, 0, 2.596362, 479.416718, 303.964905)">
        <svg width="315.36" height="201.56" viewBox="0 0 315.36 201.56">
          <path
            d="M296.71 199.06H55.82a16.15 16.15 0 0 1-16.15-16.15v-23.25l-37.17-24 37.17-23V18.65A16.15 16.15 0 0 1 55.82 2.5h240.89a16.15 16.15 0 0 1 16.15 16.15v164.26a16.15 16.15 0 0 1-16.15 16.15z"
            fill="url(#doodad)"
          />
          <path
            d="M296.71 201.56H55.82a18.68 18.68 0 0 1-18.65-18.65V161l-36-23.22a2.5 2.5 0 0 1 .05-4.23l36-22.23V18.65A18.68 18.68 0 0 1 55.82 0h240.89a18.68 18.68 0 0 1 18.65 18.65v164.26a18.68 18.68 0 0 1-18.65 18.65zM7.18 135.74 41 157.56a2.5 2.5 0 0 1 1.14 2.1v23.25a13.67 13.67 0 0 0 13.65 13.65h240.92a13.67 13.67 0 0 0 13.65-13.65V18.65A13.66 13.66 0 0 0 296.71 5H55.82a13.67 13.67 0 0 0-13.65 13.65v94.08a2.52 2.52 0 0 1-1.17 2.13z"
            fill={color ?? 'black'}
          />
        </svg>
      </g>
    </svg>
  );
}
