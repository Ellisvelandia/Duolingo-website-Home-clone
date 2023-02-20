import React from "react";

const Footer = () => {
  return (
    <div className="pt-20 text-center text-[#fff] footerStar min-h-[100vh]">
      <div className="max-w-6xl min-h-[70px]" style={{ margin: "0 auto" }}>
        <div className="inline-block mb-12" style={{ padding: "0 40px" }}>
          <h1
            className="lg:inline-block block lg:mb-12 lg:mr-12 font-bold text-3xl leading-10"
            style={{ margin: "0 0 50px" }}
          >
            Learn a language with Duolingo.
          </h1>
          <a
            href="https://en.duolingo.com/register"
            target="_blank"
            className="cursor-pointer min-w-[150px] align-super lg:ml-12 rounded-xl border-solid h-14 items-center md:tracking-widest uppercase whitespace-nowrap justify-center inline-flex relative touch-manipulation border-[#58A700] bg-[#58CC02] active:scale-95 hover:bg-[#61E002]"
            style={{
              padding: "0 16px",
              borderBottom: "4px",
              transform: "translateZ(0)",
              borderWidth: "2px 2px 6px",
              borderStyle: "solid",
              borderColor: "#58a700",
            }}
          >
            Get started
          </a>
        </div>
        <div className="text-white text-left text-sm block">
          <div
            className="flex flex-row flex-wrap justify-between m-auto max-w-6xl"
            style={{ padding: "24px 40px" }}
          >
            <div className="w-[170px]" style={{ padding: "0 24px 48px 0" }}>
              <div className="text-xl font-bold mb-3 transform-none">
                About us
              </div>
              <ul className="m-0 p-0 list-none">
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/courses"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Courses
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/info"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Mission
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/approach"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Approach
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/efficacy"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Efficacy
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://careers.duolingo.com/about"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Team
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://research.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Research
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://careers.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Careers
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://design.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Brand guidelines
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://store.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Store
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://press.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Press
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://investors.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Investors
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/contact"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-[170px]" style={{ padding: "0 24px 48px 0" }}>
              <div className="text-xl font-bold mb-3 transform-none">
                Products
              </div>
              <ul className="m-0 p-0 list-none">
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://schools.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo for Schools
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://englishtest.duolingo.com/en"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo English Test
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://www.duolingo.com/abc"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo ABC
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://www.duolingo.com/math"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo Math
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://podcast.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Podcast
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/stories"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Stories
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/business"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo for Business
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/super"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Super Duolingo
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/gift"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Gift Super Duolingo
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-[170px]" style={{ padding: "0 24px 48px 0" }}>
              <div className="text-xl font-bold mb-3 transform-none">Apps</div>
              <ul className="m-0 p-0 list-none">
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://play.google.com/store/apps/details?hl=en&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsite_map"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo for Android
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://schools.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo for iOS
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://apps.apple.com/app/duolingo-abc-learn-to-read/id1440502568?pt=1374442&ct=Site%20map&mt=8"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo ABC (iOS)
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-[170px]" style={{ padding: "0 24px 48px 0" }}>
              <div className="text-xl font-bold mb-3 transform-none">
                Help and support
              </div>
              <ul className="m-0 p-0 list-none">
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://support.duolingo.com/hc/en-us"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo FAQs
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://duolingoschools.zendesk.com/hc/en-us"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Schools FAQs
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://testcenter.zendesk.com/hc/en-us"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Duolingo English Test FAQs
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://status.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-[170px]" style={{ padding: "0 24px 48px 0" }}>
              <div className="text-xl font-bold mb-3 transform-none">
                Privacy and terms
              </div>
              <ul className="m-0 p-0 list-none">
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://support.duolingo.com/hc/en-us"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Community guidelines
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/terms"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Terms
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/privacy"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Privacy
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://en.duolingo.com/privacy#california"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Respecting your "do not sell my personal information" rights
                  </a>
                </li>
              </ul>
              <div className="h-[26px]"></div>
              <div className="text-lg font-bold mb-3">Social</div>
              <ul className="m-0 p-0 list-none">
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://blog.duolingo.com/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Blog
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://www.instagram.com/duolingo/"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Instagram
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://www.facebook.com/duolingo"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Facebook
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://twitter.com/duolingo"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    Twitter
                  </a>
                </li>
                <li style={{ padding: "5px 0" }}>
                  <a
                    href="https://www.youtube.com/user/duolingo"
                    target="_blank"
                    className="text-white text-base font-bold leading-normal opacity-50"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-sm max-w-6xl text-left"
          style={{
            padding: "24px 40px 48px",
            margin: "0 auto",
            borderTop: "2px solid white",
          }}
        >
          <div className="text-base font-bold" style={{ margin: "6px 0" }}>
            Site language:
          </div>
          <ul className="m-0 p-0">
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://ar.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                العربية
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://bn.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                বাংলা
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://cs.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Čeština
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://de.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Deutsch
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://el.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Ελληνικά
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://en.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                English
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://es.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Español
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://fr.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Français
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://hi.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                हिंदी
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://hu.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Magyar
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://id.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Bahasa Indonesia
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://it.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Italiano
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://ja.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                日本語
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://ko.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                한국어
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://dn.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Nederlands
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://pl.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Polski
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://pt.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Português
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://ro.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Română
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://ru.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Русский
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://th.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                ภาษาไทย
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://tl.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Tagalog
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://tr.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Türkçe
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://uk.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Українською
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://vi.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                Tiếng Việt
              </a>
            </li>
            <li className="pr-6 pt-2 opacity-50 font-bold inline-block">
              <a
                href="https://zs.duolingo.com/"
                target="_blank"
                className="text-white"
              >
                中文
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
