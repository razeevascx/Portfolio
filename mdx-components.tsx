import React, { ComponentPropsWithoutRef } from "react";


const components = {
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
