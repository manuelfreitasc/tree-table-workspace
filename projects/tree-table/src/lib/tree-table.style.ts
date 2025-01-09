const dropdownContainerStyles = {
  position: 'relative',
  display: 'inline-block',
};

const buttonStyles = {
  backgroundColor: "#ffffff",
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "5px 20px",
  cursor: "pointer",
  fontSize: "16px",
  color: "#333",
  textAlign: "left",
};

// Estilos para o menu do dropdown
const dropdownMenuStyles = {
  position: "absolute",
  top: "102%",
  right: "0",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  border: "1px solid #ddd",
  borderRadius: "4px",
  zIndex: "100",
  width: "250px",
  padding: "10px 0",
  display: "flex",
  flexDirection: "column" // Escondido inicialmente
};

// Estilos para os itens do dropdown
const dropdownItemStyles = {
  padding: "10px 20px",
  color: "#333",
  textDecoration: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  textAlign: "left",
  borderTop: "1px solid #ddd",
};



export { dropdownContainerStyles, buttonStyles, dropdownMenuStyles, dropdownItemStyles };
