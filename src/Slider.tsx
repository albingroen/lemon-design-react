import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useRef,
} from "react";
import Typography from "./Typography";
import classNames from "./lib/classNames";
import Stack from "./Stack";

export interface CustomSliderProps {
  labels?: string[];
}

export interface SliderProps
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    CustomSliderProps {}

export default function Slider({ className, labels, ...rest }: SliderProps) {
  const slider = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (slider) {
      setBackgroundSize(slider.current!);

      slider.current?.addEventListener("input", () =>
        setBackgroundSize(slider.current!)
      );
    }

    function setBackgroundSize(input: HTMLInputElement) {
      input.style.setProperty(
        "--background-size",
        `${getBackgroundSize(input)}%`
      );
    }

    function getBackgroundSize(input: HTMLInputElement) {
      const min = +input.min || 0;
      const max = +input.max || 100;
      const value = +input.value;

      return ((value - min) / (max - min)) * 100;
    }
  }, [slider]);

  return (
    <Stack direction="vertical" spacing="mini">
      <input
        {...rest}
        className={classNames("w-full slider", className)}
        type="range"
        ref={slider}
      />

      {labels?.length ? (
        <Stack align="center" justify="between">
          {labels.map((label) => (
            <div key={label} className="flex items-center justify-center w-3">
              <Typography.Paragraph className="!text-sm text-center" dim>
                {label}
              </Typography.Paragraph>
            </div>
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
}
