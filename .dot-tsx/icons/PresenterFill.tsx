import type { SVGProps } from "react";
export default function PresenterFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.244 12.997c.71 0 1.023.893.47 1.336l-4.719 3.777v1.645a2.25 2.25 0 0 1-2.25 2.25H10.25A2.25 2.25 0 0 1 8 19.755V18.11l-4.72-3.777c-.553-.443-.24-1.336.469-1.336zM8.75 9h6.495a1.75 1.75 0 0 1 1.744 1.607l.006.143V12H7v-1.25a1.75 1.75 0 0 1 1.606-1.744zh6.495zM12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
      />
    </svg>
  );
}
