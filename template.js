const hexColorRegex = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

/**
 * Recursively replaces hex color strings in JSX attribute values with "currentColor".
 * Returns the modified node.
 */
function replaceHexWithCurrentColor(node) {
  if (
    node.type === "JSXElement" &&
    node.openingElement &&
    node.openingElement.attributes
  ) {
    node.openingElement.attributes.forEach((attr) => {
      if (
        attr.type === "JSXAttribute" &&
        ["fill", "stroke"].includes(attr.name.name) &&
        attr.value &&
        attr.value.type === "StringLiteral" &&
        attr.value.value != "none" &&
        hexColorRegex.test(attr.value.value)
      ) {
        attr.value.value = "currentColor";
      }
    });

    // Recursively handle children
    node.children.forEach((child) => {
      if (child.type === "JSXElement") {
        replaceHexWithCurrentColor(child);
      }
    });
  }

  return node;
}

const propTypesTemplate = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`
import type { SVGProps } from "react";
\n\n

export default function ${componentName.replace(
    /^Svg/,
    ""
  )}({ ...props }: SVGProps<SVGSVGElement>) {
  return ${replaceHexWithCurrentColor(jsx)};
}
`;
};

module.exports = propTypesTemplate;
