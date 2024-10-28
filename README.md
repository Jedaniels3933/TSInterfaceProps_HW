## Hello to anyone reading this , listed below are the documents requesting this assignment as well as my github link if you wanna follow my progress. 

Lesson 2: Assignment | TypeScript Interfaces, Typed Props and Advanced Props
Remember to take your time and work through each question diligently! Test your code, make sure it works, and try to find ways to improve. Once you are happy and satisfied with your code, upload it to Github, then turn in your Github link at the bottom of the page!

Don't forget. Make sure this assignment is in it's own repository. Not mixed in with others!



TypeScript interfaces
Objective: The aim of this assignment is to reinforce the understanding of TypeScript interfaces in React components, emphasizing their role in defining prop types and ensuring type safety.

Problem Statement: Create a React component for displaying user information. Utilize TypeScript interfaces to define the prop types for the component.

Task 1: Define a TypeScript interface named UserInfoProps with properties for username, age, and email.

Task 2: Implement a React component named UserInfo that receives props conforming to the UserInfoProps interface.

Task 3: Use the UserInfo component in your main application, passing props with appropriate data and display the data.

Expected Outcomes:

A well-defined TypeScript interface for user information props.
A functional UserInfo component that enforces type safety.
Successful integration of the UserInfo component in the main application with realistic data.
Utilizing Children Props in React
Objective: The aim of this assignment is to explore and apply the concept of children props in React components for versatile composition.

Problem Statement: Create a reusable React component for displaying a Card with dynamic content. Implement the card component using children props to allow flexible content placement.

Task 1: Define a React component named Card that accepts children props for dynamic content placement.

interface CardProps {
    children: //complete
}
const Card = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
Task 2: Implement the Card component in your main application, placing various content elements inside the card.


const App = () => {
  return (
    <div>
    </div>
  );
};
Task 3: Experiment with different types of content within the Card component to understand the flexibility of children props.

Expected Outcomes:

A reusable Card component capable of accommodating diverse content.
Successful integration of the Card component in the main application with various content elements.



Thank you for either reading and/or grading this assignment. 


https://github.com/Jedaniels3933/TSInterfaceProps_HW/blob/main/README.md