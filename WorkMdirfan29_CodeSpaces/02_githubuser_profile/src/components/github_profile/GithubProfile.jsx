import { useState } from "react";
import dt from "../../data/users.json";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

const GithubProfile = () => {
  const [data, setData] = useState(dt);
  // console.log(data)

  return (
    <div>
      {data.map((dt) => {
        return (
          <div key={dt.id}>
            <div>
              <img src={dt?.avatarUrl} alt={dt?.fullName} />
            </div>
            <div>
              <div id="left">
                <h1>{dt?.fullName}</h1>
                <h4>{dt?.username}</h4>
                <p>{dt?.bio}</p>
              </div>
              <div id="right">
                <div id="upper">
                  {dt?.socialMedia?.map((sm) => {
                    return (
                      <div>
                        {/* {sm.igUser === "xsh_shahab" ? (
                          <div>{sm.igUrl}</div>
                        ) : (
                          ""
                        )} */}
                        {console.log(sm)}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GithubProfile;
