import { Button, Typography } from "@mui/material";

const Pagination = ({ currentPage, setPage, totalPages }) => {
  if (totalPages === 0) return null;
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div style={{ display: "flex" }}>
      Pagination
      <Button variant="contained" color="primary" onClick={handlePrev}>
        Prev
      </Button>
      <Typography>{currentPage}</Typography>
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};
export default Pagination;
