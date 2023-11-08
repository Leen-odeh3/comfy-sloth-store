const About = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        padding: "70px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "47px",
          display: "flex",
          alignItems: "center",
          color: "#394E6A",
          marginBottom: "15px",
          justifyContent: "center",
          marginTop: "40px",
         marginLeft:"30%"
        }}
      >
        We love
        <div
          style={{
            backgroundColor: "#057AFF",
            fontSize: "32px",
            padding: "15px 40px",
            width: "fit-content",
            color: "#DBE1FF",
            borderRadius: "10px",
            marginLeft: "16px",
          }}
        >
          Comfy
        </div>
      </h1>
      <p style={{ fontSize: "27px", color: "#394E6A", paddingTop: "20px" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </div>
  );
};

export default About;
