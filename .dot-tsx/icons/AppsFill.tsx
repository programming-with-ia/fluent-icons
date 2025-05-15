import type { SVGProps } from "react";
export default function AppsFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m18.492 2.33 3.179 3.179a2.25 2.25 0 0 1 0 3.182l-2.423 2.422A2.5 2.5 0 0 1 21 13.5v5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h5a2.5 2.5 0 0 1 2.387 1.754L15.31 2.33a2.25 2.25 0 0 1 3.182 0M11 13H5v5.5a.5.5 0 0 0 .5.5H11zm7.5 0H13v6h5.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5m-4.06-2.001L13 9.559v1.44zm-3.94-6h-5a.5.5 0 0 0-.5.5V11h6V5.5a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
