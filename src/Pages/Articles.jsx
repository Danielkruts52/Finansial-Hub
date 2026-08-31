import { useEffect, useState } from "react";

import ArticleCard from "../Components/ArticleCard";

import "../css/Articles.css";


function Articles() {

// state

  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("Все");




  useEffect(() => {

    fetch("http://localhost:5000/api/articles")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Не удалось получить статьи");
        }

        return response.json();

      })

      .then((data) => {

        setArticles(data);

        setLoading(false);

      })

      .catch((error) => {

        console.error(error);

        setError("Произошла ошибка при загрузке статей");

        setLoading(false);

      });

  }, []);



  const categories = [
    "Все",
    ...new Set(
      articles
        .map((article) => article.category)
        .filter(Boolean)
    ),
  ];




  const filteredArticles = articles.filter((article) => {

    const matchesSearch =
      article.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      article.description
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      article.Annotation
        ?.toLowerCase()
        .includes(search.toLowerCase());


    const matchesCategory =
      selectedCategory === "Все" ||
      article.category === selectedCategory;


    return matchesSearch && matchesCategory;

  });




  if (loading) {

    return (
      <main className="articles-page">

        <div className="articles-status">
          Загрузка статей...
        </div>

      </main>
    );

  }




  if (error) {

    return (
      <main className="articles-page">

        <div className="articles-status error">
          {error}
        </div>

      </main>
    );

  }


// Page

  return (
    <main className="articles-page">


     {/* Hero */}

      <section className="articles-hero">

        <div className="articles-symbol">
          ✣
        </div>

        <h1>
          Статьи
        </h1>

        <p>
          Полезные материалы о финансах,
          инвестициях, экономике и бизнесе.
        </p>

      </section>


      

      <section className="articles-section">


        {/* Heading */}

        <div className="articles-heading">

          <div>

            <h2>
              Все статьи
            </h2>

            <p>
              Изучайте материалы и находите
              полезную информацию.
            </p>

          </div>

        </div>


        

        <div className="articles-filters">


          {/* SEARCH */}

          <div className="articles-search">

            <input
              type="text"
              placeholder="Поиск статьи..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

          </div>


          {/* CATEGORIES */}

          <div className="articles-category-filter">
  <select
    value={selectedCategory}
    onChange={(event) =>
      setSelectedCategory(event.target.value)
    }
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

        </div>


        {/* res count */}

        <div className="articles-result-count">

          Найдено статей: {filteredArticles.length}

        </div>


       {/* Articles grid */}

        {filteredArticles.length > 0 ? (

          <div className="articles-grid">

            {filteredArticles.map((article) => (

              <ArticleCard
                key={article.id}

                id={article.id}

                name={article.name}

                annotation={article.Annotation}

                category={article.category}

                img={article.img}
              />

            ))}

          </div>

        ) : (

          <div className="articles-empty">

            <div className="articles-empty-symbol">
              ✣
            </div>

            <h3>
              Ничего не найдено
            </h3>

            <p>
              Попробуйте изменить поисковый запрос
              или выбрать другую категорию.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}


export default Articles;