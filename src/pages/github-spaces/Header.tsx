function Header(){
    return(
        <div className="sub-nav-mktg js-toggler-container z-3 position-relative sub-nav-mktg-shadow">
        <div className="sub-nav-mktg-wrapper d-flex flex-items-center py-3 px-3 px-md-4 px-lg-5">
          <button
            type="button"
            className="btn-octicon sub-nav-mktg-toggle d-lg-none p-1 flex-order-1 float-right js-toggler-target mr-n1"
            aria-label="Toggle page navigation"
          >
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              width="24"
              data-view-component="true"
              className="octicon octicon-chevron-down on-hidden"
            >
              <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path>
            </svg>
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              width="24"
              data-view-component="true"
              className="octicon octicon-x on-visible"
            >
              <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
            </svg>
          </button>

          <a
            className="sub-nav-title-link Link--primary no-underline f3-mktg d-inline-block text-bold mr-4"
            data-analytics-event='{"category":"Featuressubnav","action":"click title to go to Features","label":"ref_cta:Features;"}'
            href="/features/"
          >
            Features
          </a>

          <div className="sub-nav-mktg-links flex-auto f4-mktg d-flex flex-column flex-lg-row with-title gap-4">
            <a
              className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
              data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Actions","label":"ref_cta:Actions;"}'
              href="/features/actions"
            >
              Actions
            </a>
            <a
              className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
              data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Packages","label":"ref_cta:Packages;"}'
              href="/features/packages"
            >
              Packages
            </a>
            <a
              className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
              data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Security","label":"ref_cta:Security;"}'
              href="/features/security"
            >
              Security
            </a>
            <a
              className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 active"
              data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Codespaces","label":"ref_cta:Codespaces;"}'
              href="/features/codespaces"
            >
              Codespaces
            </a>
            <a
              className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
              data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Copilot","label":"ref_cta:Copilot;"}'
              href="/features/copilot"
            >
              Copilot
            </a>
            <a
              className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
              data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Code review","label":"ref_cta:Code review;"}'
              href="/features/code-review"
            >
              Code review
            </a>
            <a
              className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
              data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Search","label":"ref_cta:Search;"}'
              href="/features/code-search"
            >
              Search
            </a>
            <a
              className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
              data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Issues","label":"ref_cta:Issues;"}'
              href="/features/issues"
            >
              Issues
            </a>
            <a
              className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2"
              data-analytics-event='{"category":"Featuressubnav","action":"click item to go to Discussions","label":"ref_cta:Discussions;"}'
              href="/features/discussions"
            >
              Discussions
            </a>
          </div>
        </div>
      </div>

    )
}

export default Header