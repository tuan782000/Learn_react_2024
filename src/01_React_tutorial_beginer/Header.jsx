const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <ul className="" style={{ listStyle: "none", display:"flex", justifyContent: "center" }}>
          <li><a style={{ cursor: "pointer", textDecoration: "none", color: "black", paddingLeft:"20px" }} href="#">Home</a></li>
          <li><a style={{ cursor: "pointer", textDecoration: "none", color: "black", paddingLeft:"20px" }} href="#">About</a></li>
          <li><a style={{ cursor: "pointer", textDecoration: "none", color: "black", paddingLeft:"20px" }} href="#">Service</a></li>
          <li><a style={{ cursor: "pointer", textDecoration: "none", color: "black", paddingLeft:"20px" }} href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header