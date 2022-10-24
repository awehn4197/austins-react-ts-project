import { Form } from './components/form';
import './App.css';
// import austinPicture from './assets/austin_volcano.jpg';
// import austinPicture from './assets/bootstrap-themes.png';


function App() {
  return (
    <main>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>

          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://abw-general.s3.us-west-1.amazonaws.com/austin_volcano.JPG" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>

        </div>

        <div class="container marketing">
          <div class="row">
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

              <h2 class="fw-normal">Heading</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

              <h2 class="fw-normal">Heading</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
              <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

              <h2 class="fw-normal">Heading</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
          </div>
        </div>
        <div class="col-lg-8 mx-auto p-4 py-md-5">
          <div className="row g-5">
            <div className="col-md-6">
              <h2>Starter projects</h2>
              <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
              <ul className="icon-list ps-0">
                <li className="d-flex align-items-start mb-1"><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" target="_blank">Bootstrap npm starter</a></li>
                <li className="text-muted d-flex align-items-start mb-1">Bootstrap Parcel starter (coming soon!)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2>Guides</h2>
              <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
              <ul className="icon-list ps-0">
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/introduction/">Bootstrap quick start guide</a></li>
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/webpack/">Bootstrap Webpack guide</a></li>
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/parcel/">Bootstrap Parcel guide</a></li>
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/vite/">Bootstrap Vite guide</a></li>
                <li className="d-flex align-items-start mb-1"><a href="../getting-started/contribute/">Contributing to Bootstrap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;
