import { Linking, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import styled from 'styled-components/native';
import React from 'react';
import type { TextInput, GestureResponderEvent } from 'react-native';
import getStyledBaseButtonStyles from './getStyledBaseButtonStyles';
import type { StyledBaseButtonProps } from './types';
import { getIn } from '~utils';
import { useStyledProps } from '~components/Box/styledProps';
import { useTheme } from '~components/BladeProvider';
import { assignWithoutSideEffects } from '~src/utils/assignWithoutSideEffects';

const StyledPressable = styled(Animated.createAnimatedComponent(Pressable))<
  Omit<StyledBaseButtonProps, 'accessibilityProps'>
>((props) => {
  const styledPropsCSSObject = useStyledProps(props);

  return {
    ...getStyledBaseButtonStyles(props),
    alignSelf: 'center',
    display: 'flex',
    ...styledPropsCSSObject,
  };
});

const openURL = async (href: string): Promise<void> => {
  try {
    const canOpen = await Linking.canOpenURL(href);
    if (canOpen) {
      await Linking.openURL(href);
    }
  } catch {
    console.warn(`[Blade: BaseButton]: Could not open the link "href=${href}"`);
  }
};

const _StyledBaseButton: React.ForwardRefRenderFunction<TextInput, StyledBaseButtonProps> = (
  {
    onClick,
    href,
    onBlur,
    onKeyDown,
    children,
    minHeight,
    buttonPaddingTop,
    buttonPaddingBottom,
    buttonPaddingLeft,
    buttonPaddingRight,
    isFullWidth,
    disabled,
    defaultBackgroundColor,
    defaultBorderColor,
    hoverBackgroundColor,
    activeBackgroundColor,
    focusBackgroundColor,
    focusRingColor,
    hoverBorderColor,
    activeBorderColor,
    focusBorderColor,
    borderWidth,
    borderRadius,
    motionDuration,
    motionEasing,
    isLoading,
    accessibilityProps,
    testID,
    ...styledProps
  },
  ref,
) => {
  const { theme } = useTheme();
  const isPressed = useSharedValue(false);
  const duration = getIn(theme.motion, motionDuration);
  const easing = getIn(theme.motion, motionEasing);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isPressed.value ? activeBackgroundColor : defaultBackgroundColor,
        {
          duration,
          easing,
        },
      ),
      borderColor: withTiming(isPressed.value ? activeBorderColor : defaultBorderColor, {
        duration,
        easing,
      }),
    };
  });

  const handleOnPress = (event: GestureResponderEvent): void => {
    if (href) {
      void openURL(href);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <StyledPressable
      {...styledProps}
      {...accessibilityProps}
      ref={ref}
      isLoading={isLoading}
      onPress={handleOnPress}
      style={animatedStyles}
      minHeight={minHeight}
      buttonPaddingTop={buttonPaddingTop}
      buttonPaddingBottom={buttonPaddingBottom}
      buttonPaddingLeft={buttonPaddingLeft}
      buttonPaddingRight={buttonPaddingRight}
      isFullWidth={isFullWidth}
      disabled={disabled}
      defaultBackgroundColor={defaultBackgroundColor}
      defaultBorderColor={defaultBorderColor}
      hoverBackgroundColor={hoverBackgroundColor}
      activeBackgroundColor={activeBackgroundColor}
      focusBackgroundColor={focusBackgroundColor}
      focusRingColor={focusRingColor}
      hoverBorderColor={hoverBorderColor}
      activeBorderColor={activeBorderColor}
      focusBorderColor={focusBorderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      motionDuration={motionDuration}
      motionEasing={motionEasing}
      testID={testID}
    >
      {({ pressed }): React.ReactNode => {
        isPressed.value = pressed;
        return children;
      }}
    </StyledPressable>
  );
};

const StyledBaseButton = assignWithoutSideEffects(React.forwardRef(_StyledBaseButton), {
  displayName: 'StyledBaseButton',
});

export default StyledBaseButton;
