import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
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
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList items={loadedTours} />
    </section>
  );
}

export default AllMeetupsPage;
