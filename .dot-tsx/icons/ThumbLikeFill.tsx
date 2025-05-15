import type { SVGProps } from "react";
export default function ThumbLikeFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M15.057 9.004q.691-2.139.693-3.753c0-2.399-.939-4.248-2.5-4.248-.847 0-1.109.505-1.437 1.747.017-.065-.163.634-.215.821q-.152.54-.527 1.831a.3.3 0 0 1-.03.065L8.175 9.953A5.9 5.9 0 0 1 5.32 12.28l-1.257.481a1.75 1.75 0 0 0-1.092 1.968l.686 3.538a2.25 2.25 0 0 0 1.673 1.757l8.25 2.022a4.75 4.75 0 0 0 5.733-3.44l1.574-6.173a2.75 2.75 0 0 0-2.665-3.429z"
      />
    </svg>
  );
}
