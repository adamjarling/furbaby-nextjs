function ParallaxBannerChildren({ children }) {
    return (
      <div
      className="absolute top-0 left-0 right-0 bottom-0 flex flex-wrap items-center justify-center"
      >
        {children}
      </div>
    );
  }
  
  ParallaxBannerChildren.propTypes = {};
  
  export default ParallaxBannerChildren;