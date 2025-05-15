import type { SVGProps } from "react";
export default function EmojiSadFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001S1.998 17.524 1.998 12.001C1.998 6.477 6.476 1.999 12 1.999m0 11.499a6 6 0 0 0-4.288 1.803.75.75 0 0 0 1.072 1.05A4.5 4.5 0 0 1 12 14.997c1.225 0 2.37.49 3.211 1.347a.75.75 0 0 0 1.07-1.051A6 6 0 0 0 12 13.498M9 8.751a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.5Zm6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499"
      />
    </svg>
  );
}
