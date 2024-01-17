import { Alert, AlertDescription, AlertTitle } from "@/src/components/ui/alert";
import { IoStarSharp } from "react-icons/io5";

const AlightMotionSpecifications = () => {
  return (
    <div>
      <h1
        id="specifications"
        className="text-5xl font-bold my-4 mt-16 text-center"
      >
        Alight Motion Specifications
      </h1>
      <div className="flex gap-5 items-center justify-center flex-wrap flex-row w-full my-6">
        <Alert className="w-fit h-24 hover:bg-primary/30 transition-all flex gap-3 flex-row items-left justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">Latest Version</AlertTitle>
            <AlertDescription>v5.0.200.1000653</AlertDescription>
          </div>
        </Alert>

        <Alert className="w-fit h-24 hover:bg-primary/30 transition-all flex gap-3 flex-row items-left justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">Size</AlertTitle>
            <AlertDescription>81.58 MB</AlertDescription>
          </div>
        </Alert>

        <Alert className="w-fit h-24 hover:bg-primary/30 transition-all flex gap-3 flex-row items-left justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">Released On</AlertTitle>
            <AlertDescription>Aug 5, 2018</AlertDescription>
          </div>
        </Alert>

        <Alert className="w-fit h-24 hover:bg-primary/30 transition-all flex gap-3 flex-row items-left justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">Last Updated On</AlertTitle>
            <AlertDescription>December 15, 2023</AlertDescription>
          </div>
        </Alert>
        <Alert className="w-fit h-24 hover:bg-primary/30 transition-all flex gap-3 flex-row items-left justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">Supported For</AlertTitle>
            <AlertDescription>Only Android 6.0 and up</AlertDescription>
          </div>
        </Alert>

        <Alert className="w-fit h-24 hover:bg-primary/30 transition-all flex gap-3 flex-row items-left justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>

          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">File Type</AlertTitle>
            <AlertDescription>APK</AlertDescription>
          </div>
        </Alert>

        <Alert className="w-fit h-24 hover:bg-primary/30 transition-all flex gap-3 flex-row items-left justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>

          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">Price</AlertTitle>
            <AlertDescription>100% Free</AlertDescription>
          </div>
        </Alert>
        <Alert className="w-fit h-24 items-left hover:bg-primary/30 transition-all flex gap-3 flex-row justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>

          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">Category</AlertTitle>
            <AlertDescription>Video Editing</AlertDescription>
          </div>
        </Alert>

        <Alert className=" w-48 h-24 items-left hover:bg-primary/30 transition-all flex gap-3 flex-row justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">MOD Info</AlertTitle>
            <AlertDescription>
              Single Package APK (No SAI Needed)
            </AlertDescription>
          </div>
        </Alert>
        <Alert className="w-52 h-24 items-left hover:bg-primary/30 transition-all flex gap-3 flex-row justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>

          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">
              Developer/Publisher:
            </AlertTitle>
            <AlertDescription>
              Alight Motion/Alight Creative Inc
            </AlertDescription>
          </div>
        </Alert>
        <Alert className="w-fit h-24 items-left hover:bg-primary/30 transition-all flex gap-3 flex-row justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>

          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">Subscription</AlertTitle>
            <AlertDescription>
              Premium/Paid Subscription Unlocked
            </AlertDescription>
          </div>
        </Alert>
        <Alert className="w-fit h-24 items-left hover:bg-primary/30 transition-all flex gap-3 flex-row justify-center">
          <div className="flex-col w-fit h-full flex items-center justify-center">
            <IoStarSharp className="h-4 w-4" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <AlertTitle className="text-primary">
              Google Play ID/Package Name
            </AlertTitle>
            <AlertDescription>com.alightcreative.motion</AlertDescription>
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default AlightMotionSpecifications;
