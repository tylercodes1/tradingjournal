import React from "react";

export default function Table({ columns, data }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.accessor}
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => {
          // Use a unique id if available, otherwise fallback to rowIdx
          const rowKey = row.id ?? rowIdx;
          return (
            <tr key={rowKey}>
              {columns.map((col) => {
                const cellKey = `${rowKey}-${row[col.accessor]}-${Date.now().toString()}`;
                return (
                  <td
                    key={cellKey}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                    }}
                  >
                    {col.transformer
                      ? col.transformer(row[col.accessor], row)
                      : row[col.accessor]}
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
