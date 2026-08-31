import { useEffect, useMemo, useState } from "react";
import GuideCard from "../Components/GuideCard";
import "../css/Guide.css";

function Guide() {
  const [guide, setGuide] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("Все");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/guide")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не удалось получить справочник");
        }

        return response.json();
      })
      .then((data) => {
        setGuide(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);

        setError(
          "Произошла ошибка при загрузке справочника"
        );

        setLoading(false);
      });
  }, []);


// Категории

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        guide
          .map((item) => item.category)
          .filter(Boolean)
      ),
    ];

    return ["Все", ...uniqueCategories];
  }, [guide]);


// Фильтрация

  const filteredGuide = useMemo(() => {
    return guide.filter((item) => {

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        item.name
          .toLowerCase()
          .includes(searchText) ||
        item.description
          .toLowerCase()
          .includes(searchText);


      const matchesCategory =
        selectedCategory === "Все" ||
        item.category === selectedCategory;


      return matchesSearch && matchesCategory;
    });
  }, [guide, search, selectedCategory]);


// Reset

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("Все");
  };


// Loading

  if (loading) {
    return (
      <p className="guide-status">
        Загрузка справочника...
      </p>
    );
  }

// Error

  if (error) {
    return (
      <p className="guide-status">
        {error}
      </p>
    );
  }


  return (
    <main className="guide-page">


{/* Hero */}

      <section className="guide-hero">

        <div className="guide-symbol">
          ✣
        </div>

        <h1>
          Справочник
        </h1>

        <p>
          Разбирайтесь в основных понятиях экономики,
          финансов и инвестиций.
        </p>

      </section>


      {/* Guide section */}

      <section className="guide-section">

        <div className="section-heading">

          <div>

            <h2>
              Финансовые термины
            </h2>

            <p>
              Основные понятия финансового мира
              собраны в одном месте.
            </p>

          </div>

          <div className="guide-count">
            Найдено: {filteredGuide.length}
          </div>

        </div>


        {/* Filters */}

        <div className="guide-filters">

          <div className="search-wrapper">

            <input
              type="text"
              placeholder="Поиск термина..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              className="guide-search"
            />

          </div>


          <div className="category-wrapper">

            <select
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
              className="guide-select"
            >

              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}

            </select>

          </div>


          <button
            type="button"
            className="reset-button"
            onClick={resetFilters}
          >
            Сбросить
          </button>

        </div>


        {/* Cards */}

        {filteredGuide.length > 0 ? (

          <div className="guide-grid">

            {filteredGuide.map((item) => (

              <GuideCard
                key={item.id}
                name={item.name}
                description={item.description}
                category={item.category}
              />

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div className="no-results-symbol">
              ✣
            </div>

            <h3>
              Ничего не найдено
            </h3>

            <p>
              Попробуйте изменить поисковый запрос
              или выбрать другую категорию.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="reset-button"
            >
              Сбросить фильтры
            </button>

          </div>

        )}

      </section>

    </main>
  );
}

export default Guide;