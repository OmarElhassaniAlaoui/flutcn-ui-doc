import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
    final String text;
    final VoidCallback? onPressed;
    final Color? backgroundColor;
    final Color? textColor;
    final double? width;
    final double? height;
    final bool isLoading;
    final EdgeInsetsGeometry? padding;
    final BorderRadius? borderRadius;

    const CustomButton({
        Key? key,
        required this.text,
        this.onPressed,
        this.backgroundColor,
        this.textColor,
        this.width,
        this.height = 48.0,
        this.isLoading = false,
        this.padding,
        this.borderRadius,
    }) : super(key: key);

    @override
    Widget build(BuildContext context) {
        return SizedBox(
            width: width,
            height: height,
            child: ElevatedButton(
                onPressed: isLoading ? null : onPressed,
                style: ElevatedButton.styleFrom(
                    backgroundColor: backgroundColor ?? Theme.of(context).primaryColor,
                    padding: padding ?? const EdgeInsets.symmetric(horizontal: 16),
                    shape: RoundedRectangleBorder(
                        borderRadius: borderRadius ?? BorderRadius.circular(8),
                    ),
                ),
                child: isLoading
                        ? const SizedBox(
                                width: 24,
                                height: 24,
                                child: CircularProgressIndicator(
                                    strokeWidth: 2,
                                    valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                                ),
                            )
                        : Text(
                                text,
                                style: TextStyle(
                                    color: textColor ?? Colors.white,
                                    fontSize: 16,
                                    fontWeight: FontWeight.bold,
                                ),
                            ),
            ),
        );
    }
}