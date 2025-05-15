import type { SVGProps } from "react";
export default function ArrowDownLeftFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m4.999 17.585 14.292-14.29a1 1 0 0 1 1.498 1.32l-.084.094L6.413 19h5.088a1 1 0 0 1 .993.884L12.5 20a1 1 0 0 1-.884.994L11.5 21H3.94l-.096-.01-.077-.015-.077-.022-.07-.026-.09-.042-.089-.053-.091-.07.032.027a1 1 0 0 1-.166-.166l-.051-.07-.04-.064-.032-.064-.034-.082-.025-.08-.024-.111-.007-.061-.004-.09v-7.503a1 1 0 0 1 1.993-.117l.007.117zl14.292-14.29L5 17.585Z"
      />
    </svg>
  );
}
