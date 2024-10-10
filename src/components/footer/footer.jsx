import React from "react";
import logo from "../../resources/images/IIIT_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Weather from "./weather/weather";
const LatestNews = ({ news }) => {
    return (
      <div className="kilimanjaro_blog_area">
        <div className="kilimanjaro_thumb">
          <img className="img-fluid" src={news.imageUrl} alt="Blog Thumbnail" />
        </div>
        <a href="#">{news.title}</a>
        <p className="kilimanjaro_date">{news.date}</p>
        <p>{news.description}</p>
      </div>
    );
  };
  const latestNewsData = [
    {
      id: 1,
      title: "Your Blog Title Goes Here",
      date: "21 Jan 2018",
      description: "Lorem ipsum dolor sit amet, consectetur",
      imageUrl: "https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Another Blog Title",
      date: "15 Feb 2018",
      description: "Dolor sit amet, consectetur adipiscing elit",
      imageUrl: "https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg",
    },
    // Add more news items as needed
  ];
const Footer = () => {

  return (
    <footer className="kilimanjaro_area">
      {/* Top Footer Area Start */}
      <div className="foo_top_header_one section_padding_100_70">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="kilimanjaro_part">
                <img src={logo} className="logo_footer" />
                <div className="kilimanjaro_part m-top-15">
                  <h5>About</h5>
                  <ul className="kilimanjaro_links">
                    <li>
                      <a href="https://www.iiitdmj.ac.in/pbi.iiitdmj.ac.in">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        PBI
                      </a>
                    </li>
                    <li>
                      <a href="https://www.iiitdmj.ac.in/rti.php">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        IIIT Act
                      </a>
                    </li>
                    <li>
                      <a href="https://www.iiitdmj.ac.in/downloads/IIIT%20Act%2030_of_2014.pdf">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        RTI
                      </a>
                    </li>
                    <li>
                      <a href="https://www.iiitdmj.ac.in/downloads/The%20Gazette%20publication%20of%20Statutes%20of%20IIITDM%20Jabalpur.pdf">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Statuses
                      </a>
                    </li>
                    <li>
                      <a href="https://www.iiitdmj.ac.in/downloads/time%20table%20Detailed.pdf">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Bus Time Table
                      </a>
                    </li>
                    <li>
                      <a href="https://www.iiitdmj.ac.in/downloads/Organizational%20Chart.pdf">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Organizational Chart
                      </a>
                    </li>
                    <li>
                      <a href="https://www.iiitdmj.ac.in/downloads/RPN-2016(1).pdf">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Recruitment and Promotion Norms-2016
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="kilimanjaro_part m-top-15">
                <h5>Social Links</h5>
                <ul className="kilimanjaro_social_links">
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                  <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i> Pinterest</a></li>
                  <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i> YouTube</a></li>
                  <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a></li>
                </ul>
              </div> */}
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="kilimanjaro_part">
                <h5>Tags Widget</h5>
                <ul className="kilimanjaro_widget">
                  <li>
                    <a href="#">Classy</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Creative</a>
                  </li>
                  {/* <li><a href="#">One Page</a></li> */}
                  {/* <li><a href="#">Multipurpose</a></li>
                  <li><a href="#">Minimal</a></li>
                  <li><a href="#">Classic</a></li>
                  <li><a href="#">Medical</a></li> */}
                </ul>
              </div>
              <div className="kilimanjaro_part m-top-15">
                <h5>Important Links</h5>
                <ul className="kilimanjaro_links">
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      About Licenses
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Help & Support
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Community & Forum
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="kilimanjaro_part">
                <h5>Latest News</h5>
                {latestNewsData.map((news) => (
                  <LatestNews key={news.id} news={news} />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="text-center">Contact</h5>
              <div className=" text-white p-6 rounded-lg space-y-4 text-center flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-gray-400" />
                  <span className="text-gray-300">011-2659-7135</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-gray-400" />
                  <span className="text-gray-300">info@iitd.ac.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaGlobe className="text-gray-400" />
                  <span className="text-gray-300">www.iitd.ac.in</span>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-200">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
              {/* <div className="col-12 col-md-6 col-lg-3"> */}
  {/* Weather Component Replacement */}
  <Weather />
{/* </div> */}

            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Area Start */}
      <div className="bg-black text-gray-500 py-2 flex items-center">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-1">
      <p className="text-sm mb-0">
        © All Rights Reserved by{" "}
        <a
          href="#"
          className="text-gray-400 hover:text-gray-200 no-underline"
        >
          PDPM IIITDM Jabalpur
        </a>
      </p>
      <i className="fa fa-heart text-red-500 ml-1"></i>
    </div>
    <div className="flex items-center">
      <p className="text-xs mb-0">
        Maintained by{" "}
        <span className="text-gray-300">
          Computer Center, IIITDM Jabalpur
        </span>
      </p>
    </div>
  </div>
</div>


    </footer>
  );
};

export default Footer;
