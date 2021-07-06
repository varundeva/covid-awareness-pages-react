import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-image">
        <img src="images/sneezing.png" alt="" />
      </div>
      <div>
        <div>
          <header className="titleWrap">
            <h2>
              About Corona Virus Disease
              <br />
              (COVID-19)
            </h2>
            <p>
              COVID-19 is a new illness that can affect your lungs and airways.
              It's caused by a virus called coronavirus.
            </p>
            <p>
              At the end of December 2019, Chinese public health authorities
              reported several cases of acute respiratory syndrome in Wuhan
              City, Hubei province, China. Chinese scientists soon identified a
              novel coronavirus as the main causative agent and It is a new
              strain of virus.
            </p>
          </header>
          <ul className="unstyled-list">
            <li>
              <p>Wash Your Hands For 20sec</p>
            </li>
            <li>
              <p>Cover Nose and Mouth When Sneezing</p>
            </li>
            <li>
              <p>Wear A Mask If Available</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
