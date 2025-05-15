import type { SVGProps } from "react";
export default function BlurOutline({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 12a9 9 0 0 1 13.977-7.5H12a7.5 7.5 0 1 0 0 15V18h6.708A9 9 0 0 1 3 12"
      />
      <path
        fill="currentColor"
        d="M18.225 5.5H12V7h7.485a9 9 0 0 0-1.26-1.5M12 8h8.064q.358.717.584 1.5H12zm8.876 2.5H12V12h9q-.001-.767-.124-1.5M12 13h8.945a9 9 0 0 1-.297 1.5H12zm8.294 2.5H12V17h7.485a9 9 0 0 0 .81-1.5Z"
      />
    </svg>
  );
}
