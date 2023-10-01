
import { ProgressBar } from "react-bootstrap";
import "./progress.css";

const Ratings = () => {
  const arr = [
    {
      percentage: 100,
      label: "Cleanliness",
    },
    {
      percentage: 70,
      label: "Amenities",
    },
    {
      percentage: 90,
      label: "Location",
    },
    {
      percentage: 80,
      label: "Comfort",
    },
  ];

  const totalPercentage = arr.map((item) => item.percentage).reduce((a, b) => a + b, 0);
  const averageRating = totalPercentage / (arr.length * 10);

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-primary text-lg fw-bold">Reviews</h1>
        <h1 className="text-muted mb-4 mt-1">
          {averageRating.toFixed(1)}/5
        </h1>
        {arr.map((item, index) => (
          <div key={index} className="mb-4 progressBar">
            <div className="d-flex justify-content-between">
              <h5 className="text-muted">{item.label}</h5>
              <p className="text-muted">{(item.percentage / 10).toFixed(1)}/10</p>
            </div>
            <ProgressBar
              className="shadow"
              now={item.percentage}
              variant="white"
              label={`${item.percentage}%`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Ratings;
