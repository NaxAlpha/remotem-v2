import {
  AbsoluteFill,
} from "remotion";
import { z } from "zod";

export const myCompSchema = z.object({
  titleText: z.string(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
  titleText: propOne,
}) => {
  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill className="bg-white">
      <div className='text-4xl font-bold text-black text-center'>
        {propOne}
      </div>
    </AbsoluteFill>
  );
};
