import React, {
  DetailedHTMLProps,
  ReactNode,
  TableHTMLAttributes,
} from "react";
import classNames from "./lib/classNames";

export type TableRow = Record<string, any>;

export interface TableColumn {
  renderItem?: (row: TableRow) => ReactNode;
  dataIndex?: string;
  heading?: string;
}

export interface CustomTableProps {
  columns: TableColumn[];
  rows: TableRow[];
}

export interface TableProps
  extends DetailedHTMLProps<
      TableHTMLAttributes<HTMLTableElement>,
      HTMLTableElement
    >,
    CustomTableProps {}

export function getTableStyles() {
  const tableStyles = {
    base: "min-w-full divide-y divide-gray-300/50 shadow rounded-lg ring-1 ring-black ring-opacity-5",
  };

  return classNames(tableStyles.base);
}

export default function Table({
  className,
  columns,
  rows,
  ...rest
}: TableProps) {
  return (
    <table {...rest} className={classNames(getTableStyles(), className)}>
      <thead>
        <tr>
          {columns.map((column, columnIndex) => {
            const isLast = columnIndex === columns.length - 1;
            const isFirst = !columnIndex;

            return (
              <th
                scope="col"
                className={classNames(
                  "py-3.5 pl-6 pr-3 text-left text-sm font-medium text-gray-900 bg-gray-50",
                  isFirst && "rounded-tl-lg",
                  isLast && "rounded-tr-lg"
                )}
              >
                {column.heading}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {rows.map((row, rowIndex) => {
          const isRowLast = rowIndex === rows.length - 1;

          return (
            <tr>
              {columns.map((column, columnIndex) => {
                const isColumnLast = columnIndex === columns.length - 1;
                const isColumnFirst = !columnIndex;

                const value =
                  column.dataIndex && (row[column.dataIndex] as ReactNode);

                return (
                  <td
                    className={classNames(
                      "py-4 pl-6 pr-3 text-sm text-gray-900 bg-white",
                      isRowLast && isColumnFirst && "rounded-bl-lg",
                      isRowLast && isColumnLast && "rounded-br-lg"
                    )}
                  >
                    {column.renderItem ? column.renderItem(row) : value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
