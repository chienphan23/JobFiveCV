import { useGetIndustriesForHome } from "./HomeAPI/useGetIndustriesForHome";
import { IndustryCard } from "./HomeUI/IndustryCard";
import { LoadingPage } from "../../UI/LoadingPage";
const mainColor = "#7ed9e7";
export const IndustryHome = () => {
  const { listIndustries, isLoading } = useGetIndustriesForHome();

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const shuffledArray = shuffleArray([...originalArray]);

  if (isLoading) return <LoadingPage />;
  return (
    <>
      <section
        className="section-main mt-5"
        style={{ backgroundColor: `${mainColor}` }}
      >
        <div className="container">
          <div className="row row-gap">
            <div className="col-lg-12">
              <h2
                style={{
                  textAlign: "center",
                  color: "#2B3940",
                  fontWeight: "800",
                }}
              >
                Danh mục việc làm
              </h2>
            </div>
          </div>

          <div className="row mt-5 row-gap">
            {listIndustries?.data?.map((industry, index) => (
              <IndustryCard
                industry={industry}
                key={index}
                imageRandom={shuffledArray[index]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
