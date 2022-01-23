import { useState, useEffect } from "react";
import ToursList from "../components/tours/ToursList";

function AllToursPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTours, setLoadedTours] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-tours-50729-default-rtdb.firebaseio.com/tours.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const tours = [];

        for (const key in data) {
          const tour = {
            id: key,
            ...data[key],
          };

          tours.push(tour);
        }

        setIsLoading(false);
        setLoadedTours(tours);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h1>All Tours</h1>
      <ToursList items={loadedTours} />
    </section>
  );
}

export default AllToursPage;
