import 'package:flutter/material.dart';

// Enum for button variants
enum ButtonVariant {
  primary,
  secondary,
  destructive,
  outline,
  ghost,
  link,
}

// Custom Button widget
class Button extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final ButtonVariant variant;
  final Widget? leadingIcon;
  final Widget? trailingIcon;
  final bool isDisabled;
  final bool isLoading;

  const Button({
    super.key,
    required this.text,
    required this.onPressed,
    this.variant = ButtonVariant.primary,
    this.leadingIcon,
    this.trailingIcon,
    this.isDisabled = false,
    this.isLoading = false,
  });

  @override
  Widget build(BuildContext context) {
    // Access the current theme and color scheme
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    // Define default text style with proper foreground color and decoration
    TextStyle textStyle = theme.textTheme.labelLarge?.copyWith(
          color: _getForegroundColor(colorScheme, variant),
          decoration:
              variant == ButtonVariant.link ? TextDecoration.underline : null,
        ) ??
        TextStyle(
          color: _getForegroundColor(colorScheme, variant),
          decoration:
              variant == ButtonVariant.link ? TextDecoration.underline : null,
        );

    // Variables to determine button styles
    Color backgroundColor = _getBackgroundColor(colorScheme, variant);
    Color foregroundColor = _getForegroundColor(colorScheme, variant);
    BorderSide borderSide = _getBorderSide(colorScheme, variant);

    // Adjust styles for disabled or loading state
    if (isDisabled || isLoading) {
      backgroundColor = backgroundColor.withOpacity(0.5);
      foregroundColor = foregroundColor.withOpacity(0.5);
    }

    // Determine the button's child
    Widget buttonChild;
    if (isLoading) {
      buttonChild = SizedBox(
        width: 24,
        height: 24,
        child: CircularProgressIndicator(
          strokeWidth: 2,
          color: foregroundColor,
        ),
      );
    } else {
      buttonChild = Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (leadingIcon != null) ...[
            IconTheme(
              data: IconThemeData(color: foregroundColor),
              child: leadingIcon!,
            ),
            const SizedBox(width: 8), // Space between leading icon and text
          ],
          Text(text, style: textStyle),
          if (trailingIcon != null) ...[
            const SizedBox(width: 8), // Space between text and trailing icon
            IconTheme(
              data: IconThemeData(color: foregroundColor),
              child: trailingIcon!,
            ),
          ],
        ],
      );
    }

    // Build the button
    return TextButton(
      onPressed: (isDisabled || isLoading) ? null : onPressed,
      style: TextButton.styleFrom(
        backgroundColor: backgroundColor,
        foregroundColor: foregroundColor,
        side: borderSide,
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8.0),
        ),
      ),
      child: buttonChild,
    );
  }

  // Helper method to determine background color
  Color _getBackgroundColor(ColorScheme colorScheme, ButtonVariant variant) {
    switch (variant) {
      case ButtonVariant.primary:
        return colorScheme.primary;
      case ButtonVariant.secondary:
        return colorScheme.secondary;
      case ButtonVariant.destructive:
        return colorScheme.error;
      case ButtonVariant.outline:
      case ButtonVariant.ghost:
      case ButtonVariant.link:
        return Colors.transparent;
    }
  }

  // Helper method to determine foreground color
  Color _getForegroundColor(ColorScheme colorScheme, ButtonVariant variant) {
    switch (variant) {
      case ButtonVariant.primary:
        return colorScheme.onPrimary;
      case ButtonVariant.secondary:
        return colorScheme.onSecondary;
      case ButtonVariant.destructive:
        return colorScheme.onError;
      case ButtonVariant.outline:
      case ButtonVariant.ghost:
        return colorScheme.onSurfaceVariant;
      case ButtonVariant.link:
        return colorScheme.primary;
    }
  }

  // Helper method to determine border style
  BorderSide _getBorderSide(ColorScheme colorScheme, ButtonVariant variant) {
    switch (variant) {
      case ButtonVariant.outline:
        return BorderSide(color: colorScheme.outline);
      default:
        return BorderSide.none;
    }
  }
}
