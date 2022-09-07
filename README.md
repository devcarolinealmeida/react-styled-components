# Smart-Bank

### A project to study react-styled-components on React [(based on an Alura course)](https://cursos.alura.com.br/course/react-styled-components)

> Styled-components lets you write actual CSS in your JavaScript. This means you can use all the features of CSS, including media queries, all pseudo-selectors, etc.

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



