```javascript
// pages/about.js

export async function getServerSideProps() {
  const myVariable = process.env.MY_VARIABLE;

  return {
    props: {
      myVariable,
    },
  };
}

export default function About({ myVariable }) {
  console.log(myVariable); //Now this should work
  return (
    <div>
      <h1>About Page</h1>
      <p>My variable: {myVariable}</p>
    </div>
  );
}
```