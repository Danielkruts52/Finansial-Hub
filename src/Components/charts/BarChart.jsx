import { useState } from "react";

import ChartCard from "./ChartCard";


function BarChart() {

  const [data, setData] = useState([
    {
      name: "Январь",
      value: 70,
    },
    {
      name: "Февраль",
      value: 45,
    },
    {
      name: "Март",
      value: 90,
    },
    {
      name: "Апрель",
      value: 60,
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

    if (data.length >= 4) {

      alert("Максимум 4 значения.");

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
        (_, itemIndex) =>
          itemIndex !== index
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


  const maxValue = Math.max(
    ...data.map(
      (item) =>
        Math.max(
          0,
          Number(item.value) || 0
        )
    ),
    1
  );


  return (
    <ChartCard
      title="Вертикальная диаграмма"
      description="Добавьте от 1 до 4 значений. Высота каждого столбца зависит от указанного значения."
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


        {/* BAR CHART */}

        <div>

          <div className="bar-area">

            {data.map((item, index) => {

              const value =
                Math.max(
                  0,
                  Number(item.value) || 0
                );


              const height =
                (value / maxValue) * 235;


              return (
                <div
                  className="bar-item"
                  key={index}
                >

                  <div className="bar-value">
                    {formatNumber(value)}
                  </div>


                  <div
                    className="bar"
                    style={{
                      height:
                        `${Math.max(
                          height,
                          3
                        )}px`,
                    }}
                  />


                  <div className="bar-label">
                    {item.name.trim() ||
                      "Без названия"}
                  </div>

                </div>
              );

            })}

          </div>


          {/* TOTAL */}

          <div className="total-box">

            <div className="total-title">
              Общая сумма
            </div>

            <div className="total-number">
              {formatNumber(total)}
            </div>

          </div>

        </div>

      </div>

    </ChartCard>
  );
}


export default BarChart;