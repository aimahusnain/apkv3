import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="flex xl:mx-24 gap-5 items-center justify-center flex-wrap flex-col w-full my-6">
      <h1 id="faqs" className="text-6xl font-bold my-4 mt-16 text-center">
        FAQ&apos;s
      </h1>
      <div className="">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="sm:w-96 w-full text-left">
              Does Alight Motion Support XML Files?
            </AccordionTrigger>
            <AccordionContent className="sm:w-96 w-full text-left">
              Yes, Alight Motion does offer support to the XML files. With the
              help of this feature you become able to import the files from any
              source or folder. Thus it makes your own job easier and you get to
              experience better results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="sm:w-96 w-full text-left">
              How to remove Watermarks in the Alight Motion App?
            </AccordionTrigger>
            <AccordionContent className="sm:w-96 w-full text-left">
              There are two methods to remove the watermarks from your final
              products in Alight Motion Mod. Either you buy the premium version
              and automatically get rid of the watermarks. On the other hand you
              can download the mod version of Alight Motion which will help you
              get rid of all the watermarks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="sm:w-96 w-full text-left">
              How to install Alight Motion Pro on PC?
            </AccordionTrigger>
            <AccordionContent className="sm:w-96 w-full text-left">
              Alight Motion Pro can also be downloaded on a PC because it&apos;s
              obvious users want to create graphics on a big screen of their
              laptop or PC. So for this purpose you need to install an Android
              emulator like BlueStacks on your PC. Afterwards you can install
              the Alight Motion Pro app on your PC to get it running smoothly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="sm:w-96 w-full text-left">
              How To Use an Alight Motion App on Your Phone?
            </AccordionTrigger>
            <AccordionContent className="sm:w-96 w-full text-left">
              How To Use an Alight Motion App on Your Phone?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="sm:w-96 w-full text-left">
              Why Use Alight Motion For Android?
            </AccordionTrigger>
            <AccordionContent className="sm:w-96 w-full text-left">
              Powerful Editing Tool High-Resolution Video Publishing
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* <Accordion variant="bordered" className="sm:w-96 w-full">
                  <AccordionItem
                    key="1"
                    aria-label="Does Alight Motion Support XML Files?"
                    title="Does Alight Motion Support XML Files?"
                  >
                    Yes, Alight Motion does offer support to the XML files. With
                    the help of this feature you become able to import the files
                    from any source or folder. Thus it makes your own job easier
                    and you get to experience better results.
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="How to remove Watermarks in the Alight Motion App?"
                    title="How to remove Watermarks in the Alight Motion App?"
                  >
                    There are two methods to remove the watermarks from your
                    final products in Alight Motion Mod. Either you buy the
                    premium version and automatically get rid of the watermarks.
                    On the other hand you can download the mod version of Alight
                    Motion which will help you get rid of all the watermarks.
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="How to install Alight Motion Pro on PC?"
                    title="How to install Alight Motion Pro on PC?"
                  >
                    {" "}
                    Alight Motion Pro can also be downloaded on a PC because
                    it&apos;s obvious users want to create graphics on a big
                    screen of their laptop or PC. So for this purpose you need
                    to install an Android emulator like BlueStacks on your PC.
                    Afterwards you can install the Alight Motion Pro app on your
                    PC to get it running smoothly.
                  </AccordionItem>
                  <AccordionItem
                    key="4"
                    aria-label="How To Use an Alight Motion App on Your Phone?"
                    title="How To Use an Alight Motion App on Your Phone?"
                  >
                    {" "}
                    How To Use an Alight Motion App on Your Phone?
                  </AccordionItem>
                  <AccordionItem
                    key="5"
                    aria-label="Why Use Alight Motion For Android?"
                    title="Why Use Alight Motion For Android?"
                  >
                    {" "}
                    Powerful Editing Tool, High-Resolution Video Publishing
                  </AccordionItem>
                </Accordion> */}
      </div>
    </div>
  );
};

export default FAQ;
