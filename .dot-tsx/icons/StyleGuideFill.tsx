import type { SVGProps } from "react";
export default function StyleGuideFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m17.404 4.722 2.718 10.142a2.75 2.75 0 0 1-1.945 3.368L11.9 19.915a2.75 2.75 0 0 1-3.37-1.945L5.813 7.828A2.75 2.75 0 0 1 7.758 4.46l6.278-1.683a2.75 2.75 0 0 1 3.368 1.945m-6.438 3.02a1 1 0 1 0-1.932.517 1 1 0 0 0 1.932-.518Zm-5.163 3.916 1.762 6.57a3.73 3.73 0 0 0 1.002 1.714l-.443-.024a2.75 2.75 0 0 1-2.602-2.89zm-.925-1.478-.355 6.796a3.73 3.73 0 0 0 .424 1.94l-.414-.161a2.75 2.75 0 0 1-1.582-3.553z"
      />
    </svg>
  );
}
