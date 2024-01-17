import Feature from "@/src/components/blogs/features";
import MyFeature from "@/src/components/blogs/myFeature";


const AlreadyFeatures = () => {
  return (
    <div>
        <h1 id="features" className="text-6xl font-bold my-4 mt-16 text-center">
                Alight Motion Features
              </h1>

              <div className="flex xl:mx-24 gap-5 items-center justify-center flex-wrap flex-row w-full my-6">
                <Feature
                  title="Keyframe Animation"
                  description="Animate any property to bring every aspect of your creation to life."
                  image="keyframe_animation.gif"
                />
                <Feature
                  title="Camera Control"
                  description="Animate cameras to build dynamic scenes."
                  image="camera_control.gif"
                />
                <Feature
                  title="Video, Image, Text, and Graphics"
                  description="Combine multitude of layers in a variety of media types."
                  image="video_image.gif"
                />
                <Feature
                  title="Hierarchical Parenting"
                  description="Link layers to easily create sophisticated motion."
                  image="hierarchical_parenting.gif"
                />
                <Feature
                  title="Advanced Easing"
                  description="No need for fancy math: Alight Motion does the work for you."
                  image="advanced_easing.gif"
                />
                <Feature
                  title="150+ Visual Effects"
                  description="Versatile effects you can mix and match in infinite combinations."
                  image="150_effects.gif"
                />
                <Feature
                  title="Powerful Compositing"
                  description="Masking groups, blending modes, video transparency1, chroma and luma key. 1Apple platforms only"
                  image="composition.gif"
                />
                <Feature
                  title="Versatile Sharing"
                  description="Share video, GIF, image sequences, project packages, and reusable elements."
                  image="export.gif"
                />
                <Feature
                  title="Vector Illustration"
                  description="Illustrate and edit complex vector graphics right in the app."
                  image="vector_illustration.gif"
                />
              </div>
              <div className="flex xl:mx-24 gap-5 items-center justify-center flex-wrap flex-row w-full my-6">
                <MyFeature title="Several Photo Frames" />
                <MyFeature title="Import your own editing materials" />
                <MyFeature title="Download from the library" />
                <MyFeature title="Quickly save your favorite elements" />
                <MyFeature title="Produce Video in Different Aspect Ratio." />
                <MyFeature title="Blending Modes" />
                <MyFeature title="2000+ Built-in Fonts" />
                <MyFeature title="Significant Color" />
              </div>
    </div>
  )
}

export default AlreadyFeatures