import reactImage from "../assets/react-core-concepts.png";
function Header() {
    const theDescription = reactDescriptions[genRandomInt(2)];
    
      return (
        <header>
          <img src={reactImage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {theDescription} React concepts you will need for almost any app you are going to build!
          </p>
        </header>
      );
}