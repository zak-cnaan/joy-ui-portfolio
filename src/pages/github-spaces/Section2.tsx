import css from './section2.module.css'

function Section2() {

   
  return (
    <div
      className={css.box}
      data-build-in-stagger="100"
    >
      <div
        className="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right build-in-animate"
      >
        <div className="pr-md-4">
          <h2 className={css.title}>
            The full power of your favorite editor
          </h2>
          <p className={css.text}>
            Use Visual Studio Code, Jupyter, or JetBrains with the editor,
            terminal, debugger, version control, settings sync, and all of your
            extensions. Work from any device in a browser, or hand off to your
            desktop. It’s that simple.
          </p>

          <div className={css.icons}>
            <div className={css.iconContainer}>
              <picture>
                <img
                  className={css.iconContainerImage}
                  width="112"
                  height="112"
                  loading="lazy"
                  decoding="async"
                  alt="Visual Studio Code"
                  src="https://github.githubassets.com/assets/editor-vscode-56ffbd1beabb.png"
                />
              </picture>
            </div>
            <div className={css.iconContainer}>
              <picture>
                <img
                  className={css.iconContainerImage}
                  width="112"
                  height="112"
                  loading="lazy"
                  decoding="async"
                  alt="Jet Brains"
                  src="https://github.githubassets.com/assets/editor-jet-brains-140db5aaf9b6.png"
                />
              </picture>
            </div>
            <div className={css.iconContainer}>
              <picture>
                <img
                  className={css.iconContainerImage}
                  width="112"
                  height="112"
                  loading="lazy"
                  decoding="async"
                  alt="Jupiter"
                  src="https://github.githubassets.com/assets/editor-jupiter-e366bdc4cfa8.png"
                />
              </picture>
            </div>
            <div className="border-left my-3 my-sm-0 mr-sm-4"></div>
            <div className="d-inline-block rounded-2 color-bg-subtle box-shadow-card-dark-mktg mr-4">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                className="octicon octicon-globe d-block m-3"
              >
                <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm3.241 10.5v-.001c-.1-2.708-.992-4.904-1.89-6.452a13.919 13.919 0 0 0-1.304-1.88L12 3.11l-.047.059c-.354.425-.828 1.06-1.304 1.88-.898 1.547-1.79 3.743-1.89 6.451Zm-12.728 0h4.745c.1-3.037 1.1-5.49 2.093-7.204.39-.672.78-1.233 1.119-1.673C6.11 3.329 2.746 7 2.513 11.5Zm18.974 0C21.254 7 17.89 3.329 13.53 2.623c.339.44.729 1.001 1.119 1.673.993 1.714 1.993 4.167 2.093 7.204ZM8.787 13c.182 2.478 1.02 4.5 1.862 5.953.382.661.818 1.29 1.304 1.88l.047.057.047-.059c.354-.425.828-1.06 1.304-1.88.842-1.451 1.679-3.471 1.862-5.951Zm-1.504 0H2.552a9.505 9.505 0 0 0 7.918 8.377 15.773 15.773 0 0 1-1.119-1.673C8.413 18.085 7.47 15.807 7.283 13Zm9.434 0c-.186 2.807-1.13 5.085-2.068 6.704-.39.672-.78 1.233-1.118 1.673A9.506 9.506 0 0 0 21.447 13Z"></path>
              </svg>
            </div>
            <div className="d-inline-block rounded-2 color-bg-subtle box-shadow-card-dark-mktg mr-4">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                className="octicon octicon-terminal d-block m-3"
              >
                <path d="M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"></path>
                <path d="M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Section2;
