const Food = () => {
    const apple = "Apple";
    const banana = "Banana";
    const orange = "Orange";
    const strawberry = "Strawberry";
    return (
        <div style={{ height: "100px" }}>
            <ul
                className=""
                style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <li>
                    <a
                        style={{
                            cursor: "pointer",
                            textDecoration: "none",
                            color: "black",
                            paddingLeft: "20px",
                        }}
                        href="#"
                    >
                        {apple}
                    </a>
                </li>
                <li>
                    <a
                        style={{
                            cursor: "pointer",
                            textDecoration: "none",
                            color: "black",
                            paddingLeft: "20px",
                        }}
                        href="#"
                    >
                        {banana}
                    </a>
                </li>
                <li>
                    <a
                        style={{
                            cursor: "pointer",
                            textDecoration: "none",
                            color: "black",
                            paddingLeft: "20px",
                        }}
                        href="#"
                    >
                        {orange}
                    </a>
                </li>
                <li>
                    <a
                        style={{
                            cursor: "pointer",
                            textDecoration: "none",
                            color: "black",
                            paddingLeft: "20px",
                        }}
                        href="#"
                    >
                        {strawberry}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Food;
