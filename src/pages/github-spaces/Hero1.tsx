import css from './hero1.module.css'

function Hero1() {
  return (
    <div
      className={css.hero1}
      data-hpc=""
    >
      <h1 className="col-10-max color-fg-default mx-auto h1-mktg">
        Start coding <span className={css.span}>instantly</span>
        <br />
        with Codespaces
      </h1>
      <p className={css.p1}>
        Spin up fully configured dev environments in the cloud that start in
        seconds with up to 60 hours a month free.
      </p>

      <div className="mt-4 mt-md-6 mb-4 position-relative z-2 by-2 by-lg-0 bx-lg-2 d-flex flex-column flex-lg-row">
        <div className="by-2 by-lg-0 bx-lg-2 d-flex flex-column flex-lg-row">
          <a
            className={css.btn}
            data-analytics-event='{"category":"Hero ctas","action":"click to Get started for free","label":"ref_cta:Get started for free;ref_loc:Hero ctas;"}'
            href="https://github.com/codespaces"
          >
            Get started for free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="octicon arrow-symbol-mktg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              ></path>
              <path
                className="octicon-chevrow-stem"
                stroke="currentColor"
                d="M1.75 8H11"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
          <a
            className={css.btnOutlined}
            data-analytics-event='{"category":"Hero ctas","action":"click to Plans and pricing","label":"ref_cta:Plans and pricing;ref_loc:Hero ctas;"}'
            href="#pricing"
          >
            Plans and pricing
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="octicon arrow-symbol-mktg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              ></path>
              <path
                className="octicon-chevrow-stem"
                stroke="currentColor"
                d="M1.75 8H11"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
