import type { SVGProps } from "react";
export default function DataLineFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M16 6a3 3 0 1 1 2.524 2.962l-2.038 3.358a3 3 0 0 1-4.749 3.65l-3.741 1.87a3 3 0 1 1-.461-1.446l3.531-1.765a3 3 0 0 1 4.275-3.313l1.798-2.963A3 3 0 0 1 16 6"
      />
    </svg>
  );
}
