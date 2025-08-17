import Card from "./components/card/Card";
import Password from "./components/password/Password";
import PasswordWithTernary from "./components/password/PasswordWithTernary";
import Product from "./components/product/Product";
import User from "./components/user/User";

const App = () => {
  return (
    <main className="app">
      <User
        name="XshShahab"
        img="https://avatars.githubusercontent.com/u/153608835?v=4"
        age={21}
        gender="Male"
        about="Undergraduate Computer Science Student | Passionate About Web Development & AI | Proficient in Python, JavaScript, React Js | Building Innovative Solutions."
        address="Patna - Bihar, India"
      />
      <br /> <hr /> <br />
      <Product name={"Iphone 16"} price={"$300"} />
      <Product name={"MacBook Air"} price={"$1200"} />
      <br /> <hr /> <br />
      <Card>
        <h1>My Card Components</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, saepe
          dolores. Odit enim doloremque quae laboriosam explicabo ducimus quia
          aspernatur veniam!
        </p>
      </Card>
      <br /> <hr /> <br />
      <Password isValid={true} />
      <PasswordWithTernary isValid={false} />
    </main>
  );
};

export default App;
