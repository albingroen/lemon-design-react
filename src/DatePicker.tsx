import Button from "./Button";
import Input, { InputProps } from "./Input";
import Popover from "./Popover";
import React, { useEffect, useState } from "react";
import Stack from "./Stack";
import Typography from "./Typography";
import moment from "moment";
import { ArrowSmLeftIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { getDaysInMonth, MONTHS, WEEKDAYS } from "./lib/dates";

export interface CustomDatePickerProps {
  onChangeDate: (date: Date) => void;
  showTodayButton?: boolean;
  date?: Date;
}

export interface DatePickerProps
  extends Omit<InputProps, "ref">,
    CustomDatePickerProps {}

const today = new Date();

export default function DatePicker({
  showTodayButton = true,
  onChangeDate,
  date,
  ...rest
}: DatePickerProps) {
  const [currentYear, setCurrentYear] = useState(
    date?.getFullYear() ?? today.getFullYear()
  );
  const [currentMonth, setCurrentMonth] = useState(
    date?.getMonth() ?? today.getMonth()
  );

  const firstDaysOfMonth = Array.from(
    Array(new Date(currentYear, currentMonth, 1).getDay()).keys()
  );

  const days = Array.from(
    Array(getDaysInMonth(currentMonth + 1, currentYear)).keys()
  );

  useEffect(() => {
    if (date) {
      setCurrentYear(date.getFullYear());
      setCurrentMonth(date.getMonth());
    }
  }, [date]);

  function goToToday() {
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
    onChangeDate(today);
  }

  return (
    <Popover
      panelClassName="!p-0 !max-w-sm"
      content={({ onClose }) => {
        return (
          <div className="divide-y space-y-1.5">
            <Stack direction="vertical" spacing="mini">
              <Stack className="p-3" align="center" justify="between">
                <Button
                  onClick={() => {
                    if (currentMonth === 0) {
                      setCurrentYear(currentYear - 1);
                      setCurrentMonth(11);
                    } else {
                      setCurrentMonth(currentMonth - 1);
                    }
                  }}
                  icon={<ArrowSmLeftIcon className="w-4" />}
                  size="small"
                />

                <Typography.Heading level={5}>
                  {MONTHS[currentMonth].name} {currentYear}
                </Typography.Heading>

                <Stack align="center" spacing="small">
                  {showTodayButton && (
                    <Button
                      onClick={() => {
                        goToToday();
                        onClose();
                      }}
                      size="small"
                    >
                      Today
                    </Button>
                  )}

                  <Button
                    onClick={() => {
                      if (currentMonth === 11) {
                        setCurrentYear(currentYear + 1);
                        setCurrentMonth(0);
                      } else {
                        setCurrentMonth(currentMonth + 1);
                      }
                    }}
                    icon={<ArrowSmRightIcon className="w-4" />}
                    size="small"
                  />
                </Stack>
              </Stack>

              <div className="grid grid-cols-7">
                {WEEKDAYS.map((weekday) => (
                  <Typography.Paragraph
                    className="!text-sm text-center"
                    key={weekday}
                    dim
                  >
                    {weekday}
                  </Typography.Paragraph>
                ))}
              </div>
            </Stack>

            <div className="grid grid-cols-7">
              {firstDaysOfMonth.map((day) => {
                return <Day key={`placeholder-day-${day}`} />;
              })}

              {days.map((d) => {
                const day = d + 1;

                return (
                  <Day
                    key={`day-${day}`}
                    isActive={
                      date?.getFullYear() === currentYear &&
                      date?.getMonth() === currentMonth &&
                      date?.getDate() === day
                    }
                    day={day}
                    onClick={() => {
                      onChangeDate(new Date(currentYear, currentMonth, day));
                      onClose();
                    }}
                  />
                );
              })}
            </div>
          </div>
        );
      }}
    >
      <Input value={moment(date).format("MMM DD, YYYY")} {...rest} />
    </Popover>
  );
}

interface DayProps {
  day?: number;
  onClick?: () => void;
  isActive?: boolean;
}

function Day({ day, onClick, isActive }: DayProps) {
  return (
    <button
      className="h-10 text-sm rounded-none block border-b border-r border-gray-200 hover:bg-gray-50 transition duration-100 flex items-center justify-center disabled:pointer-events-none"
      onClick={onClick}
      disabled={!day}
    >
      <span
        className={
          isActive
            ? "rounded-full bg-indigo-600 text-white h-7 w-7 flex items-center justify-center"
            : undefined
        }
      >
        {day ?? ""}
      </span>
    </button>
  );
}
