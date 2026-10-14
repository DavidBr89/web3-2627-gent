import type { PropsWithChildren } from "react";
import helpersSum, { multiply } from "./utils/helpers";

// type ButtonProps = {
//   label: string;
// };

interface IButtonProps extends PropsWithChildren {
  label?: string;
  imageUrl: string;
  height?: number;
}

const Button = ({ imageUrl, children, height = 100 }: IButtonProps) => {
  const result = helpersSum(5, 3);
  const isActive = true;

  return (
    <div style={{ border: "black 1px solid" }}>
      <img
        style={{
          backgroundColor: "red",
          height: `${height}px`,
          padding: "12px",
        }}
        src={imageUrl}
        alt=""
      />
      <p>Het resultaat van de som is: {result}</p>
      <p>Het andere resultaat is: {multiply(5, 3)}</p>

      <button>{!isActive ? "Niet actief" : children}</button>
    </div>
  );
};

export default Button;
