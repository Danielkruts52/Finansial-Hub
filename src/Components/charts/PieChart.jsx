import { useState } from "react";

import ChartCard from "./ChartCard";


const PIE_COLORS = [
  "#756db1",
  "#9289c7",
  "#aaa3d9",
  "#c0bae8",
  "#635a9d",
  "#51487f",
  "#8179b8",
  "#a49dd0",
];


function PieChart() {

  const [data, setData] = useState([
    {
      name: "Продажи",
      value: 450,
    },
    {
      name: "Маркетинг",
      value: 180,
    },
  ]);


  const formatNumber = (number) => {
    return new Intl.NumberFormat("ru-RU").format(number);
  };


  const updateItem = (index, field, value) => {

    setData((currentData) =>
      currentData.map((item, itemIndex) => {

        if (itemIndex !== index) {
          return item;
        }

        return {
          ...item,
          [field]:
            field === "value"
              ? Math.max(0, Number(value) || 0)
              : value,
        };

      })
    );

  };


  const addItem = () => {

    if (data.length >= 8) {

      alert("Максимум 8 значений.");

      return;
    }


    setData([
      ...data,
      {
        name: "",
        value: 0,
      },
    ]);

  };


  const removeItem = (index) => {

    if (data.length <= 1) {

      alert(
        "Должно остаться хотя бы одно значение."
      );

      return;
    }


    setData(
      data.filter(
        (_, itemIndex) => itemIndex !== index
      )
    );

  };


  const clearItems = () => {

    setData([
      {
        name: "",
        value: 0,
      },
    ]);

  };


  const total = data.reduce(
    (sum, item) =>
      sum + Math.max(0, Number(item.value) || 0),
    0
  );


  let currentAngle = 0;

  const gradients = data.map((item, index) => {

    const value =
      Math.max(
        0,
        Number(item.value) || 0
      );


    const percentage =
      total > 0
        ? (value / total) * 100
        : 0;


    const angle =
      percentage * 3.6;


    const start =
      currentAngle;


    const end =
      currentAngle + angle;


    currentAngle = end;


    return {
      ...item,
      value,
      percentage,
      start,
      end,
      color:
        PIE_COLORS[index],
    };

  });


  const pieBackground =
    total > 0
      ? `conic-gradient(
          ${gradients
            .map(
              (item) =>
                `${item.color} ${item.start}deg ${item.end}deg`
            )
            .join(",")}
        )`
      : "#aaa6c5";


  return (
    <ChartCard
      title="Круговая диаграмма"
      description="Добавьте от 1 до 8 значений. Диаграмма автоматически рассчитает процент каждого значения от общей суммы."
      light
    >

      <div className="chart-layout">

        {/* INPUTS */}

        <div className="inputs">

          {data.map((item, index) => (

            <div
              className="input-row"
              key={index}
            >

              <input
                type="text"
                placeholder="Название"
                value={item.name}
                onChange={(e) =>
                  updateItem(
                    index,
                    "name",
                    e.target.value
                  )
                }
              />


              <input
                type="number"
                placeholder="Значение"
                min="0"
                value={item.value}
                onChange={(e) =>
                  updateItem(
                    index,
                    "value",
                    e.target.value
                  )
                }
              />


              <button
                className="remove-button"
                onClick={() =>
                  removeItem(index)
                }
              >
                ×
              </button>

            </div>

          ))}


          <div className="chart-buttons">

            <button
              className="small-button"
              onClick={addItem}
            >
              + Добавить
            </button>


            <button
              className="small-button"
              onClick={clearItems}
            >
              Очистить
            </button>

          </div>

        </div>


        {/* PIE */}

        <div className="pie-area">

          <div
            className="pie-chart"
            style={{
              background:
                pieBackground,
            }}
          >

            <div className="pie-center">

              <div className="pie-total-label">
                Всего
              </div>

              <div className="pie-total">
                {formatNumber(total)}
              </div>

            </div>

          </div>


          {/* LEGEND */}

          <div className="legend">

            {total === 0 ? (

              <div className="empty-chart-message">
                Введите значения
              </div>

            ) : (

              gradients.map((item, index) => (

                <div
                  className="legend-item"
                  key={index}
                >

                  <div
                    className="legend-dot"
                    style={{
                      background:
                        item.color,
                    }}
                  />

                  <div>
                    {item.name.trim() ||
                      "Без названия"}
                  </div>

                  <div className="legend-value">
                    {item.percentage.toFixed(1)}%
                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </ChartCard>
  );
}


export default PieChart;