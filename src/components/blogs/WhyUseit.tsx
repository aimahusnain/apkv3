import { Alert, AlertTitle } from "@/src/components/ui/alert";


const WhyUseit = () => {
  return (
    <div>
       <div className="text-lg flex gap-5 items-center text-center justify-center flex-wrap flex-row w-full my-6">
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      High-quality Video in a Timely Manner
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Save HD Quality Content
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Simple To Operate
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Best For Professional Usage
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Excellent Performance
                    </AlertTitle>
                  </Alert>
                  <Alert className="border-none bg-alightdarkbg w-52 h-20 items-left py-8 flex flex-col justify-center">
                    <AlertTitle className="text-primary">
                      Suitable User Interface
                    </AlertTitle>
                  </Alert>
                </div>
    </div>
  )
}

export default WhyUseit