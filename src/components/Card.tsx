interface CardProps {        
    children: React.ReactNode
}
//Task 1: Define a React component named Card that accepts children props for dynamic content placement.
const Card: React.FC<CardProps> = ({ children }) => {
    return <div>{children}</div>;
  };

export default Card;