import { useEffect } from "react";

const LinkedInBadge = () => {
  useEffect(() => {
    // Load LinkedIn badge script
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="LI-profile-badge"
      data-version="v1"
      data-size="medium"
      data-locale="en_US"
      data-type="horizontal"
      data-theme="light"
      data-vanity="your-linkedin-id"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://uk.linkedin.com/in/razeevasnx"
      >
        Rajeev Puri
      </a>
    </div>
  );
};

export default LinkedInBadge;
