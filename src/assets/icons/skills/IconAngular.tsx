import { Icon } from '@core/types';

export function IconAngular({ size, color, className }: Icon) {
  return (
    <svg
      width={`${size ?? 2.4}rem`}
      height={`${size ?? 2.4}rem`}
      viewBox="-1 0 24 24"
      className={className}
    >
      <path
        fill={color ?? 'currentColor'}
        d="m11.172 24-9.468-5.244-1.704-14.772 11.172-3.984 11.172 3.984-1.704 14.772zm0-21.348-6.984 15.66h2.604l1.404-3.504h5.928l1.404 3.504h2.604zm2.04 9.996h-4.08l2.04-4.908z"
      />
    </svg>
  );
}
