import { Icon } from '@core/types';

export function IconHamburger({ size, color, className }: Icon) {
  return (
    <svg
      width={`${size ?? 2.4}rem`}
      height={`${size ?? 2.4}rem`}
      viewBox="0 0 24 24"
      className={className}
      fill={color ?? 'currentColor'}
    >
      <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
    </svg>
  );
}
