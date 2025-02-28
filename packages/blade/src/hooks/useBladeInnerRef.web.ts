import React from 'react';
import type { TextInput as TextInputReactNative } from 'react-native';
import type { BladeElementRef } from './types';

/**
 * A hook which only exposes the properties of html input element via imparative hook
 *
 * It avoids exposing other native properties of HTMLElement
 * like `style` `classList` to avoid unintended usage of refs.
 */
const useBladeInnerRef = (
  targetRef: React.ForwardedRef<BladeElementRef>,
  handlers?: {
    // In some scenarios, your native HTML element might have a different ref compared to visible element.
    // In those cases, you can call your visible element's focus
    onFocus?: (opts?: FocusOptions) => void;
  },
): React.RefObject<HTMLInputElement | TextInputReactNative> => {
  const innerRef = React.useRef<HTMLInputElement | TextInputReactNative>(null);

  React.useImperativeHandle(
    targetRef,
    (): BladeElementRef => {
      const element = innerRef.current as HTMLInputElement;
      return {
        focus: (opts) => (handlers?.onFocus ? handlers.onFocus(opts) : element?.focus?.(opts)),
        scrollIntoView: (opts) => element?.scrollIntoView?.(opts),
      };
    },
    [innerRef, handlers],
  );

  return innerRef;
};

export { useBladeInnerRef, BladeElementRef };
