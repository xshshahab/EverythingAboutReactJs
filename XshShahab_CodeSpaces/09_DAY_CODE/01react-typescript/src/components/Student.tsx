// const Student = (props: { name: string; age: number; isStudent: boolean }) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.isStudent}</h1>
//     </div>
//   );
// };

// export default Student;

// With Destructuring
const Student = ({
  name,
  age,
  isStudent,
}: {
  name: string;
  age: number;
  isStudent: boolean;
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </div>
  );
};

export default Student;
