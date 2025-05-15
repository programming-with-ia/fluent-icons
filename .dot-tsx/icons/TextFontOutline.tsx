import type { SVGProps } from "react";
export default function TextFontOutline({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7 2a.75.75 0 0 1 .704.49l2.951 7.985.013.032.222.602-.828 2.086-.626-1.694H4.564l-1.113 3.01a.75.75 0 1 1-1.407-.521l1.288-3.483.012-.033L6.297 2.49A.75.75 0 0 1 7 2m-1.88 8h3.76L7 4.913 5.118 10Zm8.686-3.527a.75.75 0 0 1 1.395 0l5.554 14.031h.494a.75.75 0 1 1 0 1.5H18.75a.75.75 0 0 1 0-1.5h.392l-1.19-3.004h-6.91L9.85 20.504h.4a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h.485l5.57-14.03ZM17.36 16l-2.857-7.215L11.638 16h5.72Z"
      />
    </svg>
  );
}
