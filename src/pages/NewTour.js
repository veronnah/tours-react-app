import { useNavigate } from "react-router-dom";
import NewTourForm from "../components/tours/NewTourForm";

function NewTourPage() {
  const navigate = useNavigate();

  function addTourHandler(formData) {
    fetch("https://react-tours-50729-default-rtdb.firebaseio.com/tours.json", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h2>Add new Tour</h2>
      <NewTourForm onAddTour={addTourHandler} />
    </section>
  );
}

export default NewTourPage;
