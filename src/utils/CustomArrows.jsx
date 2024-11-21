export const CustomPrevArrow = ({ onClick }) => (
    <button
      className="custom-arrow prev-arrow"
      onClick={onClick}
      style={{
        background: "white",
        border: "none",
        position: "absolute",
        left: "-30px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <i className="bi bi-chevron-left" style={{ fontSize: "2rem", color: "black" }}></i>
    </button>
  );
  
 export const CustomNextArrow = ({ onClick }) => (
    <button
      className="custom-arrow next-arrow"
      onClick={onClick}
      style={{
        background: "white",
        border: "none",
        position: "absolute",
        right: "-30px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <i className="bi bi-chevron-right" style={{ fontSize: "2rem", color: "black", backgroundColor:'transparent' }}></i>
    </button>
  );
  