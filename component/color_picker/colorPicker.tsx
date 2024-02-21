import React, { useEffect, useRef } from "react";
import styles from "./colorpicker.module.css";
import { colorConverterService } from "./services";

interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

interface ColorPickerComponentProps {
  style?: React.CSSProperties;
  handleColorSelected(color: string): void;
}

export default function ColorPickerComponent(props: ColorPickerComponentProps) {
  const saturationRef = React.useRef<any>()
  const saturationSelectorRef = useRef<any>();
  const hueRef = useRef<any>();
  const hueSelectorRef = useRef<any>();
  const isDown = useRef<boolean>(false);
  const optionActive = useRef<"saturation" | "hue" | undefined>(undefined);
  const inputRef = useRef<any>();
  const mousePosition = useRef<any>();
  const MAX_HUE = 360;

  const hslColor = useRef<HSL>({
    hue: 0,
    saturation: 0,
    lightness: 0
  });

  const calculateHslFromCoordinates = (x: number, y: number): void => {
    hslColor.current.saturation = x;
    hslColor.current.lightness = (50 * (1 - x / 100) + 50) * (1 - y / 100);
  };

  const handleHueCursorPosition = (
    e: React.MouseEvent<HTMLDivElement> | MouseEvent
  ): void => {
    const hueRect = hueRef.current.getBoundingClientRect();
    const hueWidth =
      hueRef.current.offsetWidth - hueSelectorRef.current.offsetWidth;
    const mousePositionX = e.clientX - hueRect.left;

    mousePosition.current = {
      x:
        mousePositionX >= 0 && mousePositionX <= hueWidth
          ? mousePositionX
          : mousePositionX > hueWidth
          ? hueWidth
          : 0
    };

    hueSelectorRef.current.style.left = mousePosition.current.x + "px";
    const hue = (mousePosition.current.x / hueWidth) * MAX_HUE;
    hslColor.current.hue = hue;
    saturationRef.current.style.background = `hsl(${hue},${100}%,${50}%)`;

    const hex = colorConverterService.hslToHex(
      hslColor.current.hue,
      hslColor.current.saturation,
      hslColor.current.lightness
    );

    inputRef.current.value = hex;
  };

  const handleSaturationCursorPosition = (
    e: React.MouseEvent<HTMLDivElement> | MouseEvent
  ): void => {
    const saturationRect = saturationRef.current.getBoundingClientRect();
    const [saturationWidth, saturationHeight] = [
      saturationRef.current.offsetWidth,
      saturationRef.current.offsetHeight
    ];
    const [mousePositionX, mousePositionY] = [
      e.clientX - saturationRect.left,
      e.clientY - saturationRect.top
    ];

    mousePosition.current = {
      x:
        mousePositionX >= 0 && mousePositionX <= saturationWidth
          ? mousePositionX
          : mousePositionX > saturationWidth
          ? saturationWidth
          : 0,
      y:
        mousePositionY >= 0 && mousePositionY <= saturationHeight
          ? mousePositionY
          : mousePositionY > saturationHeight
          ? saturationHeight
          : 0
    };

    saturationSelectorRef.current.style.top = mousePosition.current.y + "px";
    saturationSelectorRef.current.style.left = mousePosition.current.x + "px";

    calculateHslFromCoordinates(
      (mousePosition.current.x * 100) / saturationWidth,
      (mousePosition.current.y * 100) / saturationHeight
    );

    const hex = colorConverterService.hslToHex(
      hslColor.current.hue,
      hslColor.current.saturation,
      hslColor.current.lightness
    );
    inputRef.current.value = hex;
  };

  const handleMouseMove = (e: MouseEvent): void => {
    e.preventDefault();

    if (isDown.current) {
      if (optionActive.current === "saturation") {
        handleSaturationCursorPosition(e);
      } else if (optionActive.current === "hue") {
        handleHueCursorPosition(e);
      }
    }
  };

  const handleMouseUp = (): void => {
    isDown.current = false;

    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);

    optionActive.current = undefined;
    const hex = colorConverterService.hslToHex(
      hslColor.current.hue,
      hslColor.current.saturation,
      hslColor.current.lightness
    );

    props.handleColorSelected(hex);
  };

  useEffect(() => {
    inputRef.current.value = "#000000";
  }, []);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement> | MouseEvent,
    option: "saturation" | "hue"
  ): void => {
    isDown.current = true;
    optionActive.current = option;

    if (optionActive.current === "saturation") {
      handleSaturationCursorPosition(e);
    } else if (optionActive.current === "hue") {
      handleHueCursorPosition(e);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const calculateCoordinatesFromHsl = (
    h: number,
    s: number,
    l: number
  ): void => {
    const x = s;
    const y = -(l / (50 * (1 - s / 100) + 50) - 1) * 100;

    const [saturationWidth, saturationHeight] = [
      saturationRef.current.offsetWidth,
      saturationRef.current.offsetHeight
    ];

    hueSelectorRef.current.style.left =
      (h * (hueRef.current.offsetWidth - hueSelectorRef.current.offsetWidth)) /
        MAX_HUE +
      "px";
    saturationSelectorRef.current.style.top =
      (y * saturationHeight) / 100 + "px";
    saturationSelectorRef.current.style.left =
      (x * saturationWidth) / 100 + "px";
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value;
    e.target.value = "#" + input.substr(1);

    const hsl = colorConverterService.hexToHSL(input);

    if (hsl) {
      const rgb = colorConverterService.hexToRGB(input);
      const hsv = colorConverterService.RGBToHSV(rgb.r, rgb.g, rgb.b);

      calculateCoordinatesFromHsl(hsl.h, hsv.s, hsl.l);

      hslColor.current = {
        hue: hsl.h,
        saturation: hsl.s,
        lightness: hsl.l
      };

      saturationRef.current.style.background = `hsl(${hsl.h},${100}%,${50}%)`;

      props.handleColorSelected(e.target.value);
    }
  };

  return (
    <div style={props.style} className={styles.colorPickerWrapper}>
      <div className={styles.colorPicker}>
        <div
          ref={saturationRef}
          className={styles.saturation}
          onMouseDown={(e) => handleMouseDown(e, "saturation")}
        >
          <div className={styles.saturation__white} />
          <div className={styles.saturation__black} />

          <span
            ref={saturationSelectorRef}
            className={styles.saturation__selector}
          />
        </div>

        <div className={styles.hueWrapper}>
          <div
            ref={hueRef}
            className={styles.hue}
            onMouseDown={(e) => handleMouseDown(e, "hue")}
          >
            <span ref={hueSelectorRef} className={styles.hue__selector} />
          </div>
        </div>
      </div>

      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        maxLength={7}
        onChange={handleInput}
      />
    </div>
  );
}
