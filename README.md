# Smart-Bank

### A project to study react-styled-components on React [(based on an Alura course)](https://cursos.alura.com.br/course/react-styled-components)

> Styled-components lets you write actual CSS in your JavaScript. 

## My challenge:
- The initial project used classes and a style.css file. My challenge was to refactor all elements using styled components.

<img width="600" alt="Schermata 2022-09-07 alle 16 48 33" src="https://user-images.githubusercontent.com/104517812/188908663-7033ff2b-916d-4dad-9c19-c61a331c58ef.png">  |  <img width="200" alt="Schermata 2022-09-07 alle 16 48 33" src="https://user-images.githubusercontent.com/104517812/188909005-b0daaeef-7c40-4076-81e4-cc0f24605a94.png">


## What I've learned:
1. Instead of using classes and a css file to define the styles, you create a regular React component, which has your styles attached to it.
- To create a div:
```
const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`
```
- To create a section whith media query:
```
const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
      flex-direction: column;
    }
`
```
- To render:
```
export default () => {
  return (
    <Container>
      <Title>Hello, you!</Title>
      <Content>
        ...
      </Content>
    </Container>
  );
};
```
#

2. You can pass a function ("interpolations") to a styled component's template literal to adapt it based on its props. This button component has a primary state that changes its color.  When setting the primary prop to true, we are swapping out its background and text color.
```
const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${(props) => (props.primary ? "white" : firstColor)};
  background: ${(props) => (props.primary ? firstColor : "white")};
`
```

```
  <BtnHeader href="#">
    Help
  </BtnHeader>
  <BtnHeader primary href="#">
    Exit
  </BtnHeader>
```
![Schermata 2022-09-07 alle 15 57 37](https://user-images.githubusercontent.com/104517812/188896868-3b7f66bc-6391-47d5-a633-22da2402c2dc.png)

#

3. If you want to use a component, but change it for a single case, you can make a new component that inherits the styling of another, just wrap it in the styled() constructor. 

```
export const Icon = styled.img`
    height: 25px;
    width: 25px;
`
```
A new component based on Icon, but with margin-top:
```
const IconMargin = styled(Icon)`
  margin-top: 2px;
`
```

#

4. You can create a Global Style to define a reset css:
```
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: grey;
  }
`
```
- And render it on the App.js:
```
import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container />
    </>
  );
}
```

#

Final note: It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass

# Link
-> [Deploy](https://dev-caroline-react-styled-components.netlify.app/)
