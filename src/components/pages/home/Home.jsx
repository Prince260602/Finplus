import React from "react";
import ParticlesBackground from "../../ParticlesBackground";
import { motion } from "framer-motion";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const lists = [
    'Intelligence at Work "Works While You Sleep"',
    'Client Service Automation "Turn Hours into Minutes"',
    'Predictive Service "Stay Ahead of Client Needs"',
    'Team Amplifier "10x Your Team\'s Capacity" ',
    'Predictive Service "Stay Ahead of Client Needs"',
  ];

  const cardsData = [
    {
      headingThird: "~30%",
      desc: "Savings potential in advisory resources",
    },
    {
      headingThird: ">50%",
      desc: "Potential reduction in working hours (upto 75 hrs/month)",
    },
    {
      headingThird: "100k$",
      desc: "Upto 100k$ in cost savings on salaries / expenses",
    },
  ];

  const texts = [
    "The advisor wastes more than 60% of their time.",
    "on pointless back-office duties, particularly administrative ones.",
    "The existing system is cumbersome, slow, and annoying.",
    "for clients, employees, and advisors.",
  ];

  const textsTwo = [
    "We are constructing an AI-powered back office because of this.",
    "instruments to increase advisor productivity,",
    "transforming them into superheroes in client relationships.",
    "We're not here to follow the rules; we're here to alter them.",
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const lines = [
    { source: "Zoho", target: "Meeting notes" },
    { source: "Salesforce", target: "Prospecting" },
    { source: "Google meeting", target: "Onboarding" },
    { source: "Outlook", target: "Planning" },
    { source: "Redtail", target: "Review" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 0 }}>
        <div className={styles["home-container"]}>
          <section className={styles["hero-section"]}>
            <motion.div className={styles["hero-content"]}>
              <div className={styles["hero-title"]}>
                <h1>AI powered Back Office for advisors</h1>
              </div>
              <div className={styles["hero-desc"]}>
                <p>
                  The first autonomous client service analyst that understands
                  your back office, taking on non-core tasks so you can focus on
                  what matters-ie your clients.
                </p>
              </div>
              <div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles["fancy"]}
                >
                  <Link to ="/Contact">
                  <button>Get early access</button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </section>

          <section className={styles["lists-moving-texts"]}>
            <div className={styles["framer-container"]}>
              <div className={styles["container"]}>
                <ul className={styles["marquee"]}>
                  {lists.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={styles["video-section"]}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={styles["video-container"]}
            >
              <video
                src="https://d3kurm9hxzkbh1.cloudfront.net/fortuna-reveal-v1.mp4"
                autoPlay
                controls
                preload="auto"
                playsInline
              ></video>
            </motion.div>
          </section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={styles["companies-working"]}
          >
            <div className={styles["title-container"]}>
              <div className={styles["title"]}>
                <h2>Built by engineers & supported by TENs</h2>
              </div>
            </div>
          </motion.section>

          <section className={styles["our-mission-section"]}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={styles["our-mission-container"]}
            >
              <div className={styles["title"]}>
                <h2>Our Mission</h2>
              </div>

              <div className={styles["two-contents"]}>
                <div className={styles["first"]}>
                  <h1>
                    Leverage technology and AI to enhance{" "}
                    <span>
                      client service and streamline operations for advisors
                    </span>
                  </h1>
                </div>
                <div className={styles["second"]}>
                  {texts.map((text, index) => (
                    <p key={index}>
                      <span>{text}</span>
                      <span>
                        <br />
                      </span>
                    </p>
                  ))}
                  <br />
                  <p>
                    <span className="font-semibold text-xl">
                      Advisors Deserve Better
                    </span>
                  </p>
                  <br />
                  {textsTwo.map((text, index) => (
                    <p key={index}>
                      <span>{text}</span>
                      <span>
                        <br />
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={styles["sixth-section"]}
          >
            <div className={styles["sixth-title"]}>
              <h1>AI-Powered OS for financial advisor</h1>
            </div>
            <div className={styles["sixth-desc"]}>
              <p>
                Fortuna streamlines operations, reshaping job functions so
                relationship managers can focus more on the human side of client
                relationships.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={styles["animation-part"]}
          >
            <div className={styles["animation-container"]}>
              <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-lg p-5  max-lg:w-[100%] max-sm:w-[100%] bg-gradient-to-l from-[#525252] to-[#1f1f1f]"
              >
                <div className="font-semibold max-sm:text-sm text-xl text-white">
                  {lines.map((line, index) => (
                    <div
                      key={index}
                      className="flex justify-between max-sm:gap-5 gap-44 p-4"
                    >
                      <motion.div variants={itemVariant}>
                        {line.source}
                      </motion.div>

                      <motion.div variants={itemVariant}>
                        {line.target}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={styles["seventh-section"]}
          >
            <div className={styles["seventh-title"]}>
              <h1 clas>Meet Finplus</h1>
            </div>
            <div className={styles["seventh-desc"]}>
              <p>
                <span>
                  Your advisory service back office ie intelligent co worker,
                  not just the dashboard.{" "}
                </span>
                <span>
                  <br />
                </span>
                <span>Fortuna streamlines your back office.</span>
                <span>
                  <br />
                </span>
              </p>
            </div>
            <div className={styles["seventh-cards"]}>
              {cardsData.map((data, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  className={styles["cards"]}
                >
                  <div className={styles["cards-heading"]}>
                    <div className={styles["title"]}>
                      <h3>{data.headingThird}</h3>
                    </div>
                  </div>

                  <div className={styles["cards-desc"]}>
                    <div className={styles["content"]}>
                      <p>{data.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <section className={styles["footer"]}>
            <div className={styles["footer-content"]}>
              <h1>
                Use TEN Finplus to improve your back office and the customer
                experience.
              </h1>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles["fancy"]}
              >
                <Link to ="/Contact">
                <button>Contact us</button>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;

//
