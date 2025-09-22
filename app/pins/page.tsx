import Script from "next/script";

export default function Page() {
  return (
    <div>
      <Script src="https://assets.pinterest.com/js/pinit.js" />
      <a
        href="https://www.pinterest.com/razeevpuree/"
        data-pin-do="embedUser"
        aria-label="Visit my Pinterest profile"
      >
        Pinterest Profile
      </a>
    </div>
  );
}
