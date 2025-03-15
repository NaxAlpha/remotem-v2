import './index.css';
import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // Must never change the schema ID
        id="MainVideo"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
        }}
      />
    </>
  );
};
